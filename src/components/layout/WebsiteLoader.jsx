"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import StudioLogo from "@/components/brand/StudioLogo";

const LOGO_SIZE = 180;
const MIN_LOADER_MS = 1600;
const FILL_COMPLETE_MS = 450;
const FADE_OUT_MS = 550;

export default function WebsiteLoader() {
  const [fillProgress, setFillProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    let frameId = 0;
    let loadFinished = false;
    let finishTimeoutId;
    let hideTimeoutId;
    let removeTimeoutId;

    const finishLoader = () => {
      if (loadFinished) return;
      loadFinished = true;

      const elapsed = Date.now() - startTime;
      const wait = Math.max(0, MIN_LOADER_MS - elapsed);

      finishTimeoutId = window.setTimeout(() => {
        setFillProgress(100);
        setIsLoaded(true);

        hideTimeoutId = window.setTimeout(() => {
          setIsFading(true);

          removeTimeoutId = window.setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
          }, FADE_OUT_MS);
        }, FILL_COMPLETE_MS);
      }, wait);
    };

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const simulated = Math.min(92, (elapsed / MIN_LOADER_MS) * 92);
      setFillProgress((prev) => Math.max(prev, simulated));

      if (!loadFinished) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    document.body.style.overflow = "hidden";
    frameId = window.requestAnimationFrame(tick);

    if (document.readyState === "complete") {
      finishLoader();
    } else {
      window.addEventListener("load", finishLoader, { once: true });
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(finishTimeoutId);
      window.clearTimeout(hideTimeoutId);
      window.clearTimeout(removeTimeoutId);
      window.removeEventListener("load", finishLoader);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  const clipInset = `${100 - fillProgress}% 0 0 0`;

  return (
    <Box
      aria-hidden={isFading}
      aria-label="Loading Tina Designer Studio"
      role="status"
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FFFFFF",
        opacity: isFading ? 0 : 1,
        visibility: isFading ? "hidden" : "visible",
        transition: `opacity ${FADE_OUT_MS}ms ease, visibility ${FADE_OUT_MS}ms ease`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: LOGO_SIZE,
          height: LOGO_SIZE,
        }}
      >
        <Box sx={{ position: "absolute", inset: 0 }}>
          <StudioLogo size={LOGO_SIZE} variant="outline" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(${clipInset})`,
            transition: isLoaded
              ? `clip-path ${FILL_COMPLETE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : "clip-path 80ms linear",
            willChange: "clip-path",
          }}
        >
          <StudioLogo size={LOGO_SIZE} variant="filled" priority />
        </Box>
      </Box>
    </Box>
  );
}
