"use client";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Stats from "@/components/Stats";
import EmailCard from "@/components/EmailCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bodyColor text-primary p-4 md:p-8 lgl:p-12 font-bodyFont">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        
        {/* Top Section: Hero & Stack/Email */}
        <div className="grid grid-cols-1 lgl:grid-cols-3 gap-6 items-stretch">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lgl:col-span-2"
          >
            <Banner />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="flex-1">
              <About />
            </div>
            <EmailCard />
          </motion.div>
        </div>

        {/* Middle Section: Projects & Right Side Info */}
        <div className="grid grid-cols-1 lgl:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lgl:col-span-2"
          >
            <Projects />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <Contact />
            <Archive />
            <Education />
            <Stats />
          </motion.div>
        </div>

        {/* Bottom Section: Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
