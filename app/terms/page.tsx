import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export default function TermsPage() {
  return (
    <main className="bg-page min-h-screen">
      <Nav />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-prose mx-auto">
          <h1 className="font-serif text-[2.375rem] text-text-primary mb-12">
            Terms of Service
          </h1>
          
          <div className="space-y-8">
            <div>
              <p className="section-label mb-4">Acceptance of Terms</p>
              <p className="body-text">
                By accessing Scoutline, you agree to be bound by these Terms of Service. 
                Our platform is intended for use by legal professionals and firms.
              </p>
            </div>

            <div>
              <p className="section-label mb-4">Professional Responsibility</p>
              <p className="body-text">
                Scoutline is an AI-assisted productivity tool. It does not provide legal 
                advice and does not replace the professional judgment of a qualified 
                attorney. Users are responsible for verifying all AI-generated citations 
                and analysis before use in legal proceedings.
              </p>
            </div>

            <div>
              <p className="section-label mb-4">Service Availability</p>
              <p className="body-text">
                During the Private Beta period, services are provided "as-is" for 
                evaluation purposes. We strive for 99.9% uptime but do not guarantee 
                uninterrupted access during the beta phase.
              </p>
            </div>

            <div>
              <p className="section-label mb-4">Prohibited Use</p>
              <p className="body-text">
                Users may not use Scoutline to process documents in violation of 
                third-party copyrights, attorney-client privilege (unless authorized), 
                or any applicable data privacy laws.
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
