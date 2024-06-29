"use client";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="max-w-contentContainer mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
      id="anasayfa"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg  tracking-wide font-medium text-primary"
      >
        Merhaba, benim adım{" "}
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl text-primary lg:text-6xl font-semibold flex flex-col">
        Muhammed Eraslan
        <span className=" text-secondary mt-2 lg:mt-4">
          Yazılım Mühendisiyim.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-third font-medium"
      >
        Turgut Özal Üniversitesi Yazılım Mühendisliği bölümünden mezun oldum ve 23 yaşındayım. Python, React ve .NET dillerinde bilgiliyim ve bu alanlarda kendimi sürekli geliştirmeye çalışıyorum. Yazılım dünyasında yeni teknolojilerle projeler yapmayı ve bu süreçte kendimi geliştirmeyi seviyorum. Portföyümde yer alan projelere göz atabilirsiniz.
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onClick={(e) => handleScroll(e, "#projeler")}
        className="w-52 h-14 text-sm border border-primary rounded-md text-primary tracking-wide hover:bg-primary hover:text-bodyColor duration-300"
      >
        Projelerime Göz At.
      </motion.button>
    </section>
  );
};

export default Banner;
