import type {
  Testimonial,
  ProcessStep,
  FAQ,
  FeatureCard,
  ServiceCard,
  ProjectCard,
  WhyChooseUsItem,
  TeamMember,
  Award,
  BlogPost,
  MarqueeItem,
} from "@/types"

export const testimonials: Testimonial[] = [
  {
    quote:
      "Their data-driven SEO approach and heavy-duty web architecture delivered real results. Our rankings improved across competitive keywords, organic traffic grew steadily, and conversions increased. ABBA Digital turned complex data into clear, predictable scale.",
    name: "Emily Carter",
    role: "Senior Product Director",
    stars: 5,
    image: "/images/resource/client1-1.jpg",
  },
  {
    quote:
      "ABBA Digital built our cross-platform mobile application with zero latency and structured API integrations. The code quality was immaculate, and the synchronization with our cloud databases works flawlessly under high seasonal traffic.",
    name: "Marcus Sterling",
    role: "Chief Technology Officer",
    stars: 5,
    image: "/images/resource/client1-1.jpg",
  },
  {
    quote:
      "The workflow automation and CRM integrations they implemented saved our operations team over 40 hours a week. Their technical craftsmanship combined with aggressive lead-generation campaigns completely scaled our customer acquisition.",
    name: "Sophia Martinez",
    role: "VP of Operations",
    stars: 5,
    image: "/images/resource/client1-1.jpg",
  },
]

export const steps: ProcessStep[] = [
  {
    num: "Step 01",
    title: "Tailored Solutions",
    desc: "We analyze your technical limitations, database lags, and user pipeline blockages to draft custom architecture blueprints configured specifically for your scale requirements.",
  },
  {
    num: "Step 02",
    title: "Project Planning",
    desc: "Our engineering and performance marketing leads align to draft a high-fidelity roadmap, mapping technical endpoints, asset structures, and marketing attribution funnels.",
  },
  {
    num: "Step 03",
    title: "Content & Code Creation",
    desc: "We build the platform using strict-type configurations and edge caching, setting up conversion-optimized landing pages and high-engagement brand copy simultaneously.",
  },
  {
    num: "Step 04",
    title: "Seamless Execution",
    desc: "Deploying via automated pipelines with thorough automated audits, tracking metrics, and initiating targeted performance campaigns to turn traffic into consistent revenue.",
  },
]

export const faqs: FAQ[] = [
  {
    q: "What services does ABBA Digital offer?",
    a: "We provide elite full-service digital solutions split into four pillars: Web Architecture (headless storefronts, JAMstack sites), Mobile Applications (React Native, Flutter), Full-Spectrum Digital Marketing (pipeline growth, conversion optimization), and Integrated Solutions (custom APIs, CRM automations).",
  },
  {
    q: "How do you approach a new project?",
    a: "Every project starts with technical discovery and workflow diagnostics. We outline the exact codebase infrastructure required for stability, and map it directly against aggressive marketing acquisition strategies.",
  },
  {
    q: "What is your pricing model or cost structure?",
    a: "Our engagements are scoped based on the complexity of your custom integrations, database layers, and scaling funnels. We provide transparent, metrics-secured specifications before any code is committed.",
  },
  {
    q: "Do you support ongoing platform optimization?",
    a: "Yes. We offer long-term support agreements which include performance analytics monitoring, edge scaling audits, database checkups, and continuous conversion rate optimization campaigns.",
  },
]

export const featureCards: FeatureCard[] = [
  {
    icon: "/images/icons/icon-1-1.png",
    title: "Creative Branding",
    desc: "We build highly optimized brand elements, visual designs, and systems ensuring your brand positions correctly in the market.",
  },
  {
    icon: "/images/icons/icon-1-2.png",
    title: "Analytics & Strategy",
    desc: "Every design endpoint and system layout is built on diagnostic research, ensuring layout features support conversion growth.",
  },
  {
    icon: "/images/icons/icon-1-3.png",
    title: "Content Creation",
    desc: "Aggressive, automated content assets, brand storytelling and engagement-optimized copy designed for conversion and growth.",
  },
]

