'use client';

import { useClerk } from '@clerk/nextjs';

export function MembershipSection() {
  const { openSignUp } = useClerk();

  return (
    <section className="py-24 px-6">
      <div className="max-w-prose mx-auto">

        <p className="section-label mb-5">Private Beta</p>

        <p className="body-text mb-4">
          Apply once and gain access to the full platform at launch. Beta
          membership includes all four modules available today, and every
          capability we add going forward.
        </p>

        <p className="body-text mb-8">
          We are accepting a limited number of firms before the general
          availability release. There is no obligation — only early access
          and a direct line to the team while we build.
        </p>

        {/* Pill CTA button — identical to Interface Craft "Join for $100" button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openSignUp({})}
            className="font-sans text-sm font-medium
                       bg-white text-black
                       px-5 py-2 rounded-full
                       hover:bg-[#e8e5e0]
                       transition-colors duration-200
                       cursor-pointer"
          >
            Request access
          </button>

          {/* Footnote beside button — like Interface Craft's regional pricing note */}
          <span className="font-sans text-xs text-text-tertiary leading-relaxed">
            No credit card required during the beta period.
          </span>
        </div>

      </div>
    </section>
  );
}
