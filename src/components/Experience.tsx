import { motion } from "motion/react";
import { 
  Users, 
  Megaphone, 
  Calendar, 
  Newspaper, 
  FileEdit, 
  Award, 
  Sparkles 
} from "lucide-react";
import { LEADERSHIP_DATA } from "../data";

export default function Experience() {
  // Let's augment the roles with gorgeous qualitative metrics we can display
  const extraMetrics = [
    {
      impactHeader: "Promotion Wing Achievements",
      metrics: [
        { label: "Student Reach Increased", val: "+45%" },
        { label: "Events Engineered", val: "10+ Academic" },
        { label: "Inter-department Syncs", val: "100% Seamless" }
      ],
      icon: Users
    },
    {
      impactHeader: "Editorial Bulletin Metrics",
      metrics: [
        { label: "Publications Overseen", val: "Quarterly" },
        { label: "Faculty Contributors", val: "15+ Engaged" },
        { label: "Newsletter Audience", val: "1,200+ Readers" }
      ],
      icon: Newspaper
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative border-t border-brand-500/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-3xl text-left space-y-3 mb-16">
          <span className="font-mono text-xs text-accent-gold font-bold uppercase tracking-widest block">
            Impact & Influence
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-900">
            Leadership & Extracurriculars
          </h2>
          <p className="font-sans text-sm text-gray-500 font-light leading-relaxed">
            Demonstrated team management, organizational coordination, and public promotion experience, spearheading critical cross-functional academic campaigns inside of the Dhaka University ecosystem.
          </p>
        </div>

        {/* Dynamic Card Staggered Layout */}
        <div className="space-y-12">
          {LEADERSHIP_DATA.map((item, index) => {
            const metricsObj = extraMetrics[index];
            const IconComponent = index === 0 ? Megaphone : FileEdit;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-lg border border-brand-500/5 bg-brand-50/20 hover:bg-[#faf9f6]/40 transition-all duration-300 shadow-xs relative overflow-hidden"
              >
                {/* Decorative background visual */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/2 rounded-full blur-2xl pointer-events-none" />

                {/* Left block (Role and timeline info) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-800 text-accent-gold rounded-sm shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest block">
                        Timeline: {item.timeline}
                      </span>
                      <span className="font-sans text-xs bg-accent-gold/15 text-accent-gold-dark font-bold px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                        Active Leadership
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <h3 className="font-display text-lg font-bold text-brand-900 leading-snug">
                      {item.role}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-gray-600">
                      {item.organization}
                    </p>
                  </div>

                  {/* Dynamic Metrics display */}
                  {metricsObj && (
                    <div className="pt-4 border-t border-brand-500/5 space-y-3">
                      <div className="flex items-center gap-1.5 text-brand-900 font-sans text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                        <span>Core Leadership Metrics</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {metricsObj.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-white p-2 rounded-sm border border-brand-500/5 text-center shadow-2xs">
                            <span className="block font-sans text-sm font-bold text-brand-800">{m.val}</span>
                            <span className="block font-sans text-[8px] text-gray-400 leading-tight mt-0.5">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right block (Factual bullets & impact details) */}
                <div className="lg:col-span-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-brand-500/5 pt-6 lg:pt-0 lg:pl-10 text-left">
                  <h4 className="font-sans text-xs font-bold text-brand-800 uppercase tracking-widest mb-4">
                    Key Deliverables & Executive Actions
                  </h4>
                  <ul className="space-y-4">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-sm text-gray-600 font-light leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
