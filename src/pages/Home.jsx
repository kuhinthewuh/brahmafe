import React, { useEffect, useRef, useState } from "react";
import BrahmaSite from "@/components/BrahmaSite";
import BrahmaNav from "@/components/brahma/BrahmaNav";
import CursorGlow from "@/components/brahma/CursorGlow";

const VIDEO_URL = "/assets/BrahmaLandingScroll.mp4";

// Scroll distance dedicated to the bloom + emergence + fade, in viewport heights.
const SCROLL_PAGES = 6;

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

export default function Home() {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const fadeRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const revealedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = scrollRef.current;
    const fade = fadeRef.current;
    if (!video || !container) return;

    let duration = 0;
    let seeking = false;
    let seekTimer = null;
    let raf;

    const progress = () => {
      const scrollable = container.offsetHeight - window.innerHeight;
      const scrolled = scrollable > 0 ? -container.getBoundingClientRect().top : 0;
      return clamp01(scrolled / Math.max(scrollable, 1));
    };

    const applyOverlays = (p) => {
      // Fade everything to black toward the end of the scroll.
      if (fade) {
        fade.style.opacity = String(clamp01((p - 0.6) / 0.38));
      }
    };

    const clearSeeking = () => {
      seeking = false;
      if (seekTimer) {
        clearTimeout(seekTimer);
        seekTimer = null;
      }
    };

    const onSeeked = () => clearSeeking();

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const p = progress();
      applyOverlays(p);
      if (p > 0.95 && !revealedRef.current) {
        revealedRef.current = true;
        setRevealed(true);
      }
      if (!duration || seeking) return;
      const target = p * duration;
      if (Math.abs(target - video.currentTime) < 0.01) return;
      seeking = true;
      try {
        video.currentTime = target;
      } catch {
        seeking = false;
        return;
      }
      // Safety net only: a normal seek fires 'seeked' well under 1s.
      seekTimer = setTimeout(() => {
        seeking = false;
      }, 1000);
    };

    const onReady = () => {
      duration = isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
      // Prime the decoder: a muted video that never plays won't render
      // seeked frames. A quick play/pause forces the first frame to decode.
      if (duration && video.paused) {
        const prime = video.play();
        if (prime && typeof prime.then === "function") {
          prime.then(() => video.pause()).catch(() => {});
        }
      }
    };

    video.addEventListener("loadedmetadata", onReady);
    video.addEventListener("durationchange", onReady);
    video.addEventListener("canplay", onReady, { once: true });
    video.addEventListener("seeked", onSeeked);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      if (seekTimer) clearTimeout(seekTimer);
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("durationchange", onReady);
      video.removeEventListener("seeked", onSeeked);
    };
  }, []);

  return (
    <div className="bg-black">
      <BrahmaNav />
      <CursorGlow />
      <section
        ref={scrollRef}
        aria-label="Brahma bloom"
        style={{ height: `${SCROLL_PAGES * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            ref={fadeRef}
            className="pointer-events-none absolute inset-0 bg-black"
            style={{ opacity: 0, willChange: "opacity" }}
          />
        </div>
      </section>

      <BrahmaSite revealed={revealed} />
    </div>
  );
}