// المحتوى الافتراضي — بيظهر لحد ما العميل يحفظ من الداشبورد
const proj = (id, category, title, desc, folder = false) => ({ id, category, title, desc, folder, image: null, cover: null, images: [] });
const defaults = {
  site: {
    name: 'Ahmed Sherif', location: 'Cairo, Egypt', whatsapp: '201151056550', email: 'ahmed.elsherif5520@gmail.com',
    title: 'Ahmed Sherif | Graphic Designer & Art Director – Branding, Logo & Social Media Design | أحمد شريف مصمم جرافيك',
    description: 'Ahmed Sherif is a graphic designer & art director creating brand identities, logos, packaging, social media and editorial campaigns across Egypt, Saudi Arabia and Jordan. أحمد شريف مصمم جرافيك: هوية بصرية، لوجو، تصميم عبوات وسوشيال ميديا.',
    keywords: 'graphic designer Egypt, art director, brand identity design, logo design, packaging design, social media design, company profile design, infographic design, AI art, freelance designer, مصمم جرافيك, مصمم هوية بصرية, تصميم لوجو, تصميم عبوات, تصميم سوشيال ميديا, بروفايل شركات, أحمد شريف',
  },
  header: { brand: 'AHMED SHERIF', logo: null, cta: { show: true, label: "LET'S TALK", href: '#contact' },
    links: [{ label: 'Home', href: '#top' }, { label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' }, { label: 'Work', href: '#work' }, { label: 'Experience', href: '#experience' }, { label: 'Contact', href: '#contact' }] },
  hero: { image: { url: '/hero.jpg', type: 'image' }, label: 'GRAPHIC DESIGNER • ART DIRECTOR', titleA: 'I Design Brands That Get', titleB: 'Remembered', titleEnd: '.', text: 'Visual identities and editorial campaigns that bring together concept, aesthetics, and lasting cultural impact.', cta1: 'VIEW MY WORK', cta2: 'CONTACT ME' },
  stats: [{ value: '6+', label: 'YEARS EXP.' }, { value: '11+', label: 'KEY CLIENTS' }, { value: '3', label: 'COUNTRIES' }],
  about: { num: '01', eyebrow: 'WHO AM I?', title: 'Auteur of Visual Harmony', photo: { url: '/about.jpg', type: 'image' },
    lead: 'I am a graphic designer driven by turning abstract intentions into visual artefacts that are effortlessly seen, intuitively understood, and permanently remembered.',
    text: 'Specializing in high-touch identity, editorial precision, and strategic brand direction across Egypt, Saudi Arabia, and Jordan.',
    craftValue: '+6', craftLabel: 'YEARS OF CRAFT', craftSub: 'Cairo & Riyadh Collaborations',
    eduYears: '2019 — 2023 • HIGHER INSTITUTE FOR LANGUAGES', eduDegree: 'Bachelor of Languages', eduSub: 'English & German Linguistics • Cross-Cultural Narrative' },
  skills: { num: '02', eyebrow: 'EXPERTISE & CRAFT', title: 'Core Capabilities', items: [
    { icon: 'pen', title: 'Logo Design', sub: 'Custom Glyphs & Icons' }, { icon: 'book', title: 'Brand Identity', sub: 'Systems & Guidelines' },
    { icon: 'print', title: 'Print & Prepress', sub: 'Packaging & Foil Finishes' }, { icon: 'mega', title: 'Ad Campaigns', sub: 'OOH & Digital Ads' },
    { icon: 'image', title: 'Social Media', sub: 'Editorial Grid Storytelling' }, { icon: 'chart', title: 'Infographics', sub: 'Visual Data Diagrams' },
    { icon: 'profiles', title: 'Company Profiles', sub: 'Editorial Publications' }, { icon: 'ai', title: 'AI-Driven Art', sub: 'Prompt & Generative Visuals' }] },
  work: { num: '03', eyebrow: 'FEATURED PORTFOLIO', title: 'Selected Works', categories: ['BRANDING', 'PACKAGING', 'LOGOS', 'SOCIAL MEDIA'], singleLabel: 'EXPLORE CASE STUDY', folderLabel: 'OPEN FOLDER', moreLabel: 'VIEW MORE WORKS' },
  projects: [
    proj('luxe-noir', 'BRANDING', 'Luxe Noir Identity', 'Complete brand identity, bespoke ligature wordmark, and stationery design for a boutique consultancy.'),
    proj('aura-medical', 'BRANDING', 'Aura Medical Care', '36-page corporate annual portfolio, iconography system, and patient guide typography.'),
    proj('desert-horizon', 'PACKAGING', 'Desert Horizon Tourism', 'Editorial poster campaign, luxury travel catalog, and bespoke foil-stamped itineraries.'),
    proj('al-ghad', 'SOCIAL MEDIA', 'Al-Ghad Clinical Suite', 'High-engagement healthcare carousel campaign, informative diagnostics illustrations, and visual guidelines.', true),
    proj('banknote', 'BRANDING', 'Banknote Export Report', 'B2B international company profile, economic metrics layout, and export certification presentation.'),
    proj('synthetix', 'SOCIAL MEDIA', 'Synthetix AI Visuals', 'Synthesized creative direction harnessing bespoke diffusion pipelines for conceptual advertising.', true),
    proj('meraki', 'LOGOS', 'Meraki Hospitality Logo', 'A refined monogram and wordmark system for a boutique hospitality group.'),
    proj('aurora-box', 'PACKAGING', 'Aurora Foil Box', 'Rigid gift-box packaging with gold foil finishes and tactile soft-touch lamination.'),
  ],
  experience: { num: '04', eyebrow: 'CAREER & CLIENTS', title: 'Work Experience', items: [
    { name: 'Advertising Company', place: 'Jordan', type: 'FREELANCE' }, { name: 'Ital Beauty Medical', place: 'Saudi Arabia', type: 'FREELANCE' },
    { name: 'Travel Jet, We Travel, Rehlat Tours', place: 'Egypt', type: 'FREELANCE' }, { name: 'Banknote Company for Export', place: 'Egypt', type: 'FREELANCE' },
    { name: 'Al-Ghad Medical Clinics Complex', place: 'Saudi Arabia', type: 'FREELANCE' }, { name: 'Efham IFRS with Samah Zidan', place: 'Egypt', type: 'FREELANCE' },
    { name: 'Smile Range Medical', place: 'Saudi Arabia', type: 'FREELANCE' }, { name: 'Almerouj Care', place: 'Saudi Arabia', type: 'FREELANCE' },
    { name: 'Nile Misr Tourism', place: 'Egypt', type: 'ON-SITE' }, { name: 'AlBatel Consulting', place: 'Media Buyer • Saudi Arabia', type: 'ON-SITE' },
    { name: 'Noon International School', place: 'Egypt', type: 'ON-SITE' }] },
  contact: { num: '05', eyebrow: "LET'S WORK TOGETHER", titleA: 'Have a Project in Mind?', titleB: "Let's Make It", titleC: 'Unforgettable', titleEnd: '.', text: 'Tell me about your idea, and I will reply within 24 hours with concept ideas and workflow options.',
    waLabel: 'CHAT ON WHATSAPP', waMsg: "Hi Ahmed, I'd like to discuss a design project.", showEmail: true, directLabel: 'DIRECT:',
    socials: [{ platform: 'instagram', url: 'https://instagram.com/A7med_sherif72' }, { platform: 'behance', url: '' }, { platform: 'linkedin', url: '' }],
    copyright: '© 2025 AHMED SHERIF. ALL RIGHTS RESERVED.', tagline: 'ART DIRECTION • GRAPHIC DESIGN • IDENTITY' },
};
export default defaults;
