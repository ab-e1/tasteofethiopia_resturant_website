import { Hero } from '@/components/home/Hero';
import { CulturalStory } from '@/components/home/CulturalStory';
import { SignatureFeasts } from '@/components/home/SignatureFeasts';
import { BunnaCeremony } from '@/components/home/BunnaCeremony';
import { HomeVisitAndOrder } from '@/components/home/HomeVisitAndOrder';

export default function HomePage() {
  return (
    <>
      {/* 1. Atmospheric Hero with Culinary Welcome & Dual CTAs */}
      <Hero />

      {/* 2. The Communal Table & Cultural Story (id="about") */}
      <CulturalStory />

      {/* 3. Signature Feasts Showcase (id="menu") */}
      <SignatureFeasts />

      {/* 4. The Sacred Bunna Coffee Ceremony */}
      <BunnaCeremony />

      {/* 5. Visit & Online Ordering Anchors */}
      <HomeVisitAndOrder />
    </>
  );
}
