"use client";
import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';

const Stats = () => {
    const statsData = [
        "5+ E-Ticaret Sitesi",
        "3+ CRM Sistemi",
        "10+ Freelance Proje"
    ];

    return (
        <div className="w-full bg-white rounded-bento p-6 md:p-8 border border-slate-100 shadow-bentoShadow flex flex-col gap-5 transition-all hover:shadow-xl duration-500">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-third shadow-sm">
                    <HiOutlineLightBulb className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-primary tracking-tight">Proje Deneyimi</h3>
            </div>

            <div className="flex flex-col gap-3">
                {statsData.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-bold text-third group-hover:text-primary transition-colors">
                            {stat}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
