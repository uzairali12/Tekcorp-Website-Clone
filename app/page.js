'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoPreview from '@/components/VideoPreview';
import PainPoints from '@/components/PainPoints';
import QuoteBanner from '@/components/QuoteBanner';
import Services from '@/components/Services';
import Impact from '@/components/Impact';
import Industries from '@/components/Industries';
import WhyChooseUs from '@/components/WhyChooseUs';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4faf8]">
      <Navbar />
      <Hero />
      <VideoPreview />
      <PainPoints />
      <QuoteBanner />
      <Services />
      <Impact />
      <Industries />
      <WhyChooseUs />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}