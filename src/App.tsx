import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ServicesSection } from './components/ServicesSection';
import { GraphicDesignGallery } from './components/GraphicDesignGallery';
import { VideoSection } from './components/VideoSection';
import { ArtworkGallery } from './components/ArtworkGallery';
import { Portfolio } from './components/Portfolio';
import { BrandMockupShowcase } from './components/BrandMockupShowcase';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { WhyGigspace } from './components/WhyGigspace';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomArtworkModal } from './components/CustomArtworkModal';

export default function App() {
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState<string>('');
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState<boolean>(false);

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBrief(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#11151B] text-[#FBFBF8] relative selection:bg-[#FF5B3D] selection:text-white">
      {/* Top Floating Navbar */}
      <Navbar onStartProject={() => scrollToContact()} />

      {/* Hero Section */}
      <Hero
        onStartProject={() => scrollToContact()}
        onExploreWork={scrollToWork}
      />

      {/* Brand Introduction */}
      <BrandIntro />

      {/* Core Services Section */}
      <ServicesSection onSelectService={(service) => scrollToContact(service)} />

      {/* Service 1 Visual Gallery: Graphic Design */}
      <GraphicDesignGallery onStartProject={(service) => scrollToContact(service || 'GRAPHIC DESIGN')} />

      {/* Service 2 Visual Suite: Video & Work Editing */}
      <VideoSection onStartProject={(service) => scrollToContact(service || 'VIDEO & WORK EDITING')} />

      {/* Service 3 Fine Art Gallery: Artwork Design */}
      <ArtworkGallery onOrderCustomArtwork={() => setIsArtworkModalOpen(true)} />

      {/* Portfolio / Selected Work */}
      <Portfolio onStartProject={(projectName) => scrollToContact(projectName ? `Project: ${projectName}` : undefined)} />

      {/* Real-World Brand Mockup Showcase */}
      <BrandMockupShowcase />

      {/* About GIGSPACE */}
      <AboutSection onStartProject={() => scrollToContact()} />

      {/* 4-Stage Methodology / Process */}
      <ProcessSection />

      {/* Core Functional Team Structure */}
      <TeamSection />

      {/* Why GIGSPACE & Client Journey */}
      <WhyGigspace />

      {/* Social Media Channels */}
      <SocialSection />

      {/* Interactive Project Brief & Contact Form */}
      <ContactSection initialService={selectedServiceForBrief} />

      {/* Footer */}
      <Footer />

      {/* Custom Artwork Commission Modal */}
      <CustomArtworkModal
        isOpen={isArtworkModalOpen}
        onClose={() => setIsArtworkModalOpen(false)}
      />
    </div>
  );
}

