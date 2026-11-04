import { useEffect, useRef, useState } from "react";

export type PublicTourStop = {
  sequence: number;
  location: {
    line1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    latitude?: number;
    longitude?: number;
    timeZone?: string;
  };
};

export type PublicTour = {
  tourId: string;
  localId: string;
  stops: PublicTourStop[];
  startTime: string;
  endTime: string;
  distance: { value: number; unit: string };
  transitTime: string;
  equipmentType: string;
  payout: { value: number; unit: string };
};

export type AvailableLoadRow = {
  key: string;
  id: string;
  tourId: string;
  from: string;
  to: string;
  distance: string;
  time: string;
  actionType: string;
  payout: string;
};

type PublicToursResponse = {
  tours?: PublicTour[];
};

const apiOrigin = String(
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "",
).replace(/\/$/, "");

const currencySymbol = (unit: string) => {
  const normalized = unit.trim().toUpperCase();
  if (normalized === "EUR" || normalized === "€") return "€";
  if (normalized === "USD" || normalized === "$") return "$";
  if (normalized === "PLN" || normalized === "ZL") return "zł";
  return unit ? `${unit} ` : "";
};

const formatEquipment = (value: string) => {
  const text = value.trim();
  if (!text) return "—";
  return text
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const stopLabel = (stop?: PublicTourStop) => {
  const city = stop?.location?.city?.trim();
  const line1 = stop?.location?.line1?.trim();
  return city || line1 || "—";
};

const displayTourId = (tourId: string) => {
  const id = tourId.trim();
  if (!id) return "—";
  return id.length > 9 ? id.slice(-9).toUpperCase() : id.toUpperCase();
};

export const mapPublicTourToRow = (tour: PublicTour): AvailableLoadRow => {
  const stops = [...(tour.stops ?? [])].sort(
    (a, b) => (a.sequence ?? 0) - (b.sequence ?? 0),
  );
  const first = stops[0];
  const last = stops[stops.length - 1];
  const distanceValue = Math.round(Number(tour.distance?.value) || 0);
  const distanceUnit = tour.distance?.unit?.trim() || "km";
  const payoutValue = Number(tour.payout?.value) || 0;
  const payoutUnit = currencySymbol(tour.payout?.unit ?? "EUR");

  return {
    key: tour.localId || tour.tourId,
    id: displayTourId(tour.tourId),
    tourId: tour.tourId?.trim() ?? "",
    from: stopLabel(first),
    to: stopLabel(last),
    distance: `${distanceValue} ${distanceUnit}`,
    time: tour.transitTime?.trim() || "—",
    actionType: formatEquipment(tour.equipmentType ?? ""),
    payout: `${payoutUnit}${payoutValue.toFixed(2)}`,
  };
};

let cached: AvailableLoadRow[] | null = null;
let inflight: Promise<AvailableLoadRow[] | null> | null = null;

export function usePublicTours() {
  const [loads, setLoads] = useState<AvailableLoadRow[]>(cached ?? []);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState<unknown>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (cached) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        inflight =
          inflight ??
          fetch(`${apiOrigin}/Tour/GetPublicToursForLoadBoard`)
            .then(async (response) => {
              if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
              }
              return response.json() as Promise<PublicToursResponse>;
            })
            .then((data) => (data.tours ?? []).map(mapPublicTourToRow));

        const rows = (await inflight) ?? [];
        cached = rows;
        if (mounted.current) setLoads(rows);
      } catch (e) {
        if (mounted.current) setError(e);
      } finally {
        inflight = null;
        if (mounted.current) setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted.current = false;
    };
  }, []);

  return { loads, loading, error };
}
