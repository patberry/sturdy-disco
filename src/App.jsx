import React, { useState } from 'react';
import { ChevronRight, Check, BookOpen, Zap, Globe, TrendingUp, ChevronLeft } from 'lucide-react';

export default function GumroadProfile() {
  const [expandedPaper, setExpandedPaper] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState({});

  // Carousel images for each paper
  const carouselImages = {
    1: [
      { src: '/mnt/user-data/uploads/htk4s7p19u2ld4jtfzx6mr6qcx85.webp', alt: 'Strategic Framework cover' },
      { src: '/mnt/user-data/uploads/mmj5fiyk19bwjpwjilkjzp2u9dqa.webp', alt: 'ONE MARS Global Agency Ecosystem' },
      { src: '/mnt/user-data/uploads/txkqunzzx9l8ugcoi0jnqqp4nybi.webp', alt: 'Marketing channels ecosystem' },
      { src: '/mnt/user-data/uploads/lmsedy80s85zogm0ebnecciu4egt.webp', alt: 'Technology Infrastructure' }
    ],
    2: [
      { src: '/mnt/user-data/uploads/rjcc1pg5z76o8elaomlm8fm3arg3.png', alt: 'Technology Infrastructure cover' },
      { src: '/mnt/user-data/uploads/4tnloqh84ngc90u5t9fdvdgy8mnc.jpg', alt: 'Unified Workflow Model' },
      { src: '/mnt/user-data/uploads/bn6j2w82xyq1li0d5kgo7flqac4p.jpg', alt: 'Agile Network Model' },
      { src: '/mnt/user-data/uploads/5mx3nx2dxrduvopcq34cputyq25w.jpg', alt: 'Emerging Compensation Approaches' }
    ],
    3: [
      { src: '/mnt/user-data/uploads/5z55gkbfyybopf9wmodeiqmty9w1.png', alt: 'Future of Agency Partnerships cover' },
      { src: '/mnt/user-data/uploads/eeqobkpur4ytd1ou5w4l94r6gk7h.png', alt: 'AI Impact Matrix' },
      { src: '/mnt/user-data/uploads/gq68hpda7pgtq7b5m1r2hsswyfrw.jpg', alt: 'Creator Economy' },
      { src: '/mnt/user-data/uploads/g7g3sbc8gq34y9vl2x8xowvks09w.jpg', alt: 'Emerging Compensation' }
    ],
    4: [
      { src: '/mnt/user-data/uploads/8z20cx479loseetvwbso31b4tp3b.png', alt: 'Implementation Blueprint cover' },
      { src: '/mnt/user-data/uploads/ispyr4av5v6zqlvsa19cicg8krbg.jpg', alt: 'Target Operating Model' },
      { src: '/mnt/user-data/uploads/zu64ruwg76kymfku094xxdlzynd7.jpg', alt: 'Implementation Blueprint diagram' },
      { src: '/mnt/user-data/uploads/26p0yzf76omx2z8qkql0jzsokqcg.jpg', alt: 'Continuous Improvement Loop' }
    ]
  };

  const getCurrentCarouselIndex = (paperId) => carouselIndex[paperId] || 0;
  
  const nextSlide = (paperId) => {
    const images = carouselImages[paperId];
    const currentIdx = getCurrentCarouselIndex(paperId);
    setCarouselIndex({
      ...carouselIndex,
      [paperId]: (currentIdx + 1) % images.length
    });
  };

  const prevSlide = (paperId) => {
    const images = carouselImages[paperId];
    const currentIdx = getCurrentCarouselIndex(paperId);
    setCarouselIndex({
      ...carouselIndex,
      [paperId]: currentIdx === 0 ? images.length - 1 : currentIdx - 1
    });
  };

  const papers = [
    {
      id: 1,
      title: "Strategic Framework for Multi-Agency Ecosystems",
      subtitle: "Building Unified Operating Models Across Holding Companies and Specialist Studios",
      price: "Name Your Price",
      priceDetail: "Suggested: $197",
      url: "https://pmberry.gumroad.com/l/wp1-framework",
      description: "Comprehensive analysis of three proven strategic frameworks—Lead Integrator, Hub-and-Spoke, and Agile Ecosystem—with detailed case studies from Coca-Cola OpenX, Mars One Mars, and McDonald's. Brands implementing unified frameworks achieve 3-6% revenue increases and 30% improvements in marketing ROI.",
      pages: 32,
      highlights: ["Lead Integrator Model", "Hub-and-Spoke Structure", "Agile Ecosystem", "Case Study Analysis"],
      color: "from-slate-600 to-slate-700",
      keystat: "3-6% revenue increases + 30% marketing ROI improvement"
    },
    {
      id: 2,
      title: "Technology Infrastructure & Operational Blueprints",
      subtitle: "Systems for Scaled Multi-Agency Coordination",
      price: "$197",
      url: "https://pmberry.gumroad.com/l/wp2-technology",
      description: "Deep dive into platform architecture, operational workflows, and technology systems required to coordinate complex multi-agency networks at scale. Covers vendor selection, data integration, communication infrastructure, and workflow optimization. Achieves 15-20% reductions in coordination overhead and 7% ROMI improvements.",
      pages: 38,
      highlights: ["Platform Architecture", "Operational Workflows", "Data Integration", "Vendor Analysis"],
      color: "from-blue-600 to-blue-700",
      keystat: "15-20% coordination overhead reduction + 12% campaign performance lift"
    },
    {
      id: 3,
      title: "The Future of Agency Partnerships",
      subtitle: "AI Integration, Creator Economy, and Emerging Ecosystem Models",
      price: "$197",
      url: "https://pmberry.gumroad.com/l/wp3-future",
      description: "Forward-looking analysis of how AI adoption and the creator economy are reshaping agency value propositions. Explores compensation model evolution, new competency requirements, and emerging partnership structures. 78% of CMOs plan to use GenAI for business model changes; creator economy projected at $500B by 2030.",
      pages: 35,
      highlights: ["AI Transformation", "Creator Economy", "New Models", "Future Trends"],
      color: "from-emerald-600 to-emerald-700",
      keystat: "1/3 of automated agency jobs becoming GenAI, $500B creator economy by 2030"
    },
    {
      id: 4,
      title: "Implementation Blueprint",
      subtitle: "Building and Managing Integrated Agency Ecosystems",
      price: "$197",
      url: "https://pmberry.gumroad.com/l/wp4-blueprint",
      description: "Step-by-step operational guide for designing and launching unified agency ecosystems. Covers three-phase implementation approach (Foundation, Integration, Optimization), governance structures, performance management, and change management. Successful implementations achieve 25-40% marketing ROI improvements within 24 months.",
      pages: 42,
      highlights: ["3-Phase Implementation", "Governance Design", "Launch Timeline", "Change Management"],
      color: "from-purple-600 to-purple-700",
      keystat: "25-40% marketing ROI improvement within 24 months"
    }
  ];

  const bundlePrice = 497;
  const bundleUrl = "https://pmberry.gumroad.com/l/wp-collection";

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F3' }}>
      {/* Header */}
      <div className="border-b-4" style={{ borderColor: '#E63946', backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/mnt/user-data/uploads/The_Ad_Stack_wordmark-web.png"
              alt="The Ad Stack Logo"
              className="h-12"
            />
          </div>
          <a href="#" className="font-bold text-sm" style={{ color: '#E63946' }}>Browse Store</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: '#FFD60A' }}>
            <p className="text-sm font-bold text-black">By The Ad Stack • Expert Research • Actionable Frameworks</p>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: '#1A1A1A' }}>
            Modern Brand<br />Production
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mb-8">
            Transform how your organization manages advertising production across multiple agencies. Four comprehensive white papers covering strategy, technology, future trends, and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={bundleUrl} target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2 group" style={{ backgroundColor: '#E63946' }}>
              Get All 4 Papers <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a href="https://pmberry.gumroad.com/l/wp1-framework" target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-lg font-bold border-2 hover:shadow-lg transition" style={{ backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' }}>
              Start with White Paper 1
            </a>
          </div>
        </div>

        {/* Bundle Highlight */}
        <div className="rounded-xl p-8 mb-16 text-white" style={{ backgroundColor: '#E63946' }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: '#FFD60A' }}>COMPLETE COLLECTION</p>
              <h3 className="text-3xl font-black">All 4 White Papers</h3>
            </div>
            <div className="text-right">
              <p className="text-4xl font-black">${bundlePrice}</p>
              <p className="text-sm" style={{ color: '#FFD60A' }}>All papers (Save $296)</p>
            </div>
          </div>
          <p className="text-white/90">Get all four white papers covering strategic frameworks, technology infrastructure, future trends, and implementation blueprints. Used by executives and strategists at Fortune 500 companies.</p>
        </div>

        {/* Papers Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-8" style={{ color: '#1A1A1A' }}>The Collection</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer border-2"
                style={{ borderColor: '#FFD60A', backgroundColor: '#FFFFFF' }}
                onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
              >
                <div className="h-32 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${paper.color === 'from-slate-600 to-slate-700' ? '#E63946' : paper.color === 'from-blue-600 to-blue-700' ? '#0EA5E9' : paper.color === 'from-emerald-600 to-emerald-700' ? '#10B981' : '#F59E0B'}, ${paper.color === 'from-slate-600 to-slate-700' ? '#DC2626' : paper.color === 'from-blue-600 to-blue-700' ? '#0284C7' : paper.color === 'from-emerald-600 to-emerald-700' ? '#059669' : '#D97706'})` }} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-black mb-1" style={{ color: '#1A1A1A' }}>
                        {paper.title}
                      </h4>
                      <p className="text-sm text-gray-600">{paper.subtitle}</p>
                    </div>
                    <div className="ml-4 whitespace-nowrap text-right">
                      <p className="text-2xl font-black" style={{ color: '#E63946' }}>{paper.price}</p>
                      {paper.priceDetail && <p className="text-xs text-gray-500">{paper.priceDetail}</p>}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs font-bold rounded px-2.5 py-1" style={{ backgroundColor: '#FFD60A', color: '#1A1A1A' }}>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mb-4">{paper.pages} pages</p>

                  {expandedPaper === paper.id && (
                    <div className="pt-4 border-t-2" style={{ borderColor: '#FFD60A' }}>
                      <div className="mb-4 rounded-lg overflow-hidden relative" style={{ backgroundColor: '#F3F4F6' }}>
                        <img 
                          src={carouselImages[paper.id][getCurrentCarouselIndex(paper.id)].src}
                          alt={carouselImages[paper.id][getCurrentCarouselIndex(paper.id)].alt}
                          className="w-full h-auto"
                        />
                        
                        {carouselImages[paper.id].length > 1 && (
                          <>
                            <button
                              onClick={() => prevSlide(paper.id)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-1 rounded-full transition"
                              style={{ backgroundColor: 'rgba(230, 57, 70, 0.7)' }}
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => nextSlide(paper.id)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-1 rounded-full transition"
                              style={{ backgroundColor: 'rgba(230, 57, 70, 0.7)' }}
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                              {carouselImages[paper.id].map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCarouselIndex({ ...carouselIndex, [paper.id]: idx })}
                                  className="w-2 h-2 rounded-full transition"
                                  style={{ 
                                    backgroundColor: idx === getCurrentCarouselIndex(paper.id) 
                                      ? '#E63946'
                                      : 'rgba(230, 57, 70, 0.5)'
                                  }}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <p className="text-slate-700 text-sm mb-3">{paper.description}</p>
                      <div className="rounded-lg p-3 mb-4" style={{ backgroundColor: '#FFD60A' }}>
                        <p className="text-xs font-bold text-black uppercase mb-1">Key Research Finding</p>
                        <p className="text-sm font-bold text-black">{paper.keystat}</p>
                      </div>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" className="w-full text-white py-2 rounded-lg font-bold text-sm hover:shadow-lg transition block text-center" style={{ backgroundColor: '#E63946' }}>
                        Get This Paper
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-8" style={{ color: '#1A1A1A' }}>What You'll Learn</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Strategic Framework Selection",
                description: "Choose between Lead Integrator, Hub-and-Spoke, and Agile Ecosystem models with clear decision trees for your organization's scale and complexity."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Implementation Roadmap",
                description: "Phase-by-phase approach to ecosystem transformation: Foundation (Months 1-6), Integration (7-18), and Optimization. Includes governance, technology, and change management."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Quantified Business Impact",
                description: "Roadmap to 3-6% revenue increases, 30% marketing ROI improvements, and 25-40% ROMI gains within 24 months when properly implemented."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="rounded-xl p-6 border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#FFD60A' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FFD60A', color: '#1A1A1A' }}>
                  {benefit.icon}
                </div>
                <h4 className="font-black mb-2" style={{ color: '#1A1A1A' }}>{benefit.title}</h4>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Preview */}
        <div className="rounded-xl p-8 mb-16" style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFD60A' }}>
          <h3 className="text-2xl font-black mb-6" style={{ color: '#1A1A1A' }}>Featured Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { company: "Coca-Cola", model: "OpenX Model with WPP", outcome: "$40B incremental retail sales + 11% consumer growth after 20 years of stagnation" },
              { company: "Mars", model: "One Mars Ecosystem", outcome: "Unified coordination across 70+ markets with Publicis, Omnicom, and IPG" },
              { company: "McDonald's", model: "We Are Unlimited → Best-of-Breed", outcome: "Pivoted from $1B dedicated agency to distributed model delivering 5+ quarters of positive growth" }
            ].map((study, idx) => (
              <div key={idx} className="pb-4 border-b-2" style={{ borderColor: '#FFD60A' }}>
                <p className="text-sm font-black uppercase mb-2" style={{ color: '#E63946' }}>{study.company}</p>
                <p className="font-black mb-2" style={{ color: '#1A1A1A' }}>{study.model}</p>
                <p className="text-sm text-gray-700">{study.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="rounded-xl p-8 mb-8 text-white" style={{ backgroundColor: '#1A1A1A' }}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/mnt/user-data/uploads/The_Ad_Stack_wordmark-web.png"
              alt="The Ad Stack"
              className="h-20 flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-2xl font-black mb-2">From The Ad Stack</h4>
              <p className="mb-4 text-gray-300">
                These white papers are authored by advertising transformation strategists with 20+ years leading global production operations across 175+ markets. Experience includes enterprise-scale transformations at major multinationals, multi-agency ecosystem management at Publicis and Edelman, and leadership of AI-driven marketing technology platforms. Distilled from proven frameworks used by Fortune 500 brands.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Global Production", "Multi-Agency Coordination", "AI Integration", "Enterprise Transformation"].map((tag, idx) => (
                  <span key={idx} className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#FFD60A', color: '#1A1A1A' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-8" style={{ color: '#1A1A1A' }}>Frequently Asked</h3>
          <div className="space-y-4">
            {[
              {
                q: "Who should read these papers?",
                a: "CMOs, EVP of Global Production, Chief Marketing Officers, Brand Strategy Directors, Agency Leads, and Procurement teams navigating multi-agency coordination. Also valuable for holding company executives building ecosystem strategies."
              },
              {
                q: "What's the business impact?",
                a: "Research shows brands implementing unified frameworks achieve 3-6% revenue increases, 30% marketing ROI improvements, 25-40% ROMI gains within 24 months, and 15-20% reductions in coordination overhead."
              },
              {
                q: "Are these frameworks tested?",
                a: "Yes. Insights are based on analysis of 50+ global brand transformations including Coca-Cola, Mars, McDonald's, and major consumer brands. Each framework includes real-world case studies demonstrating proven outcomes."
              },
              {
                q: "What format do I receive?",
                a: "Professional PDF documents (32-42 pages each) with embedded links, appendices, and detailed case studies. Enterprise versions available in editable Word format for customization and internal presentations."
              },
              {
                q: "Can I use these internally?",
                a: "Yes. Individual licenses include internal sharing within your organization. Enterprise and team licenses available for multi-seat deployments, presentations to holding companies, and agency partner distribution."
              }
            ].map((faq, idx) => (
              <details key={idx} className="rounded-lg p-6 cursor-pointer group border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#FFD60A' }}>
                <summary className="flex justify-between items-center font-black text-black select-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5" style={{ color: '#E63946' }} />
                </summary>
                <p className="text-gray-700 pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12 border-t-4" style={{ borderColor: '#FFD60A' }}>
          <h3 className="text-3xl font-black mb-4" style={{ color: '#1A1A1A' }}>Ready to Transform Your Agency Model?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start with our complete white paper collection. Get frameworks, case studies, and implementation blueprints proven to drive results at scale.
          </p>
          <a href={bundleUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-white px-10 py-4 rounded-lg font-black hover:shadow-lg transition text-lg" style={{ backgroundColor: '#E63946' }}>
            Get All 4 Papers for ${bundlePrice}
          </a>
          <p className="text-sm text-gray-600 mt-4">Instant download • Lifetime access • Buy individual papers or the collection</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-4 mt-16" style={{ borderColor: '#FFD60A', backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto px-6 text-center py-8 text-sm text-gray-600">
          <p>By The Ad Stack • Expert research for advertising leaders | © 2025 Modern Brand Production</p>
        </div>
      </div>
    </div>
  );

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-slate-900/10 rounded-full">
            <p className="text-sm font-medium text-slate-700">Expert Research • Enterprise Guide • Actionable Frameworks</p>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Mastering Multi-Agency Ecosystems
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-8">
            Transform how your organization manages advertising production across multiple agencies. Four comprehensive white papers covering strategy, technology, future trends, and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={bundleUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition flex items-center justify-center gap-2 group">
              Get All 4 Papers <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a href="https://pmberry.gumroad.com/l/wp1-framework" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition">
              Start with White Paper 1
            </a>
          </div>
        </div>

        {/* Bundle Highlight */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 mb-16 text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-slate-300 mb-2">SPECIAL OFFER</p>
              <h3 className="text-3xl font-bold">Complete Collection</h3>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold">${bundlePrice}</p>
              <p className="text-sm text-slate-300">All 4 Papers (Save $296)</p>
            </div>
          </div>
          <p className="text-slate-200">Get all four white papers covering strategic frameworks, technology infrastructure, future trends, and implementation blueprints. Used by executives and strategists at Fortune 500 companies.</p>
        </div>

        {/* Papers Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">The Collection</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition cursor-pointer group"
                onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
              >
                <div className={`h-32 bg-gradient-to-r ${paper.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 w-24 h-24 rounded-full bg-white/20"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition">
                        {paper.title}
                      </h4>
                      <p className="text-sm text-slate-600">{paper.subtitle}</p>
                    </div>
                    <div className="ml-4 whitespace-nowrap text-right">
                      <p className="text-2xl font-bold text-slate-900">{paper.price}</p>
                      {paper.priceDetail && <p className="text-xs text-slate-500">{paper.priceDetail}</p>}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 mb-4">{paper.pages} pages</p>

                  {expandedPaper === paper.id && (
                    <div className="pt-4 border-t-2" style={{ borderColor: '#FFD60A' }}>
                      <div className="mb-4 rounded-lg overflow-hidden relative" style={{ backgroundColor: '#F3F4F6' }}>
                        <img 
                          src={carouselImages[paper.id][getCurrentCarouselIndex(paper.id)].src}
                          alt={carouselImages[paper.id][getCurrentCarouselIndex(paper.id)].alt}
                          className="w-full h-auto"
                        />
                        
                        {carouselImages[paper.id].length > 1 && (
                          <>
                            <button
                              onClick={() => prevSlide(paper.id)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-1 rounded-full transition"
                              style={{ backgroundColor: 'rgba(230, 57, 70, 0.7)' }}
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => nextSlide(paper.id)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-1 rounded-full transition"
                              style={{ backgroundColor: 'rgba(230, 57, 70, 0.7)' }}
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                              {carouselImages[paper.id].map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCarouselIndex({ ...carouselIndex, [paper.id]: idx })}
                                  className="w-2 h-2 rounded-full transition"
                                  style={{ 
                                    backgroundColor: idx === getCurrentCarouselIndex(paper.id) 
                                      ? '#E63946'
                                      : 'rgba(230, 57, 70, 0.5)'
                                  }}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <p className="text-slate-700 text-sm mb-3">{paper.description}</p>
                      <div className="rounded-lg p-3 mb-4" style={{ backgroundColor: '#FFD60A' }}>
                        <p className="text-xs font-bold text-black uppercase mb-1">Key Research Finding</p>
                        <p className="text-sm font-bold text-black">{paper.keystat}</p>
                      </div>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" className="w-full text-white py-2 rounded-lg font-bold text-sm hover:shadow-lg transition block text-center" style={{ backgroundColor: '#E63946' }}>
                        Get This Paper
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
       }