import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
    return (
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
    )
}

export default Footer
