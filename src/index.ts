import { useEffect, useRef } from "react";

/**
 * Sends an HTTP POST request containing a small amount of data
 * to a web server, when page gets unloaded.
 */
export function useUnloadBeacon<T extends BodyInit | null>(
  url: string,
  payload: T | ((event: Event) => T)
) {
  const unloadBeaconRef = useRef({ url, payload });

  useEffect(() => {
    unloadBeaconRef.current.url = url;
    unloadBeaconRef.current.payload = payload;
  });

  useEffect(() => {
    const handleUnload = (event: Event) => {
      const { url, payload } = unloadBeaconRef.current;
      navigator.sendBeacon(
        url,
        typeof payload === "function" ? payload(event) : payload
      );
    };
    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);
}

export default useUnloadBeacon;
