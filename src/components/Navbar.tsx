import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { Menu, X, ArrowUpRight, Award, DollarSign } from "lucide-react";
import { CONTACT_INFO } from "../data";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const navItems = [
    { id: "hero", label: "Profile" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Leadership" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sect = sections[i];
        if (sect && scrollPosition >= sect.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f6]/90 backdrop-blur-md border-b border-brand-500/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[2px] bg-accent-gold origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand/Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-2 focus:outline-none pointer-events-auto cursor-pointer"
        >
          <div className="w-9 h-9 flex items-center justify-center bg-brand-800 text-accent-gold font-mono text-sm tracking-wider font-semibold rounded-sm">
            SS
          </div>
          <div className="text-left">
            <span className="block font-sans text-sm tracking-wider font-bold text-brand-900 group-hover:text-accent-gold transition-colors">
              Sujon Shikder
            </span>
            <span className="block font-mono text-[9px] text-gray-400 tracking-wider uppercase">
              Portfolio
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative font-sans text-xs tracking-widest uppercase font-semibold hover:text-accent-gold transition-colors ${
                activeSection === item.id ? "text-accent-gold" : "text-brand-800/80"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-accent-gold-dark"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Direct Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-brand-800 hover:bg-brand-900 text-white font-sans text-xs tracking-widest uppercase font-semibold px-4 py-2 border border-brand-800 hover:border-accent-gold rounded-sm transition-all pointer-events-auto"
          >
            Inquire Now
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-gold" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-800 hover:text-accent-gold transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#faf9f6] border-b border-brand-500/5 px-6 py-6 flex flex-col gap-4 shadow-lg"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-sans text-sm tracking-widest uppercase font-bold py-2 ${
                activeSection === item.id ? "text-accent-gold" : "text-brand-800"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full flex items-center justify-center gap-2 bg-brand-800 hover:bg-brand-900 text-white font-sans text-[11px] tracking-widest uppercase font-bold py-3 px-4 rounded-sm transition-all pointer-events-auto"
          >
            Inquire Now
            <ArrowUpRight className="w-4 h-4 text-accent-gold" />
          </a>
        </motion.div>
      )}
    </header>
  );
}
