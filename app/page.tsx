import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { IntroSection } from '@/components/sections/intro';
import { ProductSection } from '@/components/sections/product';
import { MembershipSection } from '@/components/sections/membership';
import { FAQSection } from '@/components/sections/faq';
import { Footer } from '@/components/footer';

function Divider() {
  return <hr className="border-t border-white/[0.08] max-w-prose mx-auto" />;
}

export default function Page() {
  return (
    <main className="bg-page min-h-screen">
      <Nav />
      <Hero />
      <Divider />
      <IntroSection />
      <Divider />
      <ProductSection />
      <Divider />
      <MembershipSection />
      <Divider />
      <FAQSection />
      <Footer />
    </main>
  );
}
