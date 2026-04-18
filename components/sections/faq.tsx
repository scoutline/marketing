'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Is my firm\'s data secure?',
    a: 'Yes. Every document you upload is stored in an org-isolated Cloudflare R2 bucket. Your files are encrypted at rest and in transit. They are never shared across organizations, never indexed for third-party training, and never accessed by Scoutline staff without your explicit permission. You can delete your data at any time.',
  },
  {
    q: 'How accurate is Maverick\'s AI?',
    a: "Maverick is designed around a single constraint: it will not fabricate. Every answer it produces is grounded in chunks retrieved from your document. If the information is not in the document, Maverick says \"Information not found in the provided document\" - it does not guess. We use temperature 0.1 and enforce structured citation output to make this possible.",
  },
  {
    q: 'What file formats does Scoutline support?',
    a: 'Upload PDFs, DOCX, or plain text up to 100MB ( with 1GB through integrations ), all housed in an isolated AWS storage instance dedicated to your organization. Every document is parsed via Google Document AI’s Contract Processor, ensuring we preserve the structural integrity of your files—maintaining clause hierarchies, section headings, and page positioning rather than just extracting raw text.',
  },
  {
    q: 'How does onboarding work?',
    a: "After receiving your access confirmation, your firm's workspace is provisioned immediately. Onboarding takes under ten minutes: create your organization, invite your team, upload your first document. There is no implementation project, no professional services engagement, no migration required.",
  },
  {
    q: 'Can multiple people in my firm use the same account?',
    a: 'Yes. Scoutline is built around organizations. Every user belongs to an org, and documents are shared within that org. The Team plan supports up to 10 users. Enterprise plans include unlimited seats and can be configured with SSO via your firm\'s identity provider.',
  },
  {
    q: 'Can we use Scoutline via API?',
    a: 'Yes, on Team and Enterprise plans. The Scoutline API accepts document uploads and returns structured JSON responses with citations. Documentation is available at docs.usescoutline.com. API access during the beta period is included at no additional cost.',
  },
  {
    q: 'What happens to our data if we stop using Scoutline?',
    a: 'Your documents and conversation history are retained for 30 days after account closure, during which you can export everything. After 30 days, all data is permanently deleted from storage. We will send a reminder before deletion occurs.',
  },
];

// Mobile: accordion (one open at a time)
// Desktop: all expanded inline (no interaction needed)
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-prose mx-auto">

        <p className="section-label mb-8">Questions</p>

        {/* Desktop: plain list, all visible */}
        <div className="hidden md:block space-y-8">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <p
                className="font-sans text-[0.9375rem] font-medium
                           text-text-primary leading-snug mb-2"
              >
                {item.q}
              </p>
              <p className="body-text">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-0 divide-y divide-white/[0.08]">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full text-left flex items-start justify-between gap-4
                           cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="font-sans text-[0.9375rem] font-medium
                             text-text-primary leading-snug"
                >
                  {item.q}
                </span>
                {/* Plus / minus indicator */}
                <span
                  className="font-sans text-text-tertiary text-lg leading-none
                             flex-shrink-0 mt-0.5 select-none"
                >
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              {openIndex === i && (
                <p className="body-text mt-3">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
