import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export default function PrivacyPage() {
  return (
    <main className="bg-page min-h-screen">
      <Nav />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-prose mx-auto">
          <h1 className="font-serif text-[2.375rem] text-text-primary mb-12">
            Privacy Policy
          </h1>
          
          <div className="space-y-8">
            <div>
              <p className="section-label mb-4">Introduction</p>
              <p className="body-text">
                Your privacy is paramount. At Scoutline, we build tools for legal professionals who 
                handle the world's most sensitive information. This policy outlines how we 
                protect your data and your firm's confidentiality.
              </p>
            </div>

            <div>
              <p className="section-label mb-4">Data Isolation</p>
              <p className="body-text">
                All document data is stored in organization-isolated environments. We use 
                industry-standard encryption (AES-256) at rest and TLS 1.3 in transit. 
                Your data is never used to train third-party models.
              </p>
            </div>

            <div>
              <p className="section-label mb-4">Information Collection</p>
              <p className="body-text">
                We collect only the information necessary to provide the Scoutline platform: 
                firm contact details, user authentication via Clerk, and the documents you 
                explicitly choose to upload for analysis.
              </p>
            </div>

            <div>
              <p className="section-label mb-4">Your Rights</p>
              <p className="body-text">
                You retain full ownership of your data. You may export or delete your firm's 
                entire document library and conversation history at any time through the 
                admin dashboard.
              </p>
            </div>

            <div className="pt-8 border-t border-white/[0.08]">
              <p className="font-sans text-xs text-text-tertiary">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
