import { Navbar } from '@/components/sections/Navbar';
import { HeroParallax } from '@/components/sections/HeroParallax';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PaketUmroh } from '@/components/sections/PaketUmroh';
import { TentangKami } from '@/components/sections/TentangKami';
import { AlurPendaftaran } from '@/components/sections/AlurPendaftaran';
import { Testimoni } from '@/components/sections/Testimoni';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] selection:bg-[#064E3B] selection:text-white">
      <Navbar />
      <HeroParallax />
      <TrustBadges />
      <PaketUmroh />
      <TentangKami />
      <AlurPendaftaran />
      <Testimoni />
      <CTASection />
      <Footer />
    </main>
  );
}
