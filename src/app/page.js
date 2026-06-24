"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Their data-driven SEO approach and heavy-duty web architecture delivered real results. Our rankings improved across competitive keywords, organic traffic grew steadily, and conversions increased. ABBA Digital turned complex data into clear, predictable scale.",
      name: "Emily Carter",
      role: "Senior Product Director",
      stars: 5,
      image: "/images/resource/client1-1.jpg"
    },
    {
      quote: "ABBA Digital built our cross-platform mobile application with zero latency and structured API integrations. The code quality was immaculate, and the synchronization with our cloud databases works flawlessly under high seasonal traffic.",
      name: "Marcus Sterling",
      role: "Chief Technology Officer",
      stars: 5,
      image: "/images/resource/client1-1.jpg"
    },
    {
      quote: "The workflow automation and CRM integrations they implemented saved our operations team over 40 hours a week. Their technical craftsmanship combined with aggressive lead-generation campaigns completely scaled our customer acquisition.",
      name: "Sophia Martinez",
      role: "VP of Operations",
      stars: 5,
      image: "/images/resource/client1-1.jpg"
    }
  ];

  // Work Process active step
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      num: "Step 01",
      title: "Tailored Solutions",
      desc: "We analyze your technical limitations, database lags, and user pipeline blockages to draft custom architecture blueprints configured specifically for your scale requirements."
    },
    {
      num: "Step 02",
      title: "Project Planning",
      desc: "Our engineering and performance marketing leads align to draft a high-fidelity roadmap, mapping technical endpoints, asset structures, and marketing attribution funnels."
    },
    {
      num: "Step 03",
      title: "Content & Code Creation",
      desc: "We build the platform using strict-type configurations and edge caching, setting up conversion-optimized landing pages and high-engagement brand copy simultaneously."
    },
    {
      num: "Step 04",
      title: "Seamless Execution",
      desc: "Deploying via automated pipelines with thorough automated audits, tracking metrics, and initiating targeted performance campaigns to turn traffic into consistent revenue."
    }
  ];

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(0);
  const faqs = [
    {
      q: "What services does ABBA Digital offer?",
      a: "We provide elite full-service digital solutions split into four pillars: Web Architecture (headless storefronts, JAMstack sites), Mobile Applications (React Native, Flutter), Full-Spectrum Digital Marketing (pipeline growth, conversion optimization), and Integrated Solutions (custom APIs, CRM automations)."
    },
    {
      q: "How do you approach a new project?",
      a: "Every project starts with technical discovery and workflow diagnostics. We outline the exact codebase infrastructure required for stability, and map it directly against aggressive marketing acquisition strategies."
    },
    {
      q: "What is your pricing model or cost structure?",
      a: "Our engagements are scoped based on the complexity of your custom integrations, database layers, and scaling funnels. We provide transparent, metrics-secured specifications before any code is committed."
    },
    {
      q: "Do you support ongoing platform optimization?",
      a: "Yes. We offer long-term support agreements which include performance analytics monitoring, edge scaling audits, database checkups, and continuous conversion rate optimization campaigns."
    }
  ];

  // Rotate text badge setup
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-[#0D0D0D] text-white">
      
      {/* 1. Hero Section */}
      <section 
        className="relative pt-32 pb-32 md:pt-44 md:pb-44 overflow-hidden bg-cover bg-center select-none"
        style={{ backgroundImage: "url('/images/banner/hero-bg-1-1.jpg')" }}
      >
        {/* Floating 3D Spheres */}
        <div className="absolute top-24 left-12 w-28 h-28 pointer-events-none float-bob-y opacity-90">
          <img src="/images/icons/hero-object-1-1.png" alt="3D Sphere" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute bottom-24 right-1/4 w-24 h-24 pointer-events-none float-bob-y opacity-80" style={{ animationDelay: "1s" }}>
          <img src="/images/icons/hero-object-1-2.png" alt="3D Shape" className="w-full h-full object-contain blend-screen" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            {/* SVG underline arrow vector */}
            <div className="opacity-95 hidden md:block">
              <svg width="240" height="22" viewBox="0 0 283 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M281.958 9.2867C287.808 -5.23407 75.0926 -2.10704 2.45233 14.3507C-1.44595 14.8817 -0.44477 17.216 3.6793 16.6863C104.169 5.89575 175.017 4.9921 240.033 6.76138C334.734 9.62295 123.021 14.9105 110.28 21.2919C107.951 22.4583 106.638 25.9245 114.938 25.4909C195.706 18.049 277.839 19.5104 281.958 9.2867Z" fill="#FF6B1E"/>
              </svg>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase leading-[0.9] text-white tracking-tight">
              <span className="text-zinc-400 font-light block normal-case">We Build Digital</span>
              Experiences That <br />Grow Your Business
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 pt-4">
              {/* Rotating stamp circle wheel - SVG text path circle */}
              <div className="relative w-24 h-24 shrink-0 hidden sm:flex items-center justify-center">
                <svg className="w-full h-full ani-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fill="#FF6B1E" fontWeight="700" letterSpacing="2" textTransform="uppercase" fontFamily="monospace">
                    <textPath href="#circlePath">DIGITAL AGENCY ★ WEB DESIGN ★ </textPath>
                  </text>
                </svg>
                <Link href="/services" className="absolute w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-[#FF6B1E] transition-colors border border-white/10">
                  <img src="/images/icons/right-arrow-1-1.png" alt="arrow" className="w-3.5 h-3.5 object-contain" />
                </Link>
              </div>
              
              <div className="space-y-6 max-w-xl">
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                  From startups to established companies, we create high-impact digital solutions that attract, engage, and convert customers.
                </p>
                <Link href="/services" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                  </span>
                  <span className="btn-title">Discover More</span>
                  <span className="btn-arrow-right">
                    <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Feature Cards Section */}
      <section className="relative py-28 border-b border-white/8 overflow-hidden select-none">
        {/* Floating background shapes */}
        <div className="absolute left-0 top-1/4 w-32 h-64 pointer-events-none float-bob-y opacity-30">
          <img src="/images/resource/feature-shape-1-1.png" alt="shape" className="w-full h-full object-contain" />
        </div>
        <div className="absolute right-0 bottom-1/4 w-32 h-64 pointer-events-none float-bob-y opacity-30">
          <img src="/images/resource/feature-shape-1-2.png" alt="shape" className="w-full h-full object-contain" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "/images/icons/icon-1-1.png", title: "Creative Branding", desc: "We build highly optimized brand elements, visual designs, and systems ensuring your brand positions correctly in the market." },
              { icon: "/images/icons/icon-1-2.png", title: "Analytics & Strategy", desc: "Every design endpoint and system layout is built on diagnostic research, ensuring layout features support conversion growth." },
              { icon: "/images/icons/icon-1-3.png", title: "Content Creation", desc: "Aggressive, automated content assets, brand storytelling and engagement-optimized copy designed for conversion and growth." }
            ].map((card, i) => (
              <div key={i} className="group relative pt-10 pb-10 border-b md:border-b-0 md:border-r border-white/8 last:border-0 px-4 space-y-6">
                <div className="w-14 h-14">
                  <img src={card.icon} alt={card.title} className="w-full h-full object-contain filter brightness-100" />
                </div>
                <h4 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#FF6B1E] transition-colors">
                  {card.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {card.desc}
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B1E] uppercase tracking-widest hover:text-white transition-colors">
                  <span>Read More</span>
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0" stroke="#FF6B1E" stroke-width="1.5"/>
                  </svg>
                </Link>
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 last:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Us Section */}
      <section className="relative py-28 border-b border-white/8 overflow-hidden select-none">
        {/* Floating background graphics */}
        <div className="absolute left-6 top-12 w-64 h-64 pointer-events-none opacity-20">
          <img src="/images/icons/about-light-1-1.png" alt="shape" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute left-24 top-24 w-32 h-32 pointer-events-none opacity-30 tm-gsap-animate-circle">
          <img src="/images/icons/about-shape-1-1.png" alt="shape" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute right-12 bottom-12 w-72 h-72 pointer-events-none opacity-20">
          <img src="/images/icons/about-light-1-2.png" alt="shape" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute right-24 bottom-24 w-36 h-36 pointer-events-none opacity-30 tm-gsap-animate-circle">
          <img src="/images/icons/about-shape-1-2.png" alt="shape" className="w-full h-full object-contain blend-screen" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left image column with leaf/dome border styling */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-[85%] aspect-4/5 rounded-[100px_0px_100px_100px] border border-white/8 overflow-hidden">
                <img src="/images/resource/about-1-1.jpg" alt="Team Discussion" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right content column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase">
                  <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
                  Who We Are
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                  A Creative Digital Agency Focused <span className="text-[#FF6B1E]">on Real Results</span>
                </h2>
              </div>

              <p className="text-zinc-400 font-light leading-relaxed">
                ABBA Digital builds web assets that perform under operational pressure. We eliminate technical lag, ensure edge caching speed, and build client acquisition funnels that convert traffic into predictable, systematic pipelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
                {[
                  "Creativity Meets Strategy",
                  "Design. Develop. Deliver.",
                  "Innovative Development",
                  "Unleashing Digital Power."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B1E]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Thumbnail and metric details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
                <div className="w-36 h-24 rounded-2xl overflow-hidden border border-white/8 shrink-0">
                  <img src="/images/resource/about-1-2.jpg" alt="meeting" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-4 bg-[#151515] p-5 rounded-2xl border border-white/5 w-full sm:w-auto">
                  <span className="font-heading text-5xl font-extrabold text-[#FF6B1E]">5%</span>
                  <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest leading-normal">
                    Satisfied Clients <br />
                    Returning Often
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/services" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                  </span>
                  <span className="btn-title">Discover More</span>
                  <span className="btn-arrow-right">
                    <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid Section */}
      <section 
        className="relative py-28 bg-cover bg-center border-b border-white/8 select-none"
        style={{ backgroundImage: "url('/images/background/service-bg-1-1.jpg')" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase justify-center">
              <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
              What We Do
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              Helping You Succeed Through <span className="text-[#FF6B1E]">Creative & Digital Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", icon: "/images/icons/service-icon-1-1.png", title: "UI/UX Design", desc: "Design interfaces optimized for conversion rates and clean user interactions." },
              { num: "02", icon: "/images/icons/service-icon-1-2.png", title: "Brand Strategy", desc: "Positioning digital assets to attract high-value target audiences." },
              { num: "03", icon: "/images/icons/service-icon-1-3.png", title: "Web Development", desc: "Building fast headless platforms utilizing Next.js architectures." },
              { num: "04", icon: "/images/icons/service-icon-1-4.png", title: "App Development", desc: "Cross-platform mobile apps built with React Native for latency-free sync." },
              { num: "05", icon: "/images/icons/service-icon-1-5.png", title: "Search Optimization", desc: "Rigorous technical SEO configurations ensuring core vitals compliance." },
              { num: "06", icon: "/images/icons/service-icon-1-6.png", title: "Digital Marketing", desc: "Attribution campaigns converting cold traffic into predictable pipelines." }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#151515]/95 border border-white/5 hover:border-[#FF6B1E]/40 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12">
                      <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-heading text-lg font-extrabold text-zinc-600 group-hover:text-[#FF6B1E] transition-colors">
                      {service.num}
                    </span>
                  </div>
                  <h4 className="font-heading text-xl font-extrabold uppercase tracking-wide text-white">
                    {service.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
                
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B1E] uppercase tracking-widest mt-8 hover:text-white transition-colors"
                >
                  <span>View Details</span>
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0" stroke="#FF6B1E" stroke-width="1.5"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Projects Showcase Section */}
      <section className="relative py-28 border-b border-white/8 overflow-hidden select-none bg-[#0D0D0D]">
        {/* background dot graphics */}
        <div className="absolute right-12 top-12 w-64 h-64 pointer-events-none opacity-20">
          <img src="/images/icons/ellipse1-1.png" alt="dot bg" className="w-full h-full object-contain" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase">
                <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
                Case Study
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                Our Recently Completed <span className="text-[#FF6B1E]">Latest Projects</span>
              </h2>
            </div>
            
            <Link href="/work" className="btn-style-one shrink-0">
              <span className="btn-arrow-left">
                <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
              </span>
              <span className="btn-title">View All Projects</span>
              <span className="btn-arrow-right">
                <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/images/resource/project1-1.jpg", title: "E-Commerce Growth Platform", categories: ["Architecture", "Growth"] },
              { img: "/images/resource/project1-2.jpg", title: "Brand & Website Redesign", categories: ["Brand", "Redesign"] },
              { img: "/images/resource/project1-3.jpg", title: "Local Business SEO Campaign", categories: ["SEO", "Campaign"] }
            ].map((proj, idx) => (
              <div key={idx} className="group relative space-y-6">
                <div className="relative aspect-4/5 rounded-[40px] overflow-hidden border border-white/5 shadow-xl">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <Link href="/work" className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-[#FF6B1E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img src="/images/icons/arrow-icon.png" alt="diagonal arrow" className="w-4 h-4 object-contain" />
                  </Link>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-heading text-xl font-extrabold uppercase tracking-wide text-white group-hover:text-[#FF6B1E] transition-colors">
                    <Link href="/work">{proj.title}</Link>
                  </h4>
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
                    <span>{proj.categories[0]}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B1E]"></span>
                    <span>{proj.categories[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Scrolling Marquee Sections */}
      <section className="py-12 bg-black border-b border-white/8 overflow-hidden select-none">
        <div className="space-y-4">
          
          {/* Marquee Row 1 (Left Scrolling) */}
          <div className="relative flex overflow-x-hidden border-b border-white/5 pb-4">
            <div className="animate-marquee-left flex gap-12 text-2xl md:text-4xl font-heading font-extrabold uppercase tracking-wider text-white">
              {Array(3).fill([
                { text: "Digital Agency", star: "/images/icons/star1-2.svg" },
                { text: "Smart & Efficient", star: "/images/icons/star1-2.svg" },
                { text: "Powerful Performance", star: "/images/icons/star1-2.svg" },
                { text: "Digital Excellence", star: "/images/icons/star1-2.svg" },
                { text: "Growth Platform", star: "/images/icons/star1-2.svg" }
              ]).flat().map((item, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <img src={item.star} alt="star shape" className="w-6 h-6 object-contain" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Right Scrolling) */}
          <div className="relative flex overflow-x-hidden pt-2">
            <div className="animate-marquee-right flex gap-12 text-2xl md:text-4xl font-heading font-extrabold uppercase tracking-wider text-[#FF6B1E]">
              {Array(3).fill([
                { text: "Digital Agency", star: "/images/icons/star1-1.svg" },
                { text: "Smart & Efficient", star: "/images/icons/star1-1.svg" },
                { text: "Powerful Performance", star: "/images/icons/star1-1.svg" },
                { text: "Digital Excellence", star: "/images/icons/star1-1.svg" },
                { text: "Growth Platform", star: "/images/icons/star1-1.svg" }
              ]).flat().map((item, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <img src={item.star} alt="star shape" className="w-6 h-6 object-contain" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Work Process Section */}
      <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase">
                  <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
                  Working Process
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                  Shaping the Future Through <span className="text-[#FF6B1E]">Step-by-Step Innovation</span>
                </h2>
              </div>
              <div className="w-64 h-64 opacity-80 pt-6">
                <img src="/images/icons/work-process-shape1-1.png" alt="Process shape" className="w-full h-full object-contain tm-gsap-animate-circle blend-screen" />
              </div>
            </div>

            {/* Right Accordion Steps Column */}
            <div className="lg:col-span-7 space-y-6">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                    key={idx} 
                    onClick={() => setActiveStep(idx)}
                    className={`group cursor-pointer p-8 rounded-3xl transition-all duration-300 border ${
                      isActive 
                        ? "bg-[#FF6B1E] border-transparent text-[#0D0D0D]" 
                        : "bg-[#151515] border-white/5 hover:border-[#FF6B1E]/30 text-white"
                    }`}
                  >
                    <div className="flex gap-6 items-start">
                      <span className={`font-heading text-2xl font-extrabold tracking-widest ${
                        isActive ? "text-[#0D0D0D]/60" : "text-zinc-600"
                      }`}>
                        {step.num}
                      </span>
                      <div className="space-y-4 w-full">
                        <h4 className="font-heading text-2xl font-extrabold uppercase tracking-wide">
                          {step.title}
                        </h4>
                        <p className={`text-sm leading-relaxed font-light transition-colors ${
                          isActive ? "text-[#0D0D0D]/80" : "text-zinc-400"
                        }`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 8. Video Showcase Section */}
      <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="relative aspect-video rounded-[45px] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
            {/* Background cover image */}
            <img src="/images/resource/video-1-1.jpg" alt="Video cover" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            
            {/* Floating Shape overlay */}
            <div className="absolute top-12 left-12 w-20 h-20 opacity-20 pointer-events-none">
              <img src="/images/icons/video-shape-1-1.png" alt="shape" className="w-full h-full object-contain" />
            </div>

            {/* Play Button & Title */}
            <div className="relative z-10 text-center space-y-6 px-4">
              <div className="flex justify-center">
                <a 
                  href="https://www.youtube.com/watch?v=Fvae8nxzVz4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative w-20 h-20 rounded-full bg-[#FF6B1E] flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {/* Ripple pulse elements */}
                  <span className="ripple"></span>
                  <span className="ripple" style={{ animationDelay: "0.5s" }}></span>
                  <span className="ripple" style={{ animationDelay: "1s" }}></span>
                  
                  {/* Play icon */}
                  <svg className="w-6 h-6 text-white ml-1 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <h3 className="font-heading text-xl sm:text-3xl font-extrabold uppercase tracking-wider text-white max-w-2xl">
                See How We Turn Ideas Into Impactful Digital Experiences
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Why Choose Us Section */}
      <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase">
                  <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
                  Why Choose Us
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                  Here’s Why Brands Trust <span className="text-[#FF6B1E]">Our Expertise</span>
                </h2>
              </div>
              <p className="text-zinc-400 font-light leading-relaxed">
                We design and engineer digital platforms that convert. Our approach is grounded in deep technical diagnostics, clean UI patterns, and aggressive performance integrations.
              </p>

              {/* Two Feature Box items */}
              <div className="space-y-6">
                {[
                  { icon: "/images/icons/choose-us-icon1-1.png", title: "Long-Term Support", desc: "We provide comprehensive post-launch monitoring, core checks, and scaling optimizations." },
                  { icon: "/images/icons/choose-us-icon1-2.png", title: "Data-Driven Strategy", desc: "Every visual asset and line of code is structured to align with customer performance targets." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <div className="w-12 h-12 shrink-0">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading text-lg font-extrabold uppercase tracking-wider text-white">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Happy customer avatar list stack */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3 overflow-hidden select-none">
                    {["client-1-1.jpg", "client-1-2.jpg", "client-1-3.jpg", "client-1-4.jpg"].map((img, i) => (
                      <img
                        key={i}
                        src={`/images/icons/${img}`}
                        alt="Customer Avatar"
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0D0D0D] object-cover"
                      />
                    ))}
                  </div>
                  <span className="font-heading text-xs font-bold text-white uppercase tracking-widest">
                    300+ Happy Customers
                  </span>
                </div>
                <div className="w-12 h-12 opacity-50 shrink-0 hidden sm:block">
                  <img src="/images/icons/ball.png" alt="Decorative sphere shape" className="w-full h-full object-contain animate-bounce" style={{ animationDuration: "5s" }} />
                </div>
              </div>

            </div>

            {/* Right Column Image & Counter Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-[85%] aspect-4/5 rounded-[0px_100px_100px_100px] border border-white/8 overflow-hidden">
                <img src="/images/resource/choose-us-1-1.jpg" alt="Developer Team" className="w-full h-full object-cover" />
                <div className="absolute bottom-8 left-8 bg-[#FF6B1E] p-6 rounded-3xl border border-white/10 shadow-2xl flex items-center gap-4">
                  <span className="font-heading text-5xl font-extrabold text-[#0D0D0D]">10%</span>
                  <p className="text-xs font-bold text-[#0D0D0D] uppercase tracking-widest leading-normal">
                    Satisfied Clients <br />
                    Returning Often
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Testimonials & Ratings Badges */}
      <section className="relative py-28 border-b border-white/8 select-none bg-[#0d0d0d] overflow-hidden">
        {/* Gencyo background shapes */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/icons/testi-bg-shape.png" alt="bg shape" className="w-full h-full object-cover blend-screen" />
        </div>
        <div className="absolute left-6 top-1/4 w-72 h-72 pointer-events-none opacity-25">
          <img src="/images/icons/testi-light-shape-1-1.png" alt="light" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute left-16 top-1/3 w-32 h-32 pointer-events-none opacity-30 tm-gsap-animate-circle">
          <img src="/images/icons/testi-shape-1-1.png" alt="shape" className="w-full h-full object-contain blend-screen" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase">
                <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
                Testimonial
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                The Best Customers <br />Says <span className="text-[#FF6B1E]">About Our Action</span>
              </h2>
            </div>
            
            <div className="lg:col-span-4 flex items-center gap-4 bg-[#151515] p-5 rounded-3xl border border-white/5">
              <span className="font-heading text-4xl font-extrabold text-white">4.8</span>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-normal">
                (5k+) Customer <br />
                <span className="text-[#FF6B1E]">Reviews</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side Quote circular stamp */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                {/* SVG spinning text circle */}
                <svg className="w-full h-full ani-circle" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="testimonialCircle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  </defs>
                  <text fontSize="13" fill="#FF6B1E" fontWeight="700" letterSpacing="3" fontFamily="monospace">
                    <textPath href="#testimonialCircle">CUSTOMER REVIEW ★ HAPPY CLIENTS ★ </textPath>
                  </text>
                </svg>
                <div className="absolute w-12 h-12 flex items-center justify-center">
                  <img src="/images/icons/quote-icon-1-1.png" alt="quotes logo" className="w-8 h-8 object-contain blend-screen" />
                </div>
              </div>
            </div>

            {/* Right side Testimonials details & controller */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-[#151515] p-8 md:p-10 rounded-[35px] border border-white/5 space-y-6">
                <div className="flex gap-1.5 text-[#FF6B1E]">
                  {Array(testimonials[activeTestimonial].stars).fill(0).map((_, i) => (
                    <span key={i} className="text-lg font-bold">&starf;</span>
                  ))}
                </div>
                
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light italic">
                  &quot;{testimonials[activeTestimonial].quote}&quot;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10">
                    <img src={testimonials[activeTestimonial].image} alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-heading text-base font-extrabold text-white uppercase tracking-wider">
                      {testimonials[activeTestimonial].name}
                    </h5>
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                      {testimonials[activeTestimonial].role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Button controllers */}
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center hover:bg-[#FF6B1E] hover:text-black transition-all cursor-pointer"
                >
                  &larr;
                </button>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center hover:bg-[#FF6B1E] hover:text-black transition-all cursor-pointer"
                >
                  &rarr;
                </button>
              </div>

            </div>
          </div>

          {/* Customer Reviews Badges Area */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h4 className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
              Our Customers <br />
              <span className="text-[#FF6B1E]">Consistently Rated 4.8/5</span>
            </h4>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full md:w-auto">
              <div className="flex items-center gap-4 bg-[#151515] p-5 rounded-2xl border border-white/5 w-full sm:w-auto">
                <img src="/images/icons/capterra-1-1.png" alt="capterra" className="h-6 object-contain" />
                <div>
                  <h5 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider">Capterra</h5>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">4.8/5 (102 Reviews)</span>
                </div>
              </div>
              <div className="w-px h-8 bg-white/5 hidden sm:block"></div>
              <div className="flex items-center gap-4 bg-[#151515] p-5 rounded-2xl border border-white/5 w-full sm:w-auto">
                <img src="/images/icons/google-1-1.png" alt="google" className="h-6 object-contain" />
                <div>
                  <h5 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider">Google</h5>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">4.8/5 (102 Reviews)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D] overflow-hidden">
        {/* Background shapes */}
        <div className="absolute left-6 top-1/4 w-80 h-80 pointer-events-none opacity-20">
          <img src="/images/icons/faq-light-1-1.png" alt="faq bg" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute left-16 top-1/3 w-36 h-36 pointer-events-none opacity-35 tm-gsap-animate-circle">
          <img src="/images/icons/faq-shape-1-1.png" alt="shape" className="w-full h-full object-contain blend-screen" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase justify-center">
              <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
              Faqs
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              Have Questions in Your Mind? <br />
              <span className="text-[#FF6B1E]">Get the Answers Now</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#151515] border border-white/5 rounded-3xl overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left font-heading text-base sm:text-lg font-extrabold uppercase tracking-wide text-white hover:text-[#FF6B1E] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#FF6B1E] text-xl shrink-0 ml-4">
                      {isOpen ? "\u2212" : "\u002B"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-white/5 pt-4">
                      <p className="text-sm text-zinc-400 leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Team Section */}
      <section 
        className="relative py-28 bg-cover bg-center border-b border-white/8 select-none"
        style={{ backgroundImage: "url('/images/background/team-bg-1-1.jpg')" }}
      >
        {/* Floating background shapes */}
        <div className="absolute right-6 top-1/4 w-80 h-80 pointer-events-none opacity-20">
          <img src="/images/icons/team-light-1-1.png" alt="bg shape" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute right-16 top-1/3 w-36 h-36 pointer-events-none opacity-30 tm-gsap-animate-circle">
          <img src="/images/icons/team-shape-1-1.png" alt="shape" className="w-full h-full object-contain blend-screen" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase justify-center">
              <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
              Our Team
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              Meet Our Experienced <br />
              <span className="text-[#FF6B1E]">Team People</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jenny Wilson", role: "Developer", img: "/images/resource/team-1-1.jpg" },
              { name: "Kristin Watson", role: "Developer", img: "/images/resource/team-1-2.jpg" },
              { name: "Bessie Cooper", role: "Developer", img: "/images/resource/team-1-3.jpg" }
            ].map((member, idx) => (
              <div key={idx} className="group relative bg-[#151515] border border-white/5 rounded-[40px] overflow-hidden shadow-xl">
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  {/* Slide up socials overlay on hover */}
                  <div className="absolute inset-0 bg-[#FF6B1E]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4 text-black text-lg font-bold">
                      {["Twitter", "Facebook", "Pinterest", "Instagram"].map((s, i) => (
                        <a key={i} href="#" className="hover:text-white transition-colors uppercase text-xs tracking-wider">{s}</a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-heading text-lg font-extrabold uppercase tracking-wider text-white">
                    {member.name}
                  </h4>
                  <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1 block">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Brand Slider Section */}
      <section className="py-16 bg-[#0D0D0D] border-b border-white/8 overflow-hidden select-none">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-left flex gap-16 items-center">
            {Array(4).fill([
              "/images/icons/brand1-1.png",
              "/images/icons/brand1-2.png",
              "/images/icons/brand1-3.png",
              "/images/icons/brand1-4.png",
              "/images/icons/brand1-5.png"
            ]).flat().map((img, idx) => (
              <div key={idx} className="w-36 h-12 opacity-40 hover:opacity-100 transition-opacity shrink-0">
                <img src={img} alt="brand partner logo" className="w-full h-full object-contain filter invert" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Award Section */}
      <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D] overflow-hidden">
        {/* background shapes */}
        <div className="absolute left-6 top-1/4 w-80 h-80 pointer-events-none opacity-20">
          <img src="/images/icons/award-shape-1-2.png" alt="award bg" className="w-full h-full object-contain blend-screen animate-bounce" />
        </div>
        <div className="absolute left-24 top-1/3 w-96 h-96 pointer-events-none opacity-10">
          <img src="/images/icons/award-light-1-1.png" alt="light" className="w-full h-full object-contain blend-screen" />
        </div>
        <div className="absolute right-6 bottom-12 w-80 h-80 pointer-events-none opacity-20">
          <img src="/images/icons/award-shape-1-3.png" alt="shape" className="w-full h-full object-contain blend-screen animate-pulse" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column awards items list */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { year: "2026", img: "/images/icons/award-1-1.png", title: "Awwwards Interior Excellence", desc: "For extreme infrastructure performance and styling blueprints." },
                { year: "2023", img: "/images/icons/award-1-2.png", title: "Awesome business models", desc: "Optimizing conversion ratios across scalable marketing funnels." },
                { year: "2020", img: "/images/icons/award-1-3.png", title: "Creative Agencies Worldwide", desc: "Exceptional UI/UX integration frameworks and mobile sync." }
              ].map((award, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-[#151515] p-6 rounded-3xl border border-white/5 hover:border-[#FF6B1E]/30 transition-all duration-300"
                >
                  <div className="flex gap-4 items-center shrink-0">
                    <span className="font-heading text-lg font-extrabold text-[#FF6B1E]">
                      {award.year}
                    </span>
                    <div className="w-14 h-14 bg-black/40 rounded-2xl flex items-center justify-center p-3 border border-white/5">
                      <img src={award.img} alt={award.title} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading text-lg font-extrabold uppercase tracking-wider text-white">
                      {award.title}
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      {award.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column Title & Metric */}
            <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase justify-center lg:justify-start">
                  <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
                  Award Winning Company
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                  Innovation for Business <span className="text-[#FF6B1E]">Growth with Gencyo</span>
                </h2>
              </div>
              <p className="text-zinc-400 font-light leading-relaxed">
                We understand that every business is unique. That&apos;s why we offer customized solutions to meet your specific needs.
              </p>
              
              <div className="relative w-44 h-44 mx-auto lg:mx-0 opacity-15 pointer-events-none">
                <img src="/images/icons/award-shape-1-1.png" alt="wheel" className="w-full h-full object-contain tm-gsap-animate-circle blend-screen" />
              </div>
              
              <div className="flex justify-center lg:justify-start gap-4">
                <span className="font-heading text-5xl font-extrabold text-[#FF6B1E]">15+</span>
                <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest text-left leading-normal">
                  Years In Providing <br />
                  Digital Service
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 15. Inline Contact Form */}
      <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D] overflow-hidden">
        {/* Floating shape vector */}
        <div className="absolute right-12 bottom-6 w-96 h-96 opacity-15 pointer-events-none hidden xl:block">
          <img src="/images/resource/contact-shape-1-2.png" alt="shape" className="w-full h-full object-contain" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column support info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase">
                  <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
                  Contact Us
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                  Always Happy to <span className="text-[#FF6B1E]">Hear from You</span>
                </h2>
              </div>
              
              <p className="text-zinc-400 font-light leading-relaxed">
                Connect with our technical design coordinators or operations leads today to initiate database reviews, frontend builds, or acquisition scoping.
              </p>

              {/* Contact list details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                <div className="space-y-3">
                  <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white">Location</h4>
                  <div className="flex gap-2 items-start text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                    <img src="/images/icons/location.svg" alt="loc" className="w-4 h-4 object-contain mt-0.5 filter invert" />
                    <p>Holland Park Holland, London 7QU</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white">Email</h4>
                  <div className="flex gap-2 items-start text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                    <img src="/images/icons/email.svg" alt="email" className="w-4 h-4 object-contain mt-0.5 filter invert" />
                    <div className="space-y-1">
                      <a href="mailto:info@abbadigital.com" className="hover:text-[#FF6B1E] block">info@abbadigital.com</a>
                      <a href="mailto:support@abbadigital.com" className="hover:text-[#FF6B1E] block">support@abbadigital.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side thumbnail image */}
              <div className="w-[85%] aspect-video rounded-3xl overflow-hidden border border-white/5 shrink-0 hidden sm:block shadow-2xl">
                <img src="/images/resource/contact-1-1.jpg" alt="Support" className="w-full h-full object-cover" />
              </div>

            </div>

            {/* Right Column message inputs form */}
            <div className="lg:col-span-7 relative bg-[#151515] p-8 sm:p-10 rounded-[35px] border border-white/5 shadow-2xl">
              <div className="absolute right-[-40px] top-[-40px] w-28 h-28 opacity-10 pointer-events-none hidden xl:block">
                <img src="/images/resource/contact-shape-1-1.png" alt="shape bg" className="w-full h-full object-contain animate-bounce" />
              </div>

              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="inline-flex w-16 h-16 rounded-full bg-[#FF6B1E]/15 border border-[#FF6B1E] items-center justify-center text-2xl text-[#FF6B1E]">
                    &check;
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold uppercase text-white tracking-wide">
                    Submission Received!
                  </h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                    Thank you. Our technical operations coordinator will contact you within 12 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *" 
                      className="minimal-input uppercase font-bold text-xs tracking-wider" 
                    />
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *" 
                      className="minimal-input uppercase font-bold text-xs tracking-wider" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone" 
                      className="minimal-input uppercase font-bold text-xs tracking-wider" 
                    />
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject (Optional)" 
                      className="minimal-input uppercase font-bold text-xs tracking-wider" 
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type Your Message *" 
                      rows="4"
                      className="minimal-input uppercase font-bold text-xs tracking-wider"
                    ></textarea>
                  </div>
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="btn-style-one cursor-pointer w-full sm:w-auto"
                    >
                      <span className="btn-arrow-left">
                        <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                      </span>
                      <span className="btn-title">{loading ? "Sending..." : "Send Message"}</span>
                      <span className="btn-arrow-right">
                        <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                      </span>
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 16. Latest News Blog Section */}
      <section className="relative py-28 select-none bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase justify-center">
              <img src="/images/icons/star.png" alt="star" className="w-3 h-3 object-contain" />
              Our Blog
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              Check Out Latest News <br />
              <span className="text-[#FF6B1E]">Updates & Articles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/images/resource/news-1-1.jpg", date: "20", title: "Why Your Brand Needs a Strong Online Presence" },
              { img: "/images/resource/news-1-2.jpg", date: "05", title: "Designing User Experiences That Actually Convert" },
              { img: "/images/resource/news-1-3.jpg", date: "08", title: "Brand Identity Essentials for Digital Businesses" }
            ].map((blog, idx) => (
              <div key={idx} className="group relative bg-[#151515] border border-white/5 rounded-[40px] overflow-hidden shadow-xl flex flex-col justify-between">
                <div>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img 
                      src={blog.img}
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-[#FF6B1E] text-black font-heading text-lg font-extrabold p-3 rounded-2xl w-12 h-12 flex items-center justify-center">
                      {blog.date}
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <span className="text-xs font-bold text-[#FF6B1E] uppercase tracking-widest">
                      Digital Agency
                    </span>
                    <h4 className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white group-hover:text-[#FF6B1E] transition-colors leading-tight">
                      <Link href="/">{blog.title}</Link>
                    </h4>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-[#FF6B1E] transition-colors"
                  >
                    <span>Read More</span>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5.60006L10.5 5.60006M12.8353 5.61358C10.6569 5.48049 6.3 6.41212 6.3 11.2034M12.8353 5.58981C10.6569 5.7229 6.3 4.79127 6.3 0" stroke="white" stroke-width="1.5"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
