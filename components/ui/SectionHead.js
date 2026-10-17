export default function SectionHead({ num, eyebrow, title }) {
  return (<div className="reveal"><p className="flex items-baseline gap-3"><span className="num">{num}</span><span className="eyebrow">{eyebrow}</span></p><h2 className="h2">{title}</h2></div>);
}
