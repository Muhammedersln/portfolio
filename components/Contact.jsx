"use client";
import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { FaAppStoreIos } from 'react-icons/fa';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

const Contact = () => {
    return (
        <div className="w-full flex flex-col gap-6">
            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-4">
                <a 
                    href="https://www.linkedin.com/in/muhammed-eraslan-466049236/" 
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-[24px] bg-white border border-slate-100 hover:border-[#0077B5]/30 hover:bg-[#0077B5]/5 transition-all group shadow-bentoShadow"
                >
                    <AiOutlineLinkedin className="text-3xl text-[#0077B5] group-hover:scale-110 transition-transform" />
                </a>
                <a 
                    href="https://github.com/Muhammedersln" 
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-[24px] bg-white border border-slate-100 hover:border-black/30 hover:bg-black/5 transition-all group shadow-bentoShadow"
                >
                    <AiOutlineGithub className="text-3xl text-black group-hover:scale-110 transition-transform" />
                </a>
                <a 
                    href="https://www.instagram.com/muhammed.ersln" 
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-[24px] bg-white border border-slate-100 hover:border-[#E4405F]/30 hover:bg-[#E4405F]/5 transition-all group shadow-bentoShadow"
                >
                    <AiOutlineInstagram className="text-3xl text-[#E4405F] group-hover:scale-110 transition-transform" />
                </a>
            </div>

            {/* Mobile App Card */}
            <a 
                href="https://apps.apple.com/tr/app/aboniko-abonelik-takip/id6759045978" 
                target="_blank"
                className="w-full bg-[#1C1C1E] rounded-bento p-6 border border-white/10 shadow-xl flex items-center justify-between hover:scale-[1.02] transition-all group overflow-hidden relative"
            >
                <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 rounded-2xl bg-white text-black shadow-lg">
                        <FaAppStoreIos className="text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">App Store</span>
                        <span className="text-sm font-bold text-white">Aboniko &bull; Yayında</span>
                    </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-500/20 blur-2xl absolute -right-2 -top-2" />
                <div className="w-12 h-12 rounded-full bg-purple-500/20 blur-2xl absolute -left-2 -bottom-2" />
                <span className="text-xs font-bold text-white/20 group-hover:text-white/40 transition-colors">Yükle &rarr;</span>
            </a>

            {/* Eraslan Medya Card */}
            <a 
                href="https://www.eraslanmedya.com" 
                target="_blank"
                className="w-full bg-white rounded-bento p-6 border border-slate-100 shadow-bentoShadow flex items-center justify-between hover:border-secondary/20 hover:bg-slate-50 transition-all group relative overflow-hidden"
            >
                <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                        <HiOutlineGlobeAlt className="text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-third uppercase tracking-widest">Production</span>
                        <span className="text-sm font-bold text-primary">eraslanmedya.com</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 relative z-10">
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase tracking-wider">Live</span>
                    <span className="text-xs font-bold text-third group-hover:text-primary transition-colors">&rarr;</span>
                </div>
            </a>
        </div>
    );
};

export default Contact;
