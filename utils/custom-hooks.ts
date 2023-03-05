import { useEffect, useState, useReducer } from "react";

export const useViewPortTracker = () => {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    let prevWidth: number | undefined = undefined;
    const handleVPTrack = () => {
      let currentWidth = window.innerWidth;
      if (
        prevWidth &&
        ((currentWidth > 1100 && prevWidth > 1100) ||
          (currentWidth <= 1100 && currentWidth > 500 && prevWidth <= 1100 && prevWidth > 500) ||
          (currentWidth <= 500 && prevWidth <= 500))
      )
        return;

      if (currentWidth > 1100) {
        setViewport("desktop");
      } else if (currentWidth > 500 && 1100 >= currentWidth) {
        setViewport("tablet");
      } else {
        setViewport("mobile");
      }
      prevWidth = currentWidth;
    };
    window.addEventListener("resize", handleVPTrack);
    window.dispatchEvent(new Event("resize"));
    return () => {
      window.removeEventListener("resize", handleVPTrack);
    };
  }, []);

  return viewport;
};
