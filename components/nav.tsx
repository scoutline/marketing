'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Docs', href: 'https://docs.usescoutline.com/', external: true },
    { name: 'Careers', href: '/careers' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-wide mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <a
          href="/"
          className="font-serif text-[0.8125rem] sm:text-sm font-medium text-text-primary tracking-tight
                     hover:text-white transition-colors duration-200 z-50"
        >
          Scoutline
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-sans text-xs font-medium text-text-secondary
                         hover:text-text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side — Sign in & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <a
            href="#"
            className="hidden sm:flex font-sans text-sm font-medium
                       bg-white text-black
                       px-4 py-1.5 rounded-full
                       hover:bg-text-primary
                       transition-colors duration-200
                       cursor-pointer"
          >
            Sign in
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md pt-24 px-6 sm:hidden z-40"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif font-medium text-text-primary hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-5 border-t border-white/5">
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-sans font-medium text-text-secondary hover:text-white transition-colors flex items-center justify-between"
                >
                  Sign in
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-text-secondary">Soon</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

