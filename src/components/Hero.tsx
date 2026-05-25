import { motion } from "motion/react";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  FileCheck,
  Download
} from "lucide-react";
import { CONTACT_INFO } from "../data";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 flex items-center overflow-hidden">
      {/* Editorial Decorative Background Grids */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-100/20 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />

      {/* Grid blueprint style lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none border-x border-dashed border-brand-900/60 max-w-6xl mx-auto flex justify-between">
        <div className="w-[1px] h-full border-r border-dashed border-brand-900" />
        <div className="w-[1px] h-full border-r border-dashed border-brand-900" />
        <div className="w-[1px] h-full border-r border-dashed border-brand-900" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 w-full text-left space-y-8">
        {/* Left Column: Text & Content */}
        <div className="space-y-8">
          {/* Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-100 text-brand-800 text-xs font-mono tracking-widest uppercase font-semibold border-l-2 border-accent-gold rounded-sm"
          >
            <TrendingUp className="w-3.5 h-3.5 text-accent-gold" />
            BBA IN ACCOUNTING — UNIVERSITY OF DHAKA
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-900 leading-none tracking-tight"
            >
              Md. Sujon Shikder <br />
              <span className="text-accent-gold font-normal italic">Professional Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base text-gray-600 max-w-2xl leading-relaxed font-light"
            >
              BBA graduate in Accounting from the <span className="font-medium text-brand-800">University of Dhaka</span> and at the <span className="font-medium text-brand-800">ICAB Professional Level</span>. Experienced in financial reporting, corporate tax, and data analysis.
            </motion.p>
          </div>

          {/* Core Credentials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl"
          >
            <button
              onClick={() => onScrollTo("education")}
              className="group text-left p-4 bg-white/70 hover:bg-white border border-brand-500/10 hover:border-accent-gold transition-all duration-300 rounded-sm shadow-xs focus:outline-none pointer-events-auto cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4.5 h-4.5 text-accent-gold" />
                <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider">Education</span>
              </div>
              <p className="font-sans text-sm font-bold text-brand-900 leading-tight">University of Dhaka</p>
              <p className="font-sans text-xs text-brand-500 mt-1">BBA Accounting - CGPA: 3.65</p>
            </button>

            <button
              onClick={() => onScrollTo("education")}
              className="group text-left p-4 bg-white/70 hover:bg-white border border-brand-500/10 hover:border-accent-gold transition-all duration-300 rounded-sm shadow-xs focus:outline-none pointer-events-auto cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4.5 h-4.5 text-accent-gold" />
                <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider">Professional</span>
              </div>
              <p className="font-sans text-sm font-bold text-brand-900 leading-tight">ICAB Professional Level</p>
              <p className="font-sans text-xs text-emerald-600 mt-1 font-medium">Certificate Level Complete</p>
            </button>

            <button
              onClick={() => onScrollTo("experience")}
              className="col-span-2 sm:col-span-1 group text-left p-4 bg-white/70 hover:bg-white border border-brand-500/10 hover:border-accent-gold transition-all duration-300 rounded-sm shadow-xs focus:outline-none pointer-events-auto cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="w-4.5 h-4.5 text-accent-gold" />
                <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider">Leadership</span>
              </div>
              <p className="font-sans text-sm font-bold text-brand-900 leading-tight">UDAF Vice President</p>
              <p className="font-sans text-xs text-brand-500 mt-1">Promotion & Content</p>
            </button>
          </motion.div>

          {/* Action Row & Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => onScrollTo("contact")}
              className="flex items-center gap-2 bg-brand-800 hover:bg-brand-950 text-white font-sans text-xs tracking-widest uppercase font-bold py-3.5 px-6 rounded-sm shadow-sm hover:shadow transition-all duration-200 pointer-events-auto cursor-pointer"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 text-accent-gold" />
            </button>
            <a
              href="/Md_Sujon_Shikder_CV.pdf"
              download="Md_Sujon_Shikder_CV.pdf"
              className="flex items-center gap-2 border border-brand-800 text-brand-800 hover:bg-brand-50/50 hover:text-brand-900 font-sans text-xs tracking-widest uppercase font-bold py-3.5 px-6 rounded-sm transition-all duration-200 pointer-events-auto cursor-pointer"
            >
              Download CV
              <Download className="w-4 h-4 text-accent-gold" />
            </a>
          </motion.div>

          {/* Visual Contact Micro Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4 flex flex-wrap gap-x-6 gap-y-3 border-t border-brand-500/5 max-w-3xl"
          >
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-accent-gold transition-colors"
            >
              <div className="p-1 px-1.5 bg-brand-100 rounded-xs">
                <Mail className="w-3.5 h-3.5 text-brand-800" />
              </div>
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-accent-gold transition-colors"
            >
              <div className="p-1 px-1.5 bg-brand-100 rounded-xs">
                <Phone className="w-3.5 h-3.5 text-brand-800" />
              </div>
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <div className="p-1 px-1.5 bg-brand-100 rounded-xs">
                <MapPin className="w-3.5 h-3.5 text-brand-800" />
              </div>
              <span>{CONTACT_INFO.address}</span>
            </span>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-accent-gold transition-colors"
            >
              <div className="p-1 px-1.5 bg-brand-100 rounded-xs">
                <Linkedin className="w-3.5 h-3.5 text-brand-800" />
              </div>
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
