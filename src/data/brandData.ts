import { ProjectItem, ServiceItem, TeamMemberRole } from '../types';

// Real generated high-resolution assets
import heroStudioImg from '../assets/images/gigspace_hero_studio_1787550539973.jpg';
import posterMockupImg from '../assets/images/gigspace_poster_mockup_1787550556725.jpg';
import videoSuiteImg from '../assets/images/gigspace_video_suite_1787550582412.jpg';
import abstractArtImg from '../assets/images/gigspace_abstract_art_1787550602639.jpg';
import apparelMockupImg from '../assets/images/gigspace_apparel_mockup_1787550619194.jpg';
import brandIdentityImg from '../assets/images/gigspace_brand_identity_1787550639483.jpg';

export const ASSETS = {
  heroStudio: heroStudioImg,
  posterMockup: posterMockupImg,
  videoSuite: videoSuiteImg,
  abstractArt: abstractArtImg,
  apparelMockup: apparelMockupImg,
  brandIdentity: brandIdentityImg,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    category: 'GRAPHIC_DESIGN',
    tagline: 'Bold visual identities and high-impact print & digital media',
    description:
      'We craft iconic visual systems, print campaigns, brand guidelines, and digital graphics that elevate your presence across every physical and digital touchpoint.',
    iconName: 'Palette',
    tags: [
      'POSTERS',
      'LOGOS',
      'BRANDING',
      'BOOK COVERS',
      'T-SHIRTS & CLOTHING',
      'SOCIAL GRAPHICS',
      'FLYERS',
      'BADGES',
      'ADVERTISING',
      'SIGNAGE',
      'ILLUSTRATION',
      'PRINT DESIGNS',
    ],
    deliverables: [
      'Brand Identity Systems & Style Guides',
      'Exhibition Posters & Large-format Signage',
      'Apparel & Merchandise Graphic Packs',
      'Social Media Ad Templates & Editorial Kits',
      'Custom Book, Novel & Magazine Covers',
      'Vector Badges, Decals & Marketing Kits',
    ],
    highlightColor: '#FF5B3D',
    gradient: 'from-[#FF5B3D] to-[#FFC62E]',
  },
  {
    id: 'video-editing',
    title: 'VIDEO & WORK EDITING',
    category: 'VIDEO_EDITING',
    tagline: 'From raw footage to captivating storytelling & digital content',
    description:
      'We transform raw footage, ideas, and editorial assets into viral short-form clips, cinematic YouTube features, storytelling sequences, and publication designs.',
    iconName: 'Video',
    tags: [
      'TIKTOK & REELS',
      'YOUTUBE VIDEOS',
      'X / TWITTER VIDEOS',
      'PINTEREST CONTENT',
      'PROMOTIONAL CLIPS',
      'STORYTELLING',
      'MAGAZINE & BOOK EDITING',
      'CATALOGUES & COMICS',
      'MOTION GRAPHICS',
      'COLOR GRADING',
    ],
    deliverables: [
      'High-Retention Short Form (TikTok, Reels, Shorts)',
      'Long-form YouTube Editing & Visual Pacing',
      'Audio Equalization & Sound Design Overlays',
      'Dynamic Motion Titles & Subtitle Animation',
      'Editorial Layout for Books, Comics & Catalogues',
      'Multi-platform Aspect Ratio Repurposing',
    ],
    highlightColor: '#FFC62E',
    gradient: 'from-[#FFC62E] to-[#18B7C8]',
  },
  {
    id: 'artwork-design',
    title: 'ARTWORK DESIGN',
    category: 'ARTWORK_DESIGN',
    tagline: 'Expressive abstract pieces, wall décor & custom framed art',
    description:
      'Original artistic creations crafted for bespoke interiors, gallery displays, corporate walls, and personal collections. Every piece is tailor-designed to evoke emotion.',
    iconName: 'Sparkles',
    tags: [
      'FRAMED WALL ART',
      'HOME DÉCOR',
      'ABSTRACT ARTWORK',
      'CUSTOM REQUESTS',
      'PERSONALIZED PIECES',
      'PRINT-READY ART',
      'DECORATIVE MURALS',
      'DIGITAL ILLUSTRATION',
    ],
    deliverables: [
      'Museum-Grade High-Resolution Canvas Prints',
      'Custom Commissioned Abstract & Figurative Art',
      'Curated Residential & Studio Wall Décor',
      'Vector Artworks Ready for Large-Format Printing',
      'Color Palette Harmonization for Interiors',
      'Certificate of Originality & Digital Master Files',
    ],
    highlightColor: '#18B7C8',
    gradient: 'from-[#18B7C8] to-[#7E5CE3]',
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'urban-pulse',
    title: 'Urban Pulse',
    category: 'BRANDING',
    type: 'Concept Project',
    subtitle: 'Contemporary Brand Identity & Spatial Visuals',
    description:
      'A holistic brand identity system exploring high-contrast geometric typography, tactile print finishes, dynamic color blocking, and clean modern stationery.',
    image: ASSETS.brandIdentity,
    tags: ['Brand Identity', 'Stationery', 'Typography', 'Color Systems'],
    clientScope: 'Complete visual identity, business card suites, guidelines, and office touchpoints.',
    palette: ['#11151B', '#FF5B3D', '#FFC62E', '#18B7C8', '#FBFBF8'],
    deliverables: ['Identity manual', 'Business cards', 'Packaging design', 'Social templates'],
    year: '2026',
  },
  {
    id: 'future-frame',
    title: 'Future Frame',
    category: 'GRAPHIC DESIGN',
    type: 'Creative Exploration',
    subtitle: 'Modern Exhibition Posters & Swiss Grid Exploration',
    description:
      'A series of large-format typography posters utilizing asymmetric grids, energetic gradients, and dimensional letterforms for modern cultural exhibitions.',
    image: ASSETS.posterMockup,
    tags: ['Poster Series', 'Exhibition Design', 'Swiss Grid', 'Print'],
    clientScope: 'Three distinct large-format gallery prints, signage systems, and promotional banners.',
    palette: ['#FF5B3D', '#FFC62E', '#18B7C8', '#11151B'],
    deliverables: ['3 Gallery posters (A0/A1)', 'Event signage', 'Digital promo kit'],
    year: '2026',
  },
  {
    id: 'creator-flow',
    title: 'Creator Flow',
    category: 'VIDEO',
    type: 'Concept Project',
    subtitle: 'Multi-platform Dynamic Video Production Suite',
    description:
      'High-velocity video editing project combining motion graphics, rhythmic audio cuts, kinetic subtitles, and custom color grading designed for creator channels.',
    image: ASSETS.videoSuite,
    tags: ['Video Editing', 'Motion Graphics', 'Short-form', 'YouTube'],
    clientScope: 'Short-form viral cuts, long-form YouTube structure, and custom branded lower-thirds.',
    palette: ['#11151B', '#FFC62E', '#18B7C8', '#7E5CE3'],
    deliverables: ['12 TikTok/Reel cutdowns', '4 YouTube episodes', 'Motion title templates'],
    year: '2026',
  },
  {
    id: 'gig-art-aura',
    title: 'GIG ART: Aura 01',
    category: 'ARTWORK',
    type: 'Creative Exploration',
    subtitle: 'Framed Contemporary Abstract Canvas',
    description:
      'An expressive fine-art composition exploring the intersection of organic sunburst forms, liquid color transitions, and premium gallery framing for residential spaces.',
    image: ASSETS.abstractArt,
    tags: ['Fine Art', 'Framed Artwork', 'Abstract', 'Interior Décor'],
    clientScope: 'Original digital painting mastered for 300DPI canvas and acrylic museum glass mounting.',
    palette: ['#FF5B3D', '#FFC62E', '#18B7C8', '#7E5CE3'],
    deliverables: ['Master vector artwork', '300DPI print package', 'Framing specification'],
    year: '2026',
  },
  {
    id: 'street-type',
    title: 'Street Type',
    category: 'GRAPHIC DESIGN',
    type: 'Concept Project',
    subtitle: 'Streetwear Graphic Design & Merchandise Pack',
    description:
      'Custom typographic and illustrative apparel collection featuring screenprint-ready graphics, puff print details, and branded accessories.',
    image: ASSETS.apparelMockup,
    tags: ['Apparel Design', 'T-Shirts', 'Streetwear', 'Vector Art'],
    clientScope: 'Front and back graphics for heavy-cotton tees, hoodies, and screenprint production files.',
    palette: ['#11151B', '#FF5B3D', '#18B7C8', '#FBFBF8'],
    deliverables: ['Tech packs for garment manufacturing', 'Color separation files', 'Lookbook graphics'],
    year: '2026',
  },
  {
    id: 'color-motion',
    title: 'Color Motion',
    category: 'BRANDING',
    type: 'Creative Exploration',
    subtitle: 'Digital Studio Environment & Campaign System',
    description:
      'Integrated workspace and digital campaign exploring physical studio aesthetics, responsive lighting, and digital assets working in synergy.',
    image: ASSETS.heroStudio,
    tags: ['Digital Studio', 'Workspace', 'Campaign', 'Social Media'],
    clientScope: 'Creative direction, digital workspace assets, and multi-channel campaign kit.',
    palette: ['#11151B', '#FF5B3D', '#FFC62E', '#18B7C8'],
    deliverables: ['Studio asset pack', 'Digital mockups', 'Multi-device UI mockups'],
    year: '2026',
  },
];

