import {
  PenLine, BookOpen, Printer, Megaphone, ImageIcon, TrendingUp, BookOpenText, BrainCircuit,
  House, User, Gem, LayoutGrid, ScrollText, Mail, GraduationCap, type LucideProps,
} from "lucide-react";

const map = {
  pen: PenLine, book: BookOpen, printer: Printer, megaphone: Megaphone, image: ImageIcon, chart: TrendingUp,
  bookText: BookOpenText, brain: BrainCircuit, home: House, user: User, gem: Gem, grid: LayoutGrid,
  scroll: ScrollText, mail: Mail, cap: GraduationCap,
} as const;
export type IconName = keyof typeof map;

export default function Icon({ name, ...p }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C aria-hidden="true" {...p} />;
}
