'use client';

import { useClerk } from '@clerk/nextjs';
import { CardStack } from './card-stack';

export function Hero() {
  const { openSignUp } = useClerk();

  return (
    /*
      Matches Interface Craft exactly:
      - Centered column
      - Serif headline, centered
      - Short subline below
      - Significant space before the card stack
      - Card stack as standalone visual
      - Top padding accounts for fixed nav (nav is ~64px)
    */
    <section className="flex flex-col items-center text-center pt-40 pb-32 px-6 overflow-hidden">

      {/* Headline — large serif, centered, same as "Interface Craft" wordmark size */}
      <h1
        className="font-serif font-normal text-text-primary
                   text-[1.75rem] sm:text-[2.375rem] md:text-[3.25rem]
                   leading-[1.18] tracking-[-0.025em]
                   max-w-wide mb-5 animate-fade-up"
      >
        Modern Law, Optimized
      </h1>

      {/* Subline — short, same width constraint as Interface Craft */}
      <p
        className="font-sans text-[0.9375rem] text-text-secondary
                   max-w-prose leading-relaxed mb-16
                   animate-fade-up animation-delay-100"
      >
        Citations you can trust. Intelligence you can verify. Built for zero-error environments.
      </p>

      {/* CTA — updated to simple documentation link placeholder */}
      <a
        href="#"
        className="font-sans text-sm font-medium
                   bg-white text-black
                   px-6 py-2.5 rounded-full
                   hover:bg-[#e8e5e0]
                   transition-colors duration-200
                   cursor-pointer mb-24
                   animate-fade-up animation-delay-200"
      >
        View Documentation
      </a>

      {/* Card stack — the hero visual */}
      <div className="animate-fade-up animation-delay-300 w-full">
        <CardStack />
      </div>

    </section>
  );
}
