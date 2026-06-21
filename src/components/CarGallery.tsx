"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

/** Request a larger Unsplash render for the full-screen view (falls back gracefully for other URLs). */
function hiRes(src: string) {
  return src.replace(/([?&])w=\d+/, "$1w=2400");
}

export function CarGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Keyboard controls + scroll lock while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  return (
    <div>
      {/* Main image — click to enlarge */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge image"
        className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/10"
      >
        <Image
          key={active}
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur transition-opacity group-hover:bg-black/80">
          <ZoomIn size={14} /> Tap to enlarge
        </span>
      </button>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-[16/10] w-28 overflow-hidden rounded-xl border transition-all ${
                active === i ? "border-horic ring-1 ring-horic" : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt={`${alt} thumbnail ${i + 1}`} fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Full-screen lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
            >
              <X size={22} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 sm:left-6"
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 sm:right-6"
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}

            <motion.img
              key={active}
              src={hiRes(images[active])}
              alt={alt}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
            />

            {images.length > 1 && (
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                {active + 1} / {images.length}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
