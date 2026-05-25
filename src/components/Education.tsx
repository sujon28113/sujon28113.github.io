import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, CheckCircle2, BookOpen, Layers } from "lucide-react";
import { EDUCATION_DATA } from "../data";

export default function Education() {
  const [selectedInst, setSelectedInst] = useState<number>(0);
  const [activeCourse, setActiveCourse] = useState<string>("Corporate Tax");

  // Descriptive definitions for coursework to display dynamically when clicked
  const courseworkDetails: Record<string, { desc: string; focus: string[] }> = {
    "Corporate Tax": {
      desc: "Comprehensive study of Bangladesh Income Tax Act and VAT regulations. Includes calculating corporate tax liabilities, deferred tax assets, and regulatory filing procedures.",
      focus: ["Tax Bracket Structuring", "VAT Assessment", "Deferred Tax Assets", "Regulatory Filings"]
    },
    "Financial Accounting": {
      desc: "Advanced ledger management, synthesis of multi-layered balance sheets, income statements, and cash flows complying with global IFRS & IAS guidelines.",
      focus: ["Ledger Synthesis", "IFRS Compliance", "Financial Disclosures", "Cash Flow Reconciliation"]
    },
    "Cost Accounting": {
      desc: "Strategic cost estimation models, overhead assignment, process costing, variance analysis, and target profit simulation mechanics in diverse business markets.",
      focus: ["Marginal Costing", "Variance Metrics", "Process Allocations", "Overhead Optimization"]
    },
    "Auditing": {
      desc: "Formulating systematic audit tracks, calculating materiality assessments, gathering transactional evidence, and compiling standard analytical audit opinions in line with ISA.",
      focus: ["Materiality Computations", "Internal Controls Testing", "Risk Assessments", "Auditor Reporting"]
    },
    "Management Accounting": {
      desc: "Developing structural budget plans, forecasting models, and financial indicators to guide long-term strategic executive operational choices.",
      focus: ["Performance Trackers", "Capital Budgeting", "Sensitivity Estimations", "Pricing Formulas"]
    }
  };

  return (
    <section id="education" className="py-24 bg-brand-50/50 relative border-t border-brand-500/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="space-y-2 text-left">
            <span className="font-mono text-xs text-accent-gold font-bold uppercase tracking-widest block">
              Academic Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-900">
              Education & Professional Levels
            </h2>
          </div>
        </div>

        {/* Modular Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Institution Selector Buttons Column */}
          <div className="lg:col-span-5 space-y-4">
            {EDUCATION_DATA.map((item, idx) => {
              const isActive = selectedInst === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedInst(idx);
                    // Reset to first coursework if DU is selected
                    if (idx === 0) {
                      setActiveCourse("Corporate Tax");
                    }
                  }}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 flex items-start gap-4 pointer-events-auto cursor-pointer ${
                    isActive
                      ? "bg-white border-l-4 border-accent-gold shadow-md"
                      : "bg-[#faf9f6]/40 hover:bg-white border-l-4 border-transparent hover:border-brand-200"
                  }`}
                >
                  <div className={`p-3 rounded-sm ${isActive ? "bg-brand-100 text-brand-800" : "bg-gray-100 text-gray-400"}`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-accent-gold font-bold tracking-wider uppercase">
                      {item.timeline}
                    </span>
                    <h3 className="font-display text-base font-bold text-brand-900">
                      {item.institution}
                    </h3>
                    <p className="font-sans text-xs text-gray-600 leading-normal">
                      {item.degree}
                    </p>
                    {item.ratingValue && (
                      <span className="inline-block mt-2 font-mono text-[9px] bg-brand-100 text-brand-800 font-bold px-2 py-0.5 rounded-sm">
                        {item.ratingValue}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details & Interactive Showcase Panel */}
          <div className="lg:col-span-7 bg-white border border-brand-500/5 p-8 rounded-lg shadow-sm text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedInst}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Institution Heading */}
                <div className="border-b border-brand-100 pb-4">
                  <h4 className="font-display text-lg font-bold text-brand-900">
                    {EDUCATION_DATA[selectedInst].institution}
                  </h4>
                  <p className="font-mono text-xs text-accent-gold tracking-widest uppercase mt-1">
                    {EDUCATION_DATA[selectedInst].degree} — {EDUCATION_DATA[selectedInst].timeline}
                  </p>
                </div>

                {/* Bullets Detail */}
                <ul className="space-y-3">
                  {EDUCATION_DATA[selectedInst].details.map((bullet, index) => (
                    <li key={index} className="flex gap-3 items-start text-sm text-gray-600 font-light">
                      <CheckCircle2 className="w-4.5 h-4.5 text-accent-gold shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Conditional Coursework Interactive Panel */}
                {EDUCATION_DATA[selectedInst].coursework && (
                  <div className="pt-6 border-t border-brand-100 space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-800" />
                      <h5 className="font-sans text-xs font-bold text-brand-900 tracking-wider uppercase">
                        Specially Studied Domains (Click to inspect)
                      </h5>
                    </div>
                    
                    {/* Coursework pill buttons */}
                    <div className="flex flex-wrap gap-2">
                      {EDUCATION_DATA[selectedInst].coursework?.map((course) => {
                        const isCourseActive = activeCourse === course;
                        return (
                          <button
                            key={course}
                            onClick={() => setActiveCourse(course)}
                            className={`font-sans text-xs px-3 py-1.5 rounded-sm transition-all pointer-events-auto cursor-pointer ${
                              isCourseActive
                                ? "bg-brand-800 text-white font-semibold shadow-xs"
                                : "bg-brand-50 hover:bg-brand-100 text-brand-800"
                            }`}
                          >
                            {course}
                          </button>
                        );
                      })}
                    </div>

                    {/* Interactive Course detail presentation card */}
                    {activeCourse && courseworkDetails[activeCourse] && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-brand-50/40 p-5 border border-brand-500/5 rounded-sm space-y-3"
                      >
                        <h6 className="font-display text-sm font-bold text-brand-950">
                          {activeCourse}
                        </h6>
                        <p className="font-sans text-xs text-gray-600 leading-relaxed font-light">
                          {courseworkDetails[activeCourse].desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="font-mono text-[9px] font-bold text-gray-400 mr-1 mt-1 uppercase">Key focuses:</span>
                          {courseworkDetails[activeCourse].focus.map((item, idx) => (
                            <span key={idx} className="font-mono text-[9px] bg-white text-accent-gold-dark border border-accent-gold/20 px-2 py-0.5 rounded-xs font-semibold">
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Static ICAB Special Info Card */}
                {selectedInst === 1 && (
                  <div className="pt-6 border-t border-brand-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#faf9f6] p-4 border border-brand-100 rounded-sm">
                      <span className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">Regulatory Framework</span>
                      <p className="font-sans text-xs text-brand-900 font-semibold mt-1">International Standards (IAS/IFRS)</p>
                      <p className="font-sans text-[11px] text-gray-500 mt-1">Broad comprehension of standards adopted under ICAB.</p>
                    </div>
                    <div className="bg-[#faf9f6] p-4 border border-brand-100 rounded-sm">
                      <span className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">Professional Ethics</span>
                      <p className="font-sans text-xs text-brand-900 font-semibold mt-1">IESBA Code compliance</p>
                      <p className="font-sans text-[11px] text-gray-500 mt-1">Focusing on confidentiality, independence, and objectivity.</p>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
