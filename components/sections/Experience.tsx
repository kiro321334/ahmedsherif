import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="exp" aria-labelledby="exp-title" className="bg-band px-page py-20">
      <SectionHeading id="exp-title" no="04" label="Career & Clients" title="Work Experience" />
      <ul className="mt-6 space-y-2">
        {EXPERIENCE.map((e) => (
          <li key={e.name} className="flex items-center justify-between gap-3 rounded-xl bg-surface/70 px-4 py-4">
            <div className="min-w-0">
              <h3 className="truncate text-[18px] text-cream">{e.name}</h3>
              <p className="text-[14px] text-muted">{e.place}</p>
            </div>
            <span className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-wider ${
              e.type === "On-site" ? "bg-gold/25 text-gold" : "bg-white/5 text-gold"}`}>
              {e.type}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
