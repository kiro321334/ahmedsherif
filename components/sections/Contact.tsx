import {
  Camera,
  Contact as Card,
  Mail,
  MessageCircle,
  Palette,
} from "lucide-react";
import { EMAIL, WHATSAPP } from "@/lib/site";

const links = [
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: Card },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: Camera },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[radial-gradient(ellipse_at_50%_30%,rgba(232,192,122,0.12),transparent_65%)] bg-deep px-page py-20 text-center"
    >
      <p className="flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">
        <span className="h-2 w-2 rounded-full bg-gold" />
        05 • Let&apos;s Work Together
      </p>
      <h2
        id="contact-title"
        className="mt-6 font-serif text-[34px] leading-[1.25] text-cream"
      >
        Have a Project in Mind? Let&apos;s Make It{" "}
        <em className="text-gold">Unforgettable</em>.
      </h2>
      <p className="mx-auto mt-6 max-w-[320px] text-[16px] leading-[1.6] text-cream/75">
        Tell me about your idea, and I will reply within 24 hours with concept
        ideas and workflow options.
      </p>
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold py-4 text-[14px] font-semibold uppercase tracking-wide text-ink"
      >
        <MessageCircle size={14} aria-hidden="true" />
        Chat on WhatsApp
      </a>
      <ul className="mt-8 flex justify-center gap-2">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-gold"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
