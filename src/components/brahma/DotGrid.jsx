import { useRef, useEffect } from "react";

export default function DotGrid({
  dotSize = 2.4,
  gap = 30,
  baseColor = "#16223a",
  activeColor = "#6fa8ff",
  proximity = 160,
  shockRadius = 260,
  shockStrength = 6,
  className = "",
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    let raf;
    let dots = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: -9999, y: -9999, lx: 0, ly: 0 };

    const hexToRgb = (hex) => {
      const v = hex.replace("#", "");
      return [
        parseInt(v.slice(0, 2), 16),
        parseInt(v.slice(2, 4), 16),
        parseInt(v.slice(4, 6), 16),
      ];
    };
    const base = hexToRgb(baseColor);
    const active = hexToRgb(activeColor);

    const build = () => {
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.floor(w / gap) + 1;
      const rows = Math.floor(h / gap) + 1;
      const offX = (w - (cols - 1) * gap) / 2;
      const offY = (h - (rows - 1) * gap) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offX + c * gap;
          const y = offY + r * gap;
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
    };

    const loop = () => {
      pointer.lx = pointer.x;
      pointer.ly = pointer.y;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - pointer.x;
        const dy = d.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < proximity && dist > 0.001) {
          const t = 1 - dist / proximity;
          d.vx += (dx / dist) * t * 1.1;
          d.vy += (dy / dist) * t * 1.1;
          const cr = Math.round(base[0] + (active[0] - base[0]) * t);
          const cg = Math.round(base[1] + (active[1] - base[1]) * t);
          const cb = Math.round(base[2] + (active[2] - base[2]) * t);
          ctx.fillStyle = `rgb(${cr},${cg},${cb})`;
          const sz = dotSize * (1 + t * 1.6);
          ctx.beginPath();
          ctx.arc(d.x, d.y, sz / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = baseColor;
          ctx.beginPath();
          ctx.arc(d.x, d.y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        d.vx += (d.ox - d.x) * 0.02;
        d.vy += (d.oy - d.y) * 0.02;
        d.vx *= 0.86;
        d.vy *= 0.86;
        d.x += d.vx;
        d.y += d.vy;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const d of dots) {
        const dx = d.x - cx;
        const dy = d.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < shockRadius && dist > 0.001) {
          const t = 1 - dist / shockRadius;
          d.vx += (dx / dist) * t * shockStrength * 6;
          d.vy += (dy / dist) * t * shockStrength * 6;
        }
      }
    };
    const onResize = () => build();

    build();
    loop();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onClick);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength]);

  return (
    <canvas
      ref={ref}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={style}
    />
  );
}