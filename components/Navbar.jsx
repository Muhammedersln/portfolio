"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full shadow-navbarShadow h-20 sticky top-0 z-50 bg-bodyColor px-4 text-third">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        {/* logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          LOGO
        </motion.div>
        {/* ETİKETLER */}
        <div className=" hidden md:flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            <Link
              href="#Anasayfa"
              className="flex items-center hover:text-secondary duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Ana Sayfa
              </motion.li>
            </Link>
            <Link
              href="#Hakkında"
              className="flex items-center hover:text-secondary duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Hakkında
              </motion.li>
            </Link>
            <Link
              href="#Projeler"
              className="flex items-center hover:text-secondary duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Projeler
              </motion.li>
            </Link>
            <Link
              href="#İletişim"
              className="flex items-center hover:text-secondary duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.7 }}
              >
                İletişim
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/cv.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.8 }}
              className="px-4 py-2 rounded-md text-secondary border border-secondary hover:bg-primary duration-300"
            >
              Özgeçmiş-CV
            </motion.button>
          </a>
        </div>
        {/* Small icon */}
        <div className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-primary cursor-pointer overflow-hidden group">
          <span className="w-full h-[3px] bg-primary inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[3px] bg-primary inline-flex transform translate-x-3  group-hover:translate-x-0 transition-all ease-in-out duration-300">

          </span>
          <span className="w-full h-[3px] bg-primary inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
