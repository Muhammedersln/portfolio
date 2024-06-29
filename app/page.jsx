"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="w-full h-screen bg-bodyColor overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-dark2/20 scrollbar-thumb-dark ">
      <Navbar></Navbar>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        {/* SolTaraf */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full left-0 fixed bottom-0"
        >
          <LeftSide></LeftSide>
        </motion.div>
        {/* orta */}
        <div className=" h-[88vh] w-full mx-auto p-4">
          <Banner/>
          <About/>
          <Projects/>
          <Archive/>
          <Contact/>
          <Footer/>
          
        </div>
        {/* SağTaraf */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide></RightSide>
        </motion.div>
      </div>
    </div>
  );
}
