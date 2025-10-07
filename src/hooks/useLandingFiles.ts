// src/hooks/useLandingFiles.ts
import { useEffect, useRef, useState } from "react";

export type FileItem = {
  fileName: string;
  fileType: string;
  fileUrl: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Simple module-level cache to prevent refetching across mounts
let cached: FileItem[] | null = null;
let inflight: Promise<FileItem[] | null> | null = null;

export function useLandingFiles() {
  const [files, setFiles] = useState<FileItem[]>(cached ?? []);
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
        inflight =
          inflight ??
          fetch(`${apiUrl}/File/Get/Landing`)
            .then((r) => r.json())
            .catch((e) => {
              throw e;
            });
        const data = (await inflight) as FileItem[];
        cached = data;
        if (mounted.current) setFiles(data);
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

  return { files, loading, error };
}
