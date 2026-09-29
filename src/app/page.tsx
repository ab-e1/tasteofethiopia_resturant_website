import { Hero } from '@/components/home/Hero';
import { VisualPause } from '@/components/home/VisualPause';
import { CulturalStory } from '@/components/home/CulturalStory';
import { SignatureFeasts } from '@/components/home/SignatureFeasts';
import { BunnaCeremony } from '@/components/home/BunnaCeremony';
import { EditorialReservation } from '@/components/home/EditorialReservation';
import { VisitSection } from '@/components/home/VisitSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Atmospheric Hero */}
      <Hero />

      {/* 2. Photographic Breathing Room */}
      <VisualPause />

      {/* 3. Cultural Dining Philosophy */}
      <CulturalStory />

      {/* 4. Editorial Food Feature */}
      <SignatureFeasts />

      {/* 5. Bunna Coffee Ritual */}
      <BunnaCeremony />

      {/* 6. Reservation Conversion */}
      <EditorialReservation />

      {/* 7. Architectural Visit & Practical Details */}
      <VisitSection />
    </>
  );
}

