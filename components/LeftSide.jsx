import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-5 text-primary">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Muhammedersln" target="_blank">
          <span
            className="w-10 h-10 text-xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
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
            className="w-10 h-10 text-xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
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
            className="w-10 h-10 text-xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
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
            className="w-10 h-10 text-xl bg- rounded-full inline-flex items-center justify-center hover:text-bodyColor hover:bg-primary  border border-primary cursor-pointer hover:-translate-y-2 transition-all duration-300
                "
          >
            <AiOutlineTwitter></AiOutlineTwitter>
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-primary"></div>
    </div>
  );
};

export default LeftSide;
