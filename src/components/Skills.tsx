import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BarChart3, 
  Settings, 
  Sparkles, 
  Check, 
  ChevronRight, 
  Layers, 
  Terminal 
} from "lucide-react";
import { SKILL_CATEGORIES, SOFT_SKILLS } from "../data";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");
  
  const categoriesList = ["All", "Accounting & Compliance", "Data & Analytics", "Professional Tools", "Soft Skills"];

  return (
    <section id="skills" className="py-24 bg-brand-50/50 relative border-t border-brand-500/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2 text-left">
            <span className="font-mono text-xs text-accent-gold font-bold uppercase tracking-widest block">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-900">
              Technical & Professional Armament
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-500 max-w-sm text-left font-light leading-relaxed">
            Blending strict financial accounting ledger standards with intermediate data structures, and professional productivity tools.
          </p>
        </div>

        {/* Tab Selector Links */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-brand-500/10 pb-4">
          {categoriesList.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-xs tracking-wider font-semibold py-2 px-4 rounded-sm transition-all pointer-events-auto cursor-pointer ${
                activeTab === tab
                  ? "bg-brand-800 text-white shadow-xs"
                  : "bg-white/40 hover:bg-white text-brand-800/80 hover:text-brand-900 border border-brand-500/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {/* Standard technical categories */}
              {SKILL_CATEGORIES.map((cat) => {
                if (activeTab !== "All" && cat.categoryName !== activeTab && activeTab !== "Soft Skills") return null;
                
                return cat.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-white p-5 rounded-lg border border-brand-500/5 shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-sans text-sm font-bold text-brand-900 leading-tight">
                          {skill.name}
                        </h4>
                        <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm ${
                          skill.level === "Proficient" ? "bg-emerald-50 text-emerald-700" :
                          skill.level === "Intermediate" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Visual progress bar representation of mastery */}
                    <div className="mt-4 pt-4 border-t border-brand-500/5">
                      <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-1">
                        <span>Confidence Metric</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-brand-50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                          className="h-full bg-accent-gold"
                        />
                      </div>
                    </div>
                  </div>
                ));
              })}

              {/* Interactive Soft skills display */}
              {(activeTab === "All" || activeTab === "Soft Skills") && (
                <>
                  {SOFT_SKILLS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-brand-800 text-white p-6 rounded-lg border border-brand-500/10 shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent-gold" />
                          <h4 className="font-display text-sm font-bold text-white tracking-wide">
                            {item.skill}
                          </h4>
                        </div>
                        <p className="font-sans text-xs text-brand-100/90 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="font-mono text-[9px] text-accent-gold font-semibold uppercase tracking-widest">
                          Factual Bullet Asset
                        </span>
                        <span className="font-sans text-[10px] text-emerald-400 font-medium">
                          Verified Impact
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
