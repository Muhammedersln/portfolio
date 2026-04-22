"use client";
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const EmailCard = () => {
    return (
        <a 
            href="mailto:muhammed.ersln@icloud.com" 
            className="w-full bg-white rounded-bento p-6 border border-slate-100 shadow-bentoShadow flex items-center gap-4 hover:border-secondary/20 hover:bg-secondary/5 transition-all group"
        >
            <div className="p-3 rounded-2xl bg-secondary text-white shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                <AiOutlineMail className="text-2xl" />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-bold text-third uppercase tracking-widest">Email</span>
                <span className="text-sm font-bold text-primary">muhammed.ersln@icloud.com</span>
            </div>
        </a>
    );
};

export default EmailCard;
