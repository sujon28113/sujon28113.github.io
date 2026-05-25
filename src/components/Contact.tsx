import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin 
} from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-50/50 relative border-t border-brand-500/5">
      {/* Decorative Blur */}
      <div className="absolute top-[40%] left-[5%] w-[350px] h-[350px] rounded-full bg-accent-gold/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="space-y-2 text-left">
            <span className="font-mono text-xs text-accent-gold font-bold uppercase tracking-widest block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-900">
              Contact & Consultation
            </h2>
          </div>
        </div>

        {/* Layout: Center Profile Details & Visual Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Professional Philosophy Card */}
          <div className="md:col-span-5 bg-brand-900 text-white p-8 rounded-lg shadow-xl space-y-6 text-left flex flex-col justify-between border-t-4 border-accent-gold">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-accent-gold font-bold uppercase tracking-widest block">
                Primary Advisory
              </span>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Sujon Shikder
              </h3>
              <p className="font-sans text-xs text-brand-200 leading-relaxed font-light">
                BBA Scholar in Accounting from the University of Dhaka & ICAB Professional Level CA Candidate.
              </p>
            </div>
            
            <div className="py-6 border-y border-white/10 text-xs text-brand-100/90 font-light italic leading-relaxed">
              "Fostering financial accuracy, ensuring seamless tax & VAT compliance, and driving analytical insights for business growth."
            </div>

            <p className="font-sans text-[11px] text-accent-gold font-medium">
              Standards: IFRS / IAS / ISA Codes
            </p>
          </div>

          {/* Column 2: Large Interactive Quick-Connect Channels */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            
            {/* Email Card */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group bg-white p-6 rounded-lg border border-brand-500/5 shadow-xs flex flex-col justify-between hover:border-accent-gold/40 transition-all cursor-pointer pointer-events-auto"
            >
              <div className="space-y-2">
                <div className="p-3 bg-brand-50 text-brand-800 rounded-sm w-fit group-hover:bg-brand-100 transition-colors">
                  <Mail className="w-5 h-5 text-accent-gold" />
                </div>
                <h4 className="font-sans text-xs font-bold text-brand-950 uppercase tracking-wider">
                  Email Address
                </h4>
                <p className="font-sans text-xs text-gray-500 font-light break-all">
                  {CONTACT_INFO.email}
                </p>
              </div>
              <span className="font-mono text-[9px] text-accent-gold group-hover:text-accent-gold-dark font-semibold uppercase tracking-widest mt-4 block">
                Write Email &rarr;
              </span>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="group bg-white p-6 rounded-lg border border-brand-500/5 shadow-xs flex flex-col justify-between hover:border-accent-gold/40 transition-all cursor-pointer pointer-events-auto"
            >
              <div className="space-y-2">
                <div className="p-3 bg-brand-50 text-brand-800 rounded-sm w-fit group-hover:bg-brand-100 transition-colors">
                  <Phone className="w-5 h-5 text-accent-gold" />
                </div>
                <h4 className="font-sans text-xs font-bold text-brand-950 uppercase tracking-wider">
                  Direct Line
                </h4>
                <p className="font-sans text-xs text-gray-500 font-light">
                  {CONTACT_INFO.phone}
                </p>
              </div>
              <span className="font-mono text-[9px] text-accent-gold group-hover:text-accent-gold-dark font-semibold uppercase tracking-widest mt-4 block">
                Call Direct &rarr;
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-lg border border-brand-500/5 shadow-xs flex flex-col justify-between hover:border-accent-gold/40 transition-all cursor-pointer pointer-events-auto"
            >
              <div className="space-y-2">
                <div className="p-3 bg-brand-50 text-brand-800 rounded-sm w-fit group-hover:bg-brand-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent-gold" />
                </div>
                <h4 className="font-sans text-xs font-bold text-brand-950 uppercase tracking-wider">
                  LinkedIn Connection
                </h4>
                <p className="font-sans text-xs text-gray-500 font-light">
                  Professional Network
                </p>
              </div>
              <span className="font-mono text-[9px] text-accent-gold group-hover:text-accent-gold-dark font-semibold uppercase tracking-widest mt-4 block">
                View Profile &rarr;
              </span>
            </a>

            {/* Location Card */}
            <div
              className="bg-white p-6 rounded-lg border border-brand-500/5 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="p-3 bg-brand-50 text-brand-800 rounded-sm w-fit">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                </div>
                <h4 className="font-sans text-xs font-bold text-brand-950 uppercase tracking-wider">
                  Location
                </h4>
                <p className="font-sans text-xs text-gray-500 font-light font-sans">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <span className="font-mono text-[9px] text-emerald-700 font-bold uppercase tracking-widest mt-4 block">
                Dhaka, Bangladesh
              </span>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
