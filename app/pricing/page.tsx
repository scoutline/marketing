'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

const pricing = {
  monthly: {
    solo: 39,
    teams: 29,
  },
  yearly: {
    solo: 388,
    teams: 288,
  },
};

const comparisonTable = [
  {
    category: "AI Intelligence",
    rows: [
      { name: "Agentic Drafting", solo: "25/day", teams: "Unlimited" },
      { name: "Research Agents", solo: "10/day", teams: "Unlimited" },
      { name: "Vector DB Indexing", solo: "500 pages", teams: "Unlimited" },
    ]
  },
  {
    category: "The Vault",
    rows: [
      { name: "Storage", solo: "50GB", teams: "500GB+" },
      { name: "Document OCR", solo: "Textract", teams: "Textract" },
      { name: "Row Level Security", solo: "Yes", teams: "Yes" },
    ]
  },
  {
    category: "Infrastructure",
    rows: [
      { name: "Custom Domain", solo: "No", teams: "Yes" },
      { name: "Audit Logs", solo: "Personal", teams: "Firm-wide" },
      { name: "Support", solo: "Standard", teams: "Priority" },
    ]
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const isYearly = billingCycle === 'yearly';
  const soloPrice = isYearly ? pricing.yearly.solo : pricing.monthly.solo;
  const teamsPrice = isYearly ? pricing.yearly.teams : pricing.monthly.teams;

  return (
    <main className="bg-page min-h-screen relative overflow-hidden">
      <Nav />

      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-warm/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-warm/5 rounded-full blur-[120px]" />
      </div>

      <div className="pt-40 pb-32 px-6 max-w-stack mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-serif text-4xl sm:text-5xl mb-6"
          >
            Simple, Transparent Pricing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="body-text max-w-[460px] mx-auto mb-10"
          >
            Legal intelligence shouldn't be a luxury. Choose the plan that fits your firm's ambition.
          </motion.p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors cursor-pointer", !isYearly ? "text-text-primary" : "text-text-tertiary")} onClick={() => setBillingCycle('monthly')}>Monthly</span>
            <div
              className="w-12 h-6 bg-surface border border-white/10 rounded-full p-1 cursor-pointer flex items-center relative"
              onClick={() => setBillingCycle(isYearly ? 'monthly' : 'yearly')}
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full"
                animate={{ x: isYearly ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setBillingCycle('yearly')}>
              <span className={cn("text-sm font-medium transition-colors", isYearly ? "text-text-primary" : "text-text-tertiary")}>Yearly</span>
              <span className="text-[10px] bg-accent-warm/10 text-accent-warm px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">17% Off</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {/* Solo Card */}
          <motion.div
            whileHover={{ y: -2 }}
            className="p-10 bg-[#111111] border border-white/[0.08] rounded-xl flex flex-col h-full relative"
          >
            <div className="mb-10">
              <p className="section-label mb-3">Solo</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl heading-serif font-normal">${soloPrice}</span>
                <span className="text-text-secondary text-[0.9375rem]">/{isYearly ? 'yr' : 'mo'}</span>
              </div>
            </div>

            <p className="body-text mb-8">
              Essential intelligence for independent practitioners who need elite, verifiable AI on-demand.
            </p>

            <div className="space-y-5 mb-12 flex-grow">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="body-text text-text-primary">All features included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="body-text italic">Usage Caps Apply</span>
              </div>
            </div>

            <a
              href="/"
              className="font-sans text-sm font-medium bg-white text-black px-6 py-2.5 rounded-full hover:bg-[#e8e5e0] transition-colors duration-200 text-center"
            >
              Get Started
            </a>
          </motion.div>

          {/* Teams Card */}
          <motion.div
            whileHover={{ y: -2 }}
            className="p-10 bg-[#111111] border border-white/[0.14] rounded-xl flex flex-col h-full relative"
          >
            <div className="mb-10">
              <div className="flex justify-between items-start">
                <p className="section-label mb-3 text-white">Teams</p>
                <span className="text-[10px] bg-white text-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Recommended</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl heading-serif font-normal">${teamsPrice}</span>
                <span className="text-text-secondary text-[0.9375rem]">/seat/{isYearly ? 'yr' : 'mo'}</span>
              </div>
            </div>

            <p className="body-text mb-8 text-text-primary">
              The power of agentic legal intelligence, coordinated across your entire firm.
            </p>

            <div className="space-y-5 mb-12 flex-grow">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="body-text text-text-primary">Unlimited Intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="body-text text-text-primary">Firm-wide Collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="body-text text-text-primary">Advanced Auditing</span>
              </div>
            </div>

            <a
              href="/"
              className="font-sans text-sm font-medium bg-white text-black px-6 py-2.5 rounded-full hover:bg-[#e8e5e0] transition-colors duration-200 text-center"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>

        {/* Comparison Table - Structured Editorial Layout */}
        <div className="mb-32 max-w-stack mx-auto">
          <h2 className="heading-serif text-2xl mb-12 text-center text-text-primary">Capability Matrix</h2>

          {comparisonTable.map((section, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h3 className="section-label mb-6 text-text-primary opacity-50 uppercase tracking-[0.1em] text-[11px]">{section.category}</h3>
              <div className="space-y-0">
                {section.rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="group py-5 border-t border-white/[0.08] flex justify-between items-center">
                    <span className="body-text text-text-primary text-[0.9375rem]">{row.name}</span>
                    <div className="flex items-center gap-8 text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-text-tertiary uppercase tracking-wider mb-1">Solo</span>
                        <span className="body-text text-sm">{row.solo}</span>
                      </div>
                      <div className="flex flex-col items-end min-w-[80px]">
                        <span className="text-[10px] text-text-tertiary uppercase tracking-wider mb-1">Teams</span>
                        <span className="body-text text-sm font-medium text-text-primary">{row.teams}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="body-text text-sm max-w-[500px] mx-auto">
            Need something custom? We offer enterprise-grade deployments and integration services.
            <a href="mailto:harsha@usescoutline.com" className="text-accent-warm hover:underline ml-1">Get in touch</a>.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
