"use client";

import { useEffect, useState, useCallback } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -400, y: -400 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    // Skip on mobile or when reduced motion is preferred
    if (window.innerWidth <= 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setVisible(true);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(46,204,113,0.06) 0%, transparent 70%)",
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        transition: "transform 0.15s ease-out",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
