"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineLink, HiChevronDown } from 'react-icons/hi';

const References = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Projemax", url: "https://www.projemax.net/" },
        { name: "Fortis Film", url: "https://fortisfilm.com/" },
        { name: "Güzellik Salonu Demo", url: "https://eraslanguzelliksalonudemo.vercel.app/" },
        { name: "Avukatlık Demo", url: "https://eraslanavukatlikdemo.vercel.app/" },
        { name: "Hawali.co", url: "https://www.hawali.co/" },
        { name: "Luxury House Kuyumcu", url: "https://luxuryhousekuyumcu.com/" },
        { name: "Diyetisyen Demo", url: "https://xwebicadiyetisyen.vercel.app/" }
    ];

    return (
        <div className="w-full max-w-[1200px] mx-auto mt-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white rounded-bento p-6 border border-slate-100 shadow-bentoShadow flex items-center justify-between hover:bg-slate-50 transition-all group"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 text-third group-hover:bg-secondary group-hover:text-white transition-all">
                        <HiOutlineLink className="text-xl" />
                    </div>
                    <span className="text-lg font-bold text-primary tracking-tight">Referans Projeler</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <HiChevronDown className="text-2xl text-third" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-4 mt-4 p-4">
                            {links.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-between hover:border-secondary/20 hover:bg-secondary/5 transition-all group"
                                >
                                    <span className="text-sm font-bold text-third group-hover:text-primary transition-colors">
                                        {link.name}
                                    </span>
                                    <span className="text-xs text-third/40 group-hover:text-secondary transition-colors">&rarr;</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default References;
