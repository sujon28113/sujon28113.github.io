/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-[#1a1e21] flex flex-col selection:bg-accent-gold/25 selection:text-brand-900 overflow-x-hidden">
      {/* Pristine Sticky Header */}
      <Navbar onScrollTo={scrollToSection} />

      {/* Structured Content Segment */}
      <main className="flex-1 w-full flex flex-col">
        {/* Profile Intro / Hero */}
        <Hero onScrollTo={scrollToSection} />

        {/* Education Timeline */}
        <Education />

        {/* Leadership & Activities */}
        <Experience />

        {/* Core Skills Matrix */}
        <Skills />

        {/* Contact form and Live message logs */}
        <Contact />
      </main>

      {/* Swiss Footer with credentials */}
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
