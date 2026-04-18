'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Globe, Zap, Shield, Heart, Clock, Mail, Lock, Sparkles, Info } from 'lucide-react';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

const values = [
  {
    title: "Unreasonable Care",
    desc: "We sweat the small details in every line of code and law. Accuracy is our core product.",
    icon: Heart
  },
  {
    title: "Verified Truth",
    desc: "Citations are not optional. We build for accuracy, not just functionality.",
    icon: Shield
  },
  {
    title: "Radical Ownership",
    desc: "We are a small team of owners. We operate with autonomy, speed, and deep accountability.",
    icon: Zap
  },
  {
    title: "Absolute Privacy",
    desc: "Secure by design, org-isolated by default. We never train on client data.",
    icon: Lock
  },
  {
    title: "Iterative Excellence",
    desc: "We ship fast then polish until perfect. Velocity is our competitive advantage.",
    icon: Sparkles
  },
  {
    title: "Trust Over Hype",
    desc: "We prioritize verifiable Citations over AI hallucinations at every layer.",
    icon: Info
  }
];

const commitments = [
  {
    title: "Remote-First",
    desc: "Work from anywhere in the world. We optimize for asynchronous communication and deep work.",
    icon: Globe
  },
  {
    title: "Deep Work Biased",
    desc: "We minimize meetings and distractions to maximize throughput and creative output.",
    icon: Clock
  },
  {
    title: "Global Equity",
    desc: "Compensation tiers based on global impact, not geography. We hire the best regardless of location.",
    icon: Globe
  },
  {
    title: "Learning Stipend",
    desc: "We invest in your growth with annual education budgets and conference allowances.",
    icon: Zap
  },
  {
    title: "Internal Mobility",
    desc: "Grow with the company. We favor internal expansion and skill-building over outside hiring.",
    icon: ArrowRight
  },
  {
    title: "Health & Vitality",
    desc: "Comprehensive wellness benefits and flexible time-off for you and your family.",
    icon: Heart
  }
];

const interviewProcess = [
  "Introductory Call",
  "Domain Deep-Dive",
  "Technical / Design Challenge",
  "Values Fit & Culture",
  "Leadership Review",
  "Final Offer Presentation"
];

