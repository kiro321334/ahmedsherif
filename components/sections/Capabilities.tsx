import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { CAPABILITIES } from "@/lib/data";

export default function Capabilities() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="bg-deep px-page py-16"
    >
      <SectionHeading
        id="skills-title"
        no="02"
        label="Expertise & Craft"
        title="Core Capabilities"
      />
      <ul className="mt-6 grid grid-cols-2 gap-3">
        {CAPABILITIES.map((c) => (
          <li key={c.title} className="rounded-2xl bg-surface p-4">
            <Icon name={c.icon} size={20} className="text-gold" />
            <h3 className="mt-3 text-[18px] leading-snug text-cream">
              {c.title}
            </h3>
            <p className="mt-2 text-[12px] font-medium tracking-[0.12em] text-muted">
              {c.sub}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
