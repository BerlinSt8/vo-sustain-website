"use client";

import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  angle: number;
  drift: number;
}

export default function FloatingOrbs({
  count = 18,
  color = "39,174,96",
  maxSize = 6,
  minSize = 2,
}: {
  count?: number;
  color?: string;
  maxSize?: number;
  minSize?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init orbs
    orbsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: 0.15 + Math.random() * 0.35,
      speed: 0.15 + Math.random() * 0.4,
      angle: Math.random() * Math.PI * 2,
      drift: (Math.random() - 0.5) * 0.003,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const orb of orbsRef.current) {
        orb.angle += orb.drift;
        orb.x += Math.cos(orb.angle) * orb.speed;
        orb.y += Math.sin(orb.angle) * orb.speed - 0.12; // subtle upward drift

        // Wrap around
        if (orb.y < -orb.size * 2) orb.y = canvas.height + orb.size;
        if (orb.y > canvas.height + orb.size * 2) orb.y = -orb.size;
        if (orb.x < -orb.size * 2) orb.x = canvas.width + orb.size;
        if (orb.x > canvas.width + orb.size * 2) orb.x = -orb.size;

        // Draw glow
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size * 3);
        gradient.addColorStop(0, `rgba(${color},${orb.opacity})`);
        gradient.addColorStop(0.4, `rgba(${color},${orb.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = `rgba(${color},${orb.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count, color, maxSize, minSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
