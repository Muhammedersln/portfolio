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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            laudantium adipisci incidunt veritatis enim error molestiae quaerat.
            Necessitatibus, vitae. Repellendus beatae quos laboriosam temporibus
            omnis sed et molestias quas esse? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vero, aliquam consectetur corporis
            perspiciatis, tempore dolorem nemo necessitatibus ad ducimus tenetur
            atque ut harum sit et quasi incidunt aliquid placeat dolor!
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
              Python
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
              Java
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light">
                <AiFillThunderbolt />
              </span>
              .NET
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
