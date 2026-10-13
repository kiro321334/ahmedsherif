"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function SocialModal({
  title,
  images,
  onClose,
}: {
  title: string;
  images: string[];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/95"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink"
      >
        <X size={20} aria-hidden="true" />
      </button>
      <div className="mx-auto flex max-w-[480px] flex-col gap-3 px-4 py-16" onClick={(e) => e.stopPropagation()}>
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${title} – ${i + 1}`}
            loading="lazy"
            className="h-auto w-full rounded-[16px]"
          />
        ))}
      </div>
    </div>
  );
}