export const TEAM_ROLES: TeamMemberRole[] = [
  {
    id: 'financial-manager',
    role: 'Financial Manager',
    category: 'Management & Strategy',
    description:
      'Oversees financial planning, project budgeting, resource allocation, client estimates, and operational sustainability.',
    responsibilities: [
      'Project pricing & cost estimation',
      'Client budget optimization',
      'Studio financial strategy & invoicing',
      'Contract & payment processing',
    ],
    avatarBg: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 'marketing-director',
    role: 'Marketing Director',
    category: 'Strategy & Growth',
    description:
      'Drives brand awareness, campaign strategy, audience research, creative messaging, and digital channel outreach.',
    responsibilities: [
      'Brand positioning & campaign roadmaps',
      'Social media growth & outreach strategy',
      'Client discovery & market analysis',
      'Content distribution planning',
    ],
    avatarBg: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 'creative-designer',
    role: 'Creative Designer',
    category: 'Design & Visual Arts',
    description:
      'Leads art direction, graphic design execution, brand identity creation, typography, and original artwork production.',
    responsibilities: [
      'Brand identity & visual style creation',
      'Poster, merchandise & print layouts',
      'Custom fine art & bespoke illustrations',
      'Design asset preparation & final delivery',
    ],
    avatarBg: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    id: 'web-manager',
    role: 'Web Manager',
    category: 'Technology & Digital',
    description:
      'Manages digital infrastructure, web presence, video editing pipelines, digital asset delivery, and online client portal.',
    responsibilities: [
      'Website maintenance & performance',
      'Digital video delivery & optimization',
      'Online client interaction systems',
      'Digital asset architecture & storage',
    ],
    avatarBg: 'from-purple-500/20 to-indigo-500/20',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'DISCOVER',
    tagline: 'Understand the idea, audience, and goals.',
    description:
      'We dive deep into your project vision, target audience, aesthetic preferences, and deliverable requirements — whether online or in our studio.',
    highlights: ['Brief alignment', 'Creative brainstorming', 'Scope definition'],
    color: '#FF5B3D',
  },
  {
    step: '02',
    name: 'CREATE',
    tagline: 'Develop concepts and visual directions.',
    description:
      'Our team crafts bold initial concepts, graphic mood boards, video timelines, and expressive visual layouts tailored to your unique identity.',
    highlights: ['Design prototyping', 'Rough cuts & layouts', 'Palette & style testing'],
    color: '#FFC62E',
  },
  {
    step: '03',
    name: 'REFINE',
    tagline: 'Review, edit, and improve the design.',
    description:
      'Collaborative feedback loops ensure every typography detail, color balance, frame transition, and print specification is tuned to perfection.',
    highlights: ['Collaborative reviews', 'Frame-by-frame tuning', 'High-res proofs'],
    color: '#18B7C8',
  },
  {
    step: '04',
    name: 'DELIVER',
    tagline: 'Prepare and deliver production-ready files.',
    description:
      'Receive full master packages: print-ready CMYK PDFs, vector source files, 4K video exports, web-optimized assets, and license documentation.',
    highlights: ['Multi-format exports', 'Print & digital packages', 'Ongoing support'],
    color: '#7E5CE3',
  },
];

