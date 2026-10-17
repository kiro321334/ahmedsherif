"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

function Zoom({ src, alt, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div
      role="dialog"
      aria-label="Image preview"
      onClick={onClose}
      className="fixed inset-0 z-[60] grid cursor-zoom-out place-items-center bg-black/95 p-3"
    >
      <button
        type="button"
        aria-label="Close preview"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-panel2"
      >
        <Icon n="close" size={20} />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full rounded-lg object-contain"
      />
    </div>
  );
}

export default function WorkModal({ p, onClose }) {
  const ref = useRef(null);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const close = () => ref.current.close();
  const imgs = (p.folder ? p.images : [p.image]).filter((m) => m?.url);

  return (
    <>
      <dialog
        ref={ref}
        onClose={onClose}
        onClick={(e) => e.target === ref.current && close()}
        aria-label={p.title}
        className="m-auto h-svh w-screen max-w-none overflow-hidden bg-bg p-0 text-cream backdrop:bg-black/85 backdrop:backdrop-blur-sm md:h-[92svh] md:rounded-3xl"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
            <h2 className="font-serif text-2xl leading-tight md:text-3xl">
              {p.title}
            </h2>
            <button
              type="button"
              autoFocus
              onClick={close}
              aria-label="Close"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-panel2 text-gold"
            >
              <Icon n="close" size={20} />
            </button>
          </div>

          <div className="modal-scroll flex-1 overflow-y-auto p-6">
            {!p.folder && p.desc && (
              <p className="mb-5 text-sm leading-relaxed text-cream/85">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[.2em] text-gold">
                  {p.category}
                </span>
                {p.desc}
              </p>
            )}

            {imgs.length === 0 ? (
              <p className="py-16 text-center text-sm text-mute">
                No images yet.
              </p>
            ) : (
              <div
                className={`grid gap-3 ${p.folder ? "grid-cols-2 md:grid-cols-4" : ""}`}
              >
                {imgs.map((m, i) => (
                  <button
                    key={m.url + i}
                    type="button"
                    onClick={() =>
                      setZoom({ src: m.url, alt: `${p.title} – ${i + 1}` })
                    }
                    aria-label={`Zoom image ${i + 1}`}
                    className="relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-panel"
                    style={{
                      aspectRatio:
                        m.width && m.height ? `${m.width}/${m.height}` : "4/5",
                    }}
                  >
                    <Image
                      src={m.url}
                      alt={`${p.title} – ${p.category} ${i + 1}`}
                      fill
                      sizes="(min-width:1024px) 15vw, (min-width:768px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </dialog>
      {zoom && <Zoom {...zoom} onClose={() => setZoom(null)} />}
    </>
  );
}
