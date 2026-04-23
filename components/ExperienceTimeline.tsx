import React from 'react';

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description?: string;
}

export const ExperienceTimeline: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      year: "2026",
      role: "Founder",
      company: "FundedAI & HeightX",
      description: "Building AI-powered analysis and utility tools."
    },
    {
      year: "2025 — Present",
      role: "Founder",
      company: "NinjaLabs",
      description: "Surgical-grade software and agency services."
    },
    {
      year: "2024 — 2025",
      role: "Founder",
      company: "ApexContractor",
      description: "Performance-driven agency operations."
    },
    {
      year: "2024 — 2025",
      role: "Founder",
      company: "Nexily & Kynnex",
      description: "Multi-venture digital product building."
    },
    {
      year: "2023 — 2024",
      role: "Founder",
      company: "HarshNodes",
      description: "Cloud hosting and infrastructure services."
    },
    {
      year: "2023 — 2024",
      role: "Founder",
      company: "RushMC",
      description: "Gaming community and Minecraft network."
    }
  ];

  return (
    <section id="work" className="w-[92%] max-w-[400px] mx-auto px-7 py-10 text-left bg-[#050505]/90 backdrop-blur-md border border-white/5 rounded-[24px] mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-baseline">
          <h2 className="text-[18px] font-bold text-white tracking-tight uppercase tracking-widest">Experience</h2>
          <div className="h-[1px] flex-grow mx-4 bg-white/10"></div>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="w-[85px] shrink-0 pt-1">
                <span className="text-[12px] font-medium text-white/30 group-hover:text-white/60 transition-colors">
                  {exp.year}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-bold text-white leading-tight">
                  {exp.role} <span className="text-white/40 font-normal">at</span> {exp.company}
                </h3>
                {exp.description && (
                  <p className="text-[13px] text-white/50 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
