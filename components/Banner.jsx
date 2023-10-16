"use client";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
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
        className="text-4xl lg:text-6xl font-semibold flex flex-col"
      >
        Muhammed Eraslan.{" "}
        <span className=" text-secondary mt-2 lg:mt-4">
          Web için geliştirme yapıyorum.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-third font-medium"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero in
        aliquid, voluptatum corrupti consequuntur doloribus beatae consectetur
        nam autem a quae omnis porro dolorum recusandae maiores. Vel, voluptate
        adipisci.
        <a href="#">
          <span className="text-primary inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Daha fazla
            <span className="absolute w-full h-[1px] bg-primary left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm border border-primary rounded-md text-primary tracking-wide hover:bg-primary hover:text-bodyColor duration-300"
      >
        Projelerime Göz At.
      </motion.button>
    </section>
  );
};

export default Banner;
