"use client";

import "./available-loads.css";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useGuestChat } from "@/chat/GuestChatProvider";
import { usePublicTours } from "@/hooks/usePublicTours";

import {
  ArrowForwardIcon,
  LiveChatIcon,
  PersonIcon,
  StopPinIcon,
} from "./icons";

const TruncatedCity = ({ text }: { text: string }) => {
  const cityRef = useRef<HTMLSpanElement>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);

  const showTooltip = () => {
    const city = cityRef.current;
    if (!city || city.scrollWidth <= city.clientWidth) {
      setTooltip(null);
      return;
    }
    const rect = city.getBoundingClientRect();
    setTooltip({ x: rect.left, y: rect.bottom + 6 });
  };

  return (
    <>
      <span
        ref={cityRef}
        className="available-loads__stop-city"
        onMouseEnter={showTooltip}
        onMouseLeave={() => setTooltip(null)}
      >
        {text}
      </span>
      {tooltip ? (
        <span
          className="available-loads__tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
          role="tooltip"
        >
          {text}
        </span>
      ) : null}
    </>
  );
};

const AvailableLoads = () => {
  const { t } = useTranslation();
  const { openChat } = useGuestChat();
  const { loads, loading, error } = usePublicTours();
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const borderSvgRef = useRef<SVGSVGElement>(null);
  const borderPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wrap = titleWrapRef.current;
    const svg = borderSvgRef.current;
    const path = borderPathRef.current;
    if (!wrap || !svg || !path) return;

    let animation: Animation | null = null;

    const startBorderAnimation = () => {
      animation?.cancel();

      const { width, height } = wrap.getBoundingClientRect();
      const w = Math.max(Math.round(width), 1);
      const h = Math.max(Math.round(height), 1);
      const inset = 1;

      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      path.setAttribute(
        "d",
        `M ${inset} ${h - inset} H ${w - inset} V ${inset} H ${inset} Z`,
      );

      const length = path.getTotalLength();
      const half = length / 2;
      path.style.strokeDasharray = `${half} ${half}`;
      path.style.strokeDashoffset = "0";

      animation = path.animate(
        [
          { strokeDashoffset: 0, stroke: "#376FD0" },
          { strokeDashoffset: -half, stroke: "#6B5BD6" },
          { strokeDashoffset: -length, stroke: "#376FD0" },
        ],
        {
          duration: 2800,
          easing: "linear",
          iterations: Infinity,
        },
      );
    };

    startBorderAnimation();
    const observer = new ResizeObserver(startBorderAnimation);
    observer.observe(wrap);

    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [t]);

  return (
    <section className="available-loads">
      <div className="available-loads__inner">
        <div className="available-loads__title-wrap" ref={titleWrapRef}>
          <svg
            ref={borderSvgRef}
            className="available-loads__title-border"
            aria-hidden
          >
            <path
              ref={borderPathRef}
              className="available-loads__title-border-path"
            />
          </svg>
          <h2 className="available-loads__title">{t("availableLoads.title")}</h2>
        </div>

        <div className="available-loads__scroll">
          <div className="available-loads__list">
            <div className="available-loads__head" role="row">
              <span className="available-loads__head-cell">
                {t("availableLoads.loadId")}
              </span>
              <span className="available-loads__head-cell">
                {t("availableLoads.destinations")}
              </span>
              <span className="available-loads__head-cell">
                {t("availableLoads.distanceTime")}
              </span>
              <span className="available-loads__head-cell">
                {t("availableLoads.actionType")}
              </span>
              <span className="available-loads__head-cell">
                {t("availableLoads.payout")}
              </span>
              <span className="available-loads__head-cell">
                {t("availableLoads.liveChat")}
              </span>
            </div>

            {loading && (
              <p className="available-loads__status">{t("availableLoads.loading")}</p>
            )}

            {!loading && error != null ? (
              <p className="available-loads__status available-loads__status--error">
                {t("availableLoads.error")}
              </p>
            ) : null}

            {!loading && !error && loads.length === 0 && (
              <p className="available-loads__status">{t("availableLoads.empty")}</p>
            )}

            {!loading &&
              !error &&
              loads.map((load) => (
                <div key={load.key} className="available-loads__row">
                  <div className="available-loads__cell">
                    <span className="available-loads__id">{load.id}</span>
                  </div>

                  <div className="available-loads__cell">
                    <div className="available-loads__destinations">
                      <div className="available-loads__stop">
                        <StopPinIcon index={1} />
                        <TruncatedCity text={load.from} />
                      </div>
                      <span className="available-loads__arrow">
                        <ArrowForwardIcon />
                      </span>
                      <div className="available-loads__stop">
                        <StopPinIcon index={2} />
                        <TruncatedCity text={load.to} />
                      </div>
                    </div>
                  </div>

                  <div className="available-loads__cell">
                    <p className="available-loads__distance">{load.distance}</p>
                    <p className="available-loads__time">{load.time}</p>
                  </div>

                  <div className="available-loads__cell">
                    <div className="available-loads__action">
                      <span className="available-loads__action-icon">
                        <PersonIcon />
                      </span>
                      <span className="available-loads__action-type">
                        {load.actionType}
                      </span>
                    </div>
                  </div>

                  <div className="available-loads__cell">
                    <span className="available-loads__payout">{load.payout}</span>
                  </div>

                  <div className="available-loads__cell available-loads__cell--chat">
                    <button
                      type="button"
                      className="available-loads__chat-button"
                      aria-label={t("availableLoads.liveChat")}
                      onClick={() => openChat({ tourId: load.tourId, loadId: load.id })}
                    >
                      <LiveChatIcon />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableLoads;
