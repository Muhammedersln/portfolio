"use client";
import React from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiGooglecloud, 
  SiDocker, 
  SiSupabase,
  SiTailwindcss,
  SiExpo,
  SiPostgresql,
  SiExpress
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-black bg-slate-50 border-slate-200" },
    { name: "React Native", icon: <SiReact />, color: "text-blue-500 bg-blue-50 border-blue-100" },
    { name: "Expo", icon: <SiExpo />, color: "text-slate-900 bg-slate-50 border-slate-200" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600 bg-blue-50 border-blue-100" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600 bg-green-50 border-green-100" },
    { name: "Express", icon: <SiExpress />, color: "text-slate-700 bg-slate-50 border-slate-200" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500 bg-blue-50 border-blue-100" },
    { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
    { name: "GCP", icon: <SiGooglecloud />, color: "text-red-500 bg-red-50 border-red-100" },
    { name: "Docker", icon: <SiDocker />, color: "text-blue-400 bg-blue-50 border-blue-100" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500 bg-cyan-50 border-cyan-100" }
  ];

  return (
    <div className="w-full h-full bg-white rounded-bento p-6 border border-slate-100 shadow-bentoShadow flex flex-col gap-5 transition-all hover:shadow-xl duration-500">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="text-[11px] font-bold text-third/40 uppercase tracking-[0.2em]">Yetenekler</h4>
          <span className="text-[10px] font-bold text-secondary bg-secondary/5 px-2 py-1 rounded-md">Stack</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-bold transition-all hover:scale-[1.02] active:scale-95 cursor-default ${skill.color}`}
            >
              <span className="text-base">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
