import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import profileImg from "../public/assets/images/profilphoto.jpg";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React", ".NET", "C#", "Next.js", "AI", "Python"
  ];

  return (
    <section
      id="hakkımda"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Hakkımda" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lgl:w-2/3 text-base text-third font-medium flex flex-col gap-4"
        >
          <div className="bg-dark2 p-6 rounded-xl shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <p className="text-secondary/90 leading-relaxed">
              Merhaba, ben <span className="text-primary font-semibold">Muhammed Eraslan</span>. 
              23 yaşındayım. Turgut Özal Üniversitesi Yazılım Mühendisliği bölümünden 2024&apos;te mezun oldum. 
              Üniversite hayatım süresince <span className="text-primary">Java</span>, <span className="text-primary">Python</span>, 
              <span className="text-primary">C#</span> ve <span className="text-primary">.NET</span> dillerinde kendimi geliştirme fırsatı buldum. 
              Şu anda Python, React ve .NET dillerine hakimim ve bu alanda projeler geliştiriyorum. 
              Deneyim kazanmak ve kendimi daha da geliştirmek için yeni projeler yapmayı hedefliyorum.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <h3 className="text-primary font-semibold mb-4 text-lg">Teknolojiler & Yetenekler</h3>
            <ul className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-dark2 px-4 py-2 rounded-lg
                    hover:bg-dark3 transition-colors duration-300 group cursor-default"
                >
                  <span className="text-primary group-hover:rotate-[20deg] transition-transform duration-300">
                    <AiFillThunderbolt />
                  </span>
                  <span className="text-secondary group-hover:text-primary transition-colors duration-300">
                    {skill}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Foto */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lgl:w-1/3 h-80 relative group"
        >
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  className="rounded-lg h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-300"
                  src={profileImg}
                  alt="profileImg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-primary/10 rounded-lg 
                -top-4 -left-4 group-hover:top-0 group-hover:left-0 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
