const d = {
  pen: 'M4 20l4-1 11-11-3-3L5 16z|M14 6l3 3', book: 'M3 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H3z|M21 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z', print: 'M7 9V4h10v5|M6 18H4v-7h16v7h-2|M7 14h10v6H7z', mega: 'M3 11v3l12 5V6z|M15 9a3 3 0 0 1 0 6|M6 14l1 5h2',
  image: 'M3 5h18v14H3z|M3 16l5-5 4 4 3-3 6 6|M9 9h.01', chart: 'M3 17l6-6 4 4 8-8|M15 7h6v6', profiles: 'M6 3h9l4 4v14H6z|M14 3v5h5|M9 13h6M9 17h6', ai: 'M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z|M9 21h6|M12 7v4M10 9h4',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z', bolt: 'M13 2L4 14h7l-1 8 9-12h-7z', layers: 'M12 3l9 5-9 5-9-5z|M3 13l9 5 9-5', cap: 'M2 9l10-5 10 5-10 5z|M6 11v5c0 1 3 3 6 3s6-2 6-3v-5',
  mail: 'M3 5h18v14H3z|M3 7l9 7 9-7', palette: 'M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.5-1 0-2 1.5-2h2a4 4 0 0 0 4-4c0-5-4.5-10-9-10z|M7.5 11h.01M11 7.5h.01M15.5 8.5h.01', id: 'M3 5h18v14H3z|M8 11a2 2 0 1 0 0-.01|M5 16c1-2 5-2 6 0|M14 9h5M14 13h5',
  camera: 'M4 7h3l2-3h6l2 3h3v13H4z|M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', chat: 'M21 12a8 8 0 0 1-11.6 7L4 20l1.1-4.8A8 8 0 1 1 21 12z|M9 10c0 3 2 5 5 5l1-1.500-2-1-1 .8c-.7-.3-1.300-1-1.600-1.600l.8-1-1-2z',
  arrowr: 'M5 12h14M13 6l6 6-6 6', arrowu: 'M12 19V5M6 11l6-6 6 6', menu: 'M4 7h16M4 12h16M4 17h10', close: 'M6 6l12 12M18 6L6 18', check: 'M20 6L9 17l-5-5', folder: 'M3 6h6l2 2h10v11H3z', plus: 'M12 5v14M5 12h14',
  instagram: 'M4 4h16v16H4z|M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z|M17 7h.01', behance: 'M3 6h6a3 3 0 0 1 0 6H3zM3 12h7a3 3 0 0 1 0 6H3z|M14 8h7M14 15h7a3 3 0 0 0-7 0 3 3 0 0 0 3 3 3 3 0 0 0 3-2', linkedin: 'M5 9v10M5 5h.01|M10 19v-6a3 3 0 0 1 6 0v6M10 9v10',
  facebook: 'M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z', tiktok: 'M14 4v10a4 4 0 1 1-4-4|M14 4c0 3 2 5 5 5', youtube: 'M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z|M10 9l5 3-5 3z', x: 'M4 4l16 16M20 4L4 20', telegram: 'M21 4L3 11l6 2 2 6 3-4 5 4z',
  pinterest: 'M12 3a9 9 0 0 0-3 17.5c-.1-.8 0-1.8.2-2.6l1-4s-.3-.6-.3-1.3c0-1.3.7-2.2 1.6-2.2.8 0 1.1.6 1.1 1.2 0 .8-.5 1.9-.7 2.9-.2.9.4 1.6 1.3 1.6 1.6 0 2.8-1.7 2.8-4.1 0-2.100-1.500-3.600-3.700-3.600a3.800 3.800 0 0 0-4 3.800c0 .800.300 1.600.700 2.100', link: 'M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1|M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1',
};
export default function Icon({ n, size = 20, className = '' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{(d[n] || d.link).split('|').map((p, i) => <path key={i} d={p} />)}</svg>;
}
