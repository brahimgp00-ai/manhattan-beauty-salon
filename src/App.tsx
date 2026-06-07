import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] selection:bg-[#D7E2EA] selection:text-[#0C0C0C] overflow-x-clip font-sans relative">
      <HeroSection onBookClick={() => setIsBookingOpen(true)} />
      <MarqueeSection />
      <AboutSection onBookClick={() => setIsBookingOpen(true)} />
      <ServicesSection />
      <ProjectsSection />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