const jobs = [
  {
    id: "ai-engineer",
    title: "Lead AI Engineer",
    location: "Remote Global",
    package: "Equity + $180k - $240k",
    about: "Join the core intelligence team building Scoutline's citation and verification engines. You'll work on RAG orchestration and custom evals.",
    whatWeDo: "We building the industry's most reliable extraction and citation engine for legal documents.",
    minQuals: ["5+ years experience with Python", "Deep understanding of LLMs and RAG architecture", "Proven track record of deploying AI systems at scale"],
    prefQuals: ["Experience with Vector DBs", "Background in Legal Tech", "Contributions to Open Source AI projects"],
    payRange: "$180,000 — $240,000 USD"
  },
  {
    id: "legal-engineer",
    title: "Legal Engineer",
    location: "Remote Global",
    package: "Equity + $140k - $190k",
    about: "Bridge the gap between technology and law. You'll translate legal workflows into AI logic and ensure our outputs meet the highest professional standards.",
    whatWeDo: "We turn complex legal procedures into structured, auditable AI agents.",
    minQuals: ["JD degree or equivalent legal experience", "High proficiency in prompt engineering", "Experience with No-code/Low-code automation"],
    prefQuals: ["Bar admission", "Experience at a top-tier law firm", "Technical background (CS minor or equivalent)"],
    payRange: "$140,000 — $190,000 USD"
  },
  {
    id: "frontend-engineer",
    title: "Senior Frontend Engineer",
    location: "Remote Global",
    package: "Equity + $150k - $210k",
    about: "Build the interface that partners trust. You'll create high-performance, minimalist tools using Next.js and Tailwind CSS.",
    whatWeDo: "We create high-density, editorial-grade interfaces for complex legal data.",
    minQuals: ["Advanced mastery of React and Next.js", "Deep appreciation for typography and design systems", "Experience with high-performance animations"],
    prefQuals: ["Experience with Framer Motion", "Background in B2B SaaS", "Open source design system contributions"],
    payRange: "$150,000 — $210,000 USD"
  },
  {
    id: "product-designer",
    title: "Product Designer",
    location: "Remote Global",
    package: "Equity + $130k - $180k",
    about: "Define the visual and interaction language of Scoutline. You'll lead design for our mission-critical legal tools.",
    whatWeDo: "We define how lawyers interact with AI—from search to drafting.",
    minQuals: ["Strong portfolio of minimalist, high-density UI", "Expertise in Figma and prototyping", "User-centric design methodology"],
    prefQuals: ["Experience with legal or fintech SaaS", "Front-end coding ability (React/Tailwind)", "Editorial design background"],
    payRange: "$130,000 — $180,000 USD"
  },
  {
    id: "ops-lead",
    title: "Operations Lead",
    location: "Remote Global",
    package: "Equity + $120k - $170k",
    about: "Ensure our remote-first team has everything they need to move fast. You'll handle everything from logistics to talent operations.",
    whatWeDo: "We build the infrastructure that powers our global, decentralized team.",
    minQuals: ["3+ years in Startup Operations", "Experience managing a remote-global workforce", "Mastery of modern ops tools (Linear, Notion, Deel)"],
    prefQuals: ["Legal industry knowledge", "Experience scaling a team from 5 to 50", "Background in talent acquisition"],
    payRange: "$120,000 — $170,000 USD"
  }
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <main className="bg-page min-h-screen relative overflow-hidden">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 text-center max-w-wide mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="heading-serif text-5xl sm:text-6xl mb-8"
        >
          Build the Future of Law.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="body-text max-w-prose mx-auto mb-16 text-lg"
        >
          Scoutline is for those who take unreasonable care in building verifiable intelligence. 
          We are a remote-first, global team of owners.
        </motion.p>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 border-y border-white/[0.05]">
        <div className="max-w-wide mx-auto">
          <p className="section-label mb-12 text-center opacity-50">Our Values</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-surface/20 border border-white/[0.05] rounded-xl flex flex-col items-center text-center">
                <v.icon className="size-6 text-accent-warm mb-6" />
                <h3 className="body-text font-medium text-text-primary mb-3 text-lg">{v.title}</h3>
                <p className="body-text text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-32 px-6 bg-surface/10">
        <div className="max-w-wide mx-auto">
          <p className="section-label mb-12 text-center opacity-50">Our Commitment</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {commitments.map((c, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <c.icon className="size-6 text-accent-warm mb-6" />
                <h3 className="body-text font-medium text-text-primary mb-3 text-lg">{c.title}</h3>
                <p className="body-text text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Process Section */}
      <section className="py-24 px-6 max-w-wide mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Process</p>
          <h2 className="heading-serif text-3xl">Six Rounds to Offer.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interviewProcess.map((step, i) => (
            <div key={i} className="p-6 bg-surface border border-white/[0.08] rounded-xl flex items-start gap-4">
              <span className="font-serif text-2xl text-accent-warm/40 leading-none">{i + 1}</span>
              <p className="body-text text-sm font-medium mt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 px-6 max-w-wide mx-auto">
        <p className="section-label mb-12">Current Openings</p>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="border border-white/[0.08] rounded-xl overflow-hidden bg-surface/20 hover:bg-surface/40 transition-colors">
              <button 
                onClick={() => toggleJob(job.id)}
                className="w-full text-left p-8 flex items-center justify-between group"
              >
                <div className="flex-grow grid grid-cols-1 md:grid-cols-[2fr,1fr,1.5fr] gap-6 items-center">
                  <h3 className="body-text text-lg font-medium text-text-primary">{job.title}</h3>
                  <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                    <Globe className="size-3 text-white/30" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-medium text-accent-warm">
                    <Zap className="size-3 opacity-50" />
                    <span>{job.package}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedJob === job.id ? 90 : 0 }}
                  className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors"
                >
                  <ChevronRight className="size-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-12 pt-4 border-t border-white/[0.05]">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                        <div>
                          <h4 className="section-label mb-4 opacity-50">About the Role</h4>
                          <p className="body-text mb-8">{job.about}</p>
                          <h4 className="section-label mb-4 opacity-50">What we do</h4>
                          <p className="body-text mb-8">{job.whatWeDo}</p>
                          <h4 className="section-label mb-4 opacity-50">Remote-First Culture</h4>
                          <p className="body-text">We are a distributed team by default. You bring the talent, we bring the support.</p>
                        </div>
                        <div>
                          <h4 className="section-label mb-4 opacity-50">What we need</h4>
                          <div className="space-y-6">
                            <div>
                              <p className="body-text text-sm font-bold mb-2 text-text-primary">Minimum Qualifications</p>
                              <ul className="space-y-2">
                                {job.minQuals.map((q, i) => (
                                  <li key={i} className="body-text text-xs flex gap-2">
                                    <span className="text-accent-warm mt-1">•</span> {q}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="body-text text-sm font-bold mb-2 text-text-primary">Preferred Qualifications</p>
                              <ul className="space-y-2">
                                {job.prefQuals.map((q, i) => (
                                  <li key={i} className="body-text text-xs flex gap-2 opacity-80">
                                    <span className="text-accent-warm mt-1">•</span> {q}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="pt-4 border-t border-white/[0.05]">
                              <p className="body-text text-sm font-bold mb-1 text-text-primary">Target Pay Range</p>
                              <p className="body-text text-xs">{job.payRange}</p>
                            </div>
                            <div className="pt-6">
                              <a 
                                href="/"
                                className="inline-flex items-center gap-2 font-sans text-sm font-medium bg-white text-black px-8 py-3 rounded-full hover:bg-[#e8e5e0] transition-colors"
                              >
                                Apply Now <ArrowRight className="size-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Not finding footer note */}
        <div className="mt-24 text-center">
          <p className="body-text text-sm max-w-[480px] mx-auto opacity-70">
            Can&apos;t find what you are looking for? Send your resume at 
            <a href="mailto:harsha@usescoutline.com" className="text-accent-warm hover:underline ml-1">
              harsha@usescoutline.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
