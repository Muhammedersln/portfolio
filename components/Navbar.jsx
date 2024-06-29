"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";

import { MdOutlineClose } from 'react-icons/md'
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Navbar = () => {

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full shadow-navbarShadow h-20 sticky top-0 z-50 bg-bodyColor px-4 text-primary font-bold">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        {/* logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image src={logo} alt="Logo" width={170}/>
        </motion.div>
        {/* ETİKETLER */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            <li
              onClick={(e) => handleScroll(e, "#anasayfa")}
              className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Ana Sayfa
              </motion.div>
            </li>
            <li
              onClick={(e) => handleScroll(e, "#hakkımda")}
              className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Hakkımda
              </motion.div>
            </li>
            <li
              onClick={(e) => handleScroll(e, "#projeler")}
              className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Projeler
              </motion.div>
            </li>
            <li
              onClick={(e) => handleScroll(e, "#iletişim")}
              className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.7 }}
              >
                İletişim
              </motion.div>
            </li>
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
        <div onClick={() => setShowMenu(true)} className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-primary cursor-pointer overflow-hidden group">
          <span className="w-full h-[3px] bg-primary inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[3px] bg-primary inline-flex transform translate-x-3  group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[3px] bg-primary inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (

          <div
            className="absolute mdl:hidden  top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              onClick={() => setShowMenu(false)}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-bodyColor flex flex-col items-center px-4 py-10  relative"
            >

              <MdOutlineClose onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-4xl text-primary cursor-pointer hover:text-secondary" />
              <div className="my-20 flex flex-col">
                {/* Menüler */}
                <div className=" flex flex-col mt-0 items-center gap-7">
                  <ul className="flex flex-col text-[15px] gap-7">
                    <li
                      onClick={(e) => handleScroll(e, "#anasayfa")}
                      className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                      >
                        Ana Sayfa
                      </motion.div>
                    </li>
                    <li
                      onClick={(e) => handleScroll(e, "#hakkımda")}
                      className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.3 }}
                      >
                        Hakkımda
                      </motion.div>
                    </li>
                    <li
                      onClick={(e) => handleScroll(e, "#projeler")}
                      className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.5 }}
                      >
                        Projeler
                      </motion.div>
                    </li>
                    <li
                      onClick={(e) => handleScroll(e, "#iletişim")}
                      className="flex items-center hover:text-secondary duration-300 nav-link cursor-pointer"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.7 }}
                      >
                        İletişim
                      </motion.div>
                    </li>
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
                  <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4 text-primary'>
                    <a href="https://github.com/Muhammedersln" target="_blank">
                      <span
                        className="w-10 h-10 text-2xl rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary border-[1px] border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineGithub></AiOutlineGithub>
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammed-eraslan-466049236/"
                      target="_blank"
                    >
                      <span
                        className="w-10 h-10 text-2xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineLinkedin></AiOutlineLinkedin>
                      </span>
                    </a>{" "}
                    <a
                      href="https://www.instagram.com/muhammed.ersln"
                      target="_blank"
                    >
                      <span
                        className="w-10 h-10 text-2xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineInstagram></AiOutlineInstagram>
                      </span>
                    </a>
                    <a
                      href="https://www.twitter.com/memedow00"
                      target="_blank"
                    >
                      <span
                        className="w-10 h-10 text-2xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineTwitter></AiOutlineTwitter>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  {/* İkonlar */}
                  <motion.div initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 1 }} className='flex  items-center justify-center w-full py-6 gap-5 text-primary'>
                    <a href="https://github.com/Muhammedersln" target="_blank">
                      <span
                        className="w-10 h-10 text-2xl rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary border-[1px] border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineGithub></AiOutlineGithub>
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammed-eraslan-466049236/"
                      target="_blank"
                    >
                      <span
                        className="w-10 h-10 text-2xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineLinkedin></AiOutlineLinkedin>
                      </span>
                    </a>{" "}
                    <a
                      href="https://www.instagram.com/muhammed.ersln"
                      target="_blank"
                    >
                      <span
                        className="w-10 h-10 text-2xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineInstagram></AiOutlineInstagram>
                      </span>
                    </a>
                    <a
                      href="https://www.twitter.com/memedow00"
                      target="_blank"
                    >
                      <span
                        className="w-10 h-10 text-2xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
                      >
                        <AiOutlineTwitter></AiOutlineTwitter>
                      </span>
                    </a>
                  </motion.div>
                  <motion.a className="text-sm w-72 tracking-widest text-primary text-center mt-4 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeIn" ,delay: 1.1}}
                    href="mailto:muhammed.ersln@icloud.com"
                  >
                    <p>muhammed.ersln@icloud.com</p>

                  </motion.a>
                </div>

              </div>
            </motion.div>

          </div>

        )}
      </div>
    </nav>
  );
};

export default Navbar;
