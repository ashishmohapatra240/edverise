import HeroSection from '@/components/home/HeroSection';
import ImagineSection from '@/components/home/ImagineSection';
import HowWeDoThingsSection from '@/components/home/HowWeDoThingsSection';
import WhatWeOfferSection from '@/components/home/WhatWeOfferSection';
import WhatAreWeMadeOfSection from '@/components/home/WhatAreWeMadeOfSection';
import ChoosePackageSection from '@/components/home/ChoosePackageSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImagineSection />
      <HowWeDoThingsSection />
      <WhatWeOfferSection />
      <WhatAreWeMadeOfSection />
      <ChoosePackageSection />
      <TestimonialsSection />
    </main>
  );
}
