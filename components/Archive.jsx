"use client";
import React from 'react';
import { HiOutlineBriefcase } from 'react-icons/hi';

const Archive = () => {
    const experiences = [
        {
            company: "Elmalı Tech",
            role: "Full Stack Developer",
            date: "01/2025 - 04/2026",
        },
        {
            company: "Monster Notebook",
            role: "Software Intern",
            date: "07/2023 - 08/2023",
        }
    ];

    return (
        <div className="w-full bg-white rounded-bento p-6 md:p-8 border border-slate-100 shadow-bentoShadow flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-third shadow-sm">
                    <HiOutlineBriefcase className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-primary tracking-tight">Deneyim</h3>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-6 relative before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-50">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 relative">
                        {/* Dot */}
                        <div className="z-10 w-5 h-5 rounded-full border-[3px] border-white shadow-sm mt-1 shrink-0 bg-slate-200" />
                        
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-primary leading-tight">
                                {exp.company}
                            </h4>
                            <p className="text-xs font-medium text-third italic">
                                {exp.role}
                            </p>
                            <p className="text-[10px] font-bold text-third/40 uppercase tracking-widest mt-1">
                                {exp.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-third/40 uppercase tracking-widest">Tecrübe</span>
                <span className="text-sm font-bold text-secondary">2+ Yıl</span>
            </div>
        </div>
    );
};

export default Archive;
