import { useCallback, useEffect, useRef, useState } from "react";

export default function StoryViewer({ isOpen, onClose, story, onNext, onPrev }) {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const pressTimer = useRef(null);
  const holdStart = useRef(0);
  const DURATION = 5000;

  // ─── پیشرفت عکس‌ها ───
  useEffect(() => {
    if (!isOpen || story?.type !== "image" || isPaused) return;

    setProgress(0);
    const start = Date.now();
    const t = setInterval(() => {
      const p = Math.min(((Date.now() - start) / DURATION) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(t);
        onNext?.();
      }
    }, 50);
    return () => clearInterval(t);
  }, [isOpen, story?.id, isPaused, onNext]);

  // ─── پیشرفت ویدیو ───
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  // ─── قفل اسکرول + کیبورد ───
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === " ") {
        e.preventDefault();
        togglePause();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose, onNext, onPrev]);

  // ─── ریست ویدیو با تغییر استوری ───
  useEffect(() => {
    if (!isOpen) return;
    setIsPaused(false);
    setProgress(0);
    if (story?.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, story?.id]);

  const togglePause = useCallback(() => {
    setIsPaused((p) => {
      const next = !p;
      if (story?.type === "video" && videoRef.current) {
        if (next) videoRef.current.pause();
        else videoRef.current.play().catch(() => {});
      }
      return next;
    });
  }, [story?.type]);

  // ─── نگه‌داشتن → Pause / رها کردن → Resume ───
  const handlePressStart = () => {
    holdStart.current = Date.now();
    pressTimer.current = setTimeout(() => {
      setIsPaused(true);
      if (story?.type === "video" && videoRef.current) videoRef.current.pause();
    }, 250);
  };

  const handlePressEnd = (side) => {
    clearTimeout(pressTimer.current);
    const holdDuration = Date.now() - holdStart.current;

    if (holdDuration < 250) {
      if (side === "left") onPrev?.();
      else onNext?.();
      return;
    }

    setIsPaused(false);
    if (story?.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handlePressCancel = () => {
    clearTimeout(pressTimer.current);
    setIsPaused(false);
    if (story?.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col select-none">
      {/* ─── هدر + نوار پیشرفت ─── */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/20 z-20">
          <div
            className="h-full bg-white"
            style={{ width: `${progress}%`, transition: "width 50ms linear" }}
          />
        </div>

        <div className="flex items-center justify-between px-3 sm:px-4 pt-4 pb-2">
          <div className="flex items-center gap-4 text-white">
            <button
              onClick={onClose}
              className="p-1 hover:opacity-70"
              aria-label="بستن"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {story.type === "video" && (
              <button
                onClick={() => setIsMuted((m) => !m)}
                className="p-1 hover:opacity-70"
                aria-label="صدا"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                  {isMuted ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 9l-6 6m0-6l6 6" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
                  )}
                </svg>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-white">
            <span className="text-sm font-semibold">PS5</span>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/30">
              <img
                src="https://digital.pixaa.ir/wp-content/uploads/2026/10/playstation.jpg"
                alt="PS5"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── مدیا وسط ─── */}
      <div
        className="flex-1 relative flex items-center justify-center overflow-hidden"
        onMouseDown={handlePressStart}
        onMouseUp={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const side = e.clientX - rect.left < rect.width / 2 ? "left" : "right";
          handlePressEnd(side);
        }}
        onMouseLeave={handlePressCancel}
        onTouchStart={handlePressStart}
        onTouchEnd={(e) => {
          const touch = e.changedTouches[0];
          const rect = e.currentTarget.getBoundingClientRect();
          const side = touch.clientX - rect.left < rect.width / 2 ? "left" : "right";
          handlePressEnd(side);
        }}
        onTouchCancel={handlePressCancel}
      >
        {story.type === "video" ? (
          <video
            ref={videoRef}
            src={story.src}
            poster={story.poster}
            autoPlay
            muted={isMuted}
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => onNext?.()}
            className="max-w-full max-h-full object-contain pointer-events-none"
          />
        ) : (
          <img
            src={story.src}
            alt={story.title || "Story"}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="max-w-full max-h-full object-contain pointer-events-none"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}

        {isPaused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* ─── دکمه CTA پایین ─── */}
      <div className="w-full flex justify-center pb-8 pt-4">
        <a
          href={story.href || "#"}
          className="px-8 py-3 rounded-full bg-gray-800 text-white text-base font-semibold hover:bg-gray-700 transition shadow-lg"
        >
          {story.cta || "خرید PS5"}
        </a>
      </div>
    </div>
  );
}