import { ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-100 py-16 border-t-8 border-accent-gold text-left">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12 border-b border-white/10 pb-12">
          
          {/* Col 1 Brand Statement */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onScrollTo("hero")}
              className="flex items-center gap-2 group focus:outline-none pointer-events-auto cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-[#f0ecd1] text-[#0f2230] font-mono text-xs font-semibold rounded-xs">
                SS
              </div>
              <span className="font-sans text-sm font-bold tracking-widest text-[#f5f8fa] group-hover:text-accent-gold transition-colors">
                Sujon Shikder
              </span>
            </button>
            <p className="font-sans text-xs text-brand-200/80 leading-relaxed font-light max-w-sm">
              Applying the professional standards of operational reporting, tax structures, and business analysis to drive clear financial growth.
            </p>
          </div>

          {/* Col 2 Quick Scroll Links */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-mono text-[9px] text-[#c29e5a] uppercase tracking-widest font-bold">
              Directory Slices
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {["Profile", "Education", "Leadership", "Skills", "Contact"].map((label) => {
                const sectionId = label.toLowerCase() === "profile" ? "hero" : label.toLowerCase();
                return (
                  <button
                    key={label}
                    onClick={() => onScrollTo(sectionId)}
                    className="text-left text-brand-200 hover:text-[#c29e5a] transition-colors font-light pointer-events-auto cursor-pointer"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Col 3 Integrity credentials */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h5 className="font-mono text-[9px] text-[#c29e5a] uppercase tracking-widest font-bold">
              Guiding Standard Codes
            </h5>
            <ul className="space-y-1.5 font-mono text-[9px] text-brand-200/75">
              <li>• IFRS (Intl. Financial Reporting)</li>
              <li>• IAS (Intl. Accounting Standards)</li>
              <li>• ISA (Intl. Standards on Auditing)</li>
              <li>• Bangladesh Tax & VAT Codes</li>
            </ul>
          </div>

        </div>

        {/* Lower footer copyright info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-brand-200/50">
          <div>
            &copy; {currentYear} Md. Sujon Shikder. Engineered utilizing React 19, Tailwind CSS, & Framer Motion.
          </div>
          <button
            onClick={() => onScrollTo("hero")}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-[#f5f8fa] py-2 px-4 rounded-sm border border-white/10 transition-all pointer-events-auto cursor-pointer"
          >
            Scroll to Top
            <ArrowUp className="w-4 h-4 text-accent-gold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
