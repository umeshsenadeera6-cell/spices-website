import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ProcessTimeline from './components/ProcessTimeline';
import InquirySystem from './components/InquirySystem';
import AntiGravityScene from './components/AntiGravityScene';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppBubble from './components/WhatsAppBubble';

const App = () => {
  return (
    <div className="relative bg-spice-dark min-h-screen selection:bg-spice-gold selection:text-spice-dark">
      {/* Visual Enhancements */}
      <CustomCursor />
      <WhatsAppBubble />

      {/* Background 3D Scene */}
      <Suspense fallback={<div className="fixed inset-0 bg-spice-dark" />}>
        <AntiGravityScene />
      </Suspense>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <ProcessTimeline />
        <Gallery />
        <Testimonials />
        <InquirySystem />
        <Footer />
      </main>
    </div>
  );
};

export default App;
