import Image from "next/image";
import Icon from "@/components/ui/Icon";
const ext = (h) => /^https?:\/\//i.test(h);
const A = ({ l, className, children }) => (
  <a
    href={l.href}
    className={className}
    {...(ext(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    {children || l.label}
  </a>
);
export default function Header({ c }) {
  const h = c.header,
    links = (h.links || []).filter((l) => l.label && l.href),
    cta = h.cta?.show && h.cta.label ? h.cta : null,
    lg = h.logo?.url;
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-5xl items-center justify-between gap-3 px-6">
        <a
          href="#top"
          aria-label={`${c.site.name} home`}
          className="text-xs font-bold uppercase tracking-[.25em] text-gold"
        >
          {lg ? (
            <Image
              src={h.logo.url}
              alt={c.site.name}
              width={Math.round(
                32 * ((h.logo.width || 3) / (h.logo.height || 1)),
              )}
              height={32}
              priority
              style={{ height: 32, width: "auto" }}
            />
          ) : (
            h.brand
          )}
        </a>
        <nav
          aria-label="Main"
          className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[.15em] md:flex"
        >
          {links.map((l, i) => (
            <A key={i} l={l} className="transition hover:text-gold" />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {cta && (
            <A
              l={cta}
              className="pill-g hidden px-5 py-3 text-[11px] sm:inline-flex"
            />
          )}
          <details className="relative md:hidden">
            <summary
              aria-label="Menu"
              className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full bg-panel2 text-gold"
            >
              <Icon n="menu" size={20} />
            </summary>
            <div className="absolute right-0 mt-2 grid w-52 gap-1 rounded-2xl border border-line bg-panel p-2 text-xs font-semibold uppercase tracking-[.12em] shadow-xl">
              {links.map((l, i) => (
                <A
                  key={i}
                  l={l}
                  className="rounded-xl px-4 py-3 hover:bg-panel2"
                />
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
