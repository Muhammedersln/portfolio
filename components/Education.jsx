"use client";
import React from 'react';
import { HiOutlineAcademicCap } from 'react-icons/hi';

const Education = () => {
    return (
        <div className="w-full bg-white rounded-bento p-6 md:p-8 border border-slate-100 shadow-bentoShadow flex flex-col gap-6 transition-all hover:shadow-xl duration-500">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                    <HiOutlineAcademicCap className="text-2xl" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-primary tracking-tight">Education</h3>
                    <span className="text-xs font-bold text-third/40 uppercase tracking-widest">2020 - 2024</span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold text-primary leading-tight">
                    Bachelor&apos;s in Software Engineering
                </h4>
                <p className="text-sm font-medium text-third italic">
                    Malatya Turgut Özal University
                </p>
            </div>

            <div className="mt-auto">
                <span className="px-4 py-1.5 rounded-full bg-blue-50 text-secondary text-xs font-bold border border-blue-100">
                    GPA: 3.00
                </span>
            </div>
        </div>
    );
};

export default Education;