export const services: ServiceCard[] = [
  { num: "01", icon: "/images/icons/service-icon-1-1.png", title: "UI/UX Design", desc: "Design interfaces optimized for conversion rates and clean user interactions." },
  { num: "02", icon: "/images/icons/service-icon-1-2.png", title: "Brand Strategy", desc: "Positioning digital assets to attract high-value target audiences." },
  { num: "03", icon: "/images/icons/service-icon-1-3.png", title: "Web Development", desc: "Building fast headless platforms utilizing Next.js architectures." },
  { num: "04", icon: "/images/icons/service-icon-1-4.png", title: "App Development", desc: "Cross-platform mobile apps built with React Native for latency-free sync." },
  { num: "05", icon: "/images/icons/service-icon-1-5.png", title: "Search Optimization", desc: "Rigorous technical SEO configurations ensuring core vitals compliance." },
  { num: "06", icon: "/images/icons/service-icon-1-6.png", title: "Digital Marketing", desc: "Attribution campaigns converting cold traffic into predictable pipelines." },
]

export const projects: ProjectCard[] = [
  { img: "/images/resource/project1-1.jpg", title: "E-Commerce Growth Platform", categories: ["Architecture", "Growth"] },
  { img: "/images/resource/project1-2.jpg", title: "Brand & Website Redesign", categories: ["Brand", "Redesign"] },
  { img: "/images/resource/project1-3.jpg", title: "Local Business SEO Campaign", categories: ["SEO", "Campaign"] },
]

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: "/images/icons/choose-us-icon1-1.png",
    title: "Long-Term Support",
    desc: "We provide comprehensive post-launch monitoring, core checks, and scaling optimizations.",
  },
  {
    icon: "/images/icons/choose-us-icon1-2.png",
    title: "Data-Driven Strategy",
    desc: "Every visual asset and line of code is structured to align with customer performance targets.",
  },
]

export const teamMembers: TeamMember[] = [
  { name: "Jenny Wilson", role: "Developer", img: "/images/resource/team-1-1.jpg" },
  { name: "Kristin Watson", role: "Developer", img: "/images/resource/team-1-2.jpg" },
  { name: "Bessie Cooper", role: "Developer", img: "/images/resource/team-1-3.jpg" },
]

export const awards: Award[] = [
  { year: "2026", img: "/images/icons/award-1-1.png", title: "Awwwards Interior Excellence", desc: "For extreme infrastructure performance and styling blueprints." },
  { year: "2023", img: "/images/icons/award-1-2.png", title: "Awesome business models", desc: "Optimizing conversion ratios across scalable marketing funnels." },
  { year: "2020", img: "/images/icons/award-1-3.png", title: "Creative Agencies Worldwide", desc: "Exceptional UI/UX integration frameworks and mobile sync." },
]

export const brands: string[] = [
  "/images/icons/brand1-1.png",
  "/images/icons/brand1-2.png",
  "/images/icons/brand1-3.png",
  "/images/icons/brand1-4.png",
  "/images/icons/brand1-5.png",
]

export const blogPosts: BlogPost[] = [
  { img: "/images/resource/news-1-1.jpg", date: "20", title: "Why Your Brand Needs a Strong Online Presence" },
  { img: "/images/resource/news-1-2.jpg", date: "05", title: "Designing User Experiences That Actually Convert" },
  { img: "/images/resource/news-1-3.jpg", date: "08", title: "Brand Identity Essentials for Digital Businesses" },
]

export const marqueeItems: MarqueeItem[] = [
  { text: "Digital Agency", star: "/images/icons/star1-2.svg" },
  { text: "Smart & Efficient", star: "/images/icons/star1-2.svg" },
  { text: "Powerful Performance", star: "/images/icons/star1-2.svg" },
  { text: "Digital Excellence", star: "/images/icons/star1-2.svg" },
  { text: "Growth Platform", star: "/images/icons/star1-2.svg" },
]

export const marqueeItemsOrange: MarqueeItem[] = [
  { text: "Digital Agency", star: "/images/icons/star1-1.svg" },
  { text: "Smart & Efficient", star: "/images/icons/star1-1.svg" },
  { text: "Powerful Performance", star: "/images/icons/star1-1.svg" },
  { text: "Digital Excellence", star: "/images/icons/star1-1.svg" },
  { text: "Growth Platform", star: "/images/icons/star1-1.svg" },
]
