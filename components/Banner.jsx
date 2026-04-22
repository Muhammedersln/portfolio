"use client";
import React from "react";
import Image from "next/image";
import profileImg from "../public/assets/images/profilphoto.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full h-full bg-white rounded-bento p-8 md:p-12 border border-slate-100 shadow-bentoShadow flex flex-col justify-center gap-8 group relative overflow-hidden transition-all hover:shadow-xl duration-500">
      
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-[10px] px-3 py-1 bg-secondary/5 rounded-full border border-secondary/10 inline-block">
              Full Stack Developer
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight"
          >
            Muhammed <br />
            <span className="text-secondary">Eraslan</span>
          </motion.h1>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-slate-50 shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 hover:rotate-3">
            <Image 
              src={profileImg} 
              alt="Muhammed Eraslan" 
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg text-third max-w-[550px] leading-relaxed font-medium"
      >
        Next.js, React Native ve Cloud teknolojileriyle ölçeklenebilir dijital ürünler inşa ediyorum. Teknik altyapıyı kuran ve ürünün büyümesine katkı sağlayan bir geliştiriciyim.
      </motion.p>
      
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-4 pt-4 border-t border-slate-50"
      >
        <div className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </div>
        <span className="text-xs font-bold text-third uppercase tracking-wider">İstanbul, Türkiye &bull; Yeni fırsatlara açık</span>
      </motion.div>
    </div>
  );
};

export default Banner;