export const WHY_GIGSPACE_POINTS = [
  {
    id: 'creative',
    title: 'CREATIVE',
    summary: 'Original visual thinking.',
    detail: 'Every project starts from scratch with distinct aesthetic solutions that cut through visual clutter.',
    icon: 'Lightbulb',
    accent: '#FF5B3D',
  },
  {
    id: 'flexible',
    title: 'FLEXIBLE',
    summary: 'Office and online services.',
    detail: 'Collaborate seamlessly in person at our physical workspace or fully remote via digital channels.',
    icon: 'Building2',
    accent: '#FFC62E',
  },
  {
    id: 'personal',
    title: 'PERSONAL',
    summary: 'Custom solutions for each project.',
    detail: 'No cookie-cutter templates. We tailor each graphic, video edit, or artwork to your exact taste.',
    icon: 'UserCheck',
    accent: '#18B7C8',
  },
  {
    id: 'multi-disciplinary',
    title: 'MULTI-DISCIPLINARY',
    summary: 'Design, video, artwork, and digital.',
    detail: 'A comprehensive creative studio combining brand graphics, motion video editing, and fine art under one roof.',
    icon: 'Layers',
    accent: '#7E5CE3',
  },
  {
    id: 'modern',
    title: 'MODERN',
    summary: 'Contemporary visual approach.',
    detail: 'Grounded in current digital culture, viral social dynamics, and refined modern typography.',
    icon: 'Flame',
    accent: '#FF5B3D',
  },
  {
    id: 'professional',
    title: 'PROFESSIONAL',
    summary: 'Clean and delivery-focused.',
    detail: 'Reliable timelines, crystal-clear milestones, transparent budgets, and clean production-ready files.',
    icon: 'CheckCircle2',
    accent: '#18B7C8',
  },
];

export const CLIENT_JOURNEY_STEPS = [
  { num: '1', title: 'Share Your Idea', desc: 'Tell us about your project vision, timeline, and goals through our brief form or in person.' },
  { num: '2', title: 'Discuss the Project', desc: 'We align on scope, deliverables, budget options, and workspace preferences (office or online).' },
  { num: '3', title: 'Receive Creative Direction', desc: 'Review moodboards, concept sketches, storyboards, or initial color themes.' },
  { num: '4', title: 'Review Concepts', desc: 'Evaluate high-fidelity designs, video preview cuts, or artwork compositions with our team.' },
  { num: '5', title: 'Approve & Polish', desc: 'Finalize adjustments, typographic subtleties, color grading, and output specifications.' },
  { num: '6', title: 'Receive Final Work', desc: 'Download organized master files ready for print, social channels, web publishing, or framing.' },
];
