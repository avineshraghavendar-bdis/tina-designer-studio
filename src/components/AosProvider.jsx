"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DESKTOP_AOS_MIN_WIDTH = 1200;

export default function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: () => window.innerWidth < DESKTOP_AOS_MIN_WIDTH,
    });

    const onResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return children;
}
