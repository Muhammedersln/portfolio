import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import profileImg from "../public/assets/images/profilphoto.jpg";

const About = () => {
  return (
    <section
      id="hakkımda"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Hakkımda" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-third font-medium flex flex-col gap-4">
          <p>
            Merhaba, ben Muhammed Eraslan. 23 yaşındayım. Turgut Özal Üniversitesi Yazılım Mühendisliği bölümünden 2024&apos;te mezun oldum. Üniversite hayatım süresince Java, Python, C# ve .NET dillerinde kendimi geliştirme fırsatı buldum. Şu anda Python, React ve .NET dillerine hakimim ve bu alanda projeler geliştiriyorum. Deneyim kazanmak ve kendimi daha da geliştirmek için yeni projeler yapmayı hedefliyorum.
          </p>
          <ul className="max-w-[450px] text-sm font-normal grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-light">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light">
                <AiFillThunderbolt />
              </span>
              .NET
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light">
                <AiFillThunderbolt />
              </span>
              C#
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light">
                <AiFillThunderbolt />
              </span>
              AI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
          </ul>
        </div>
        {/* foto */}
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-secondary/20 rounded-md top-0 left-0 hover:bg-transparent duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
