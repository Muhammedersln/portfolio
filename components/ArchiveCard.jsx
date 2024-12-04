import React from 'react'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { FaRegFolder } from 'react-icons/fa'
import { motion } from "framer-motion";

const ArchiveCard = ({title,des,listItems,link}) => {
    return (
        <motion.a 
            href={link} 
            target='_blank'
            whileHover={{ y: -5 }}
            className='block'
        >
            <div className='w-full h-80 rounded-xl bg-dark2 p-7 flex flex-col justify-between gap-6 
                group relative overflow-hidden border border-transparent
                hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 
                transition-all duration-300'>
                
                {/* Gradient overlay effect */}
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300' />

                {/* Header */}
                <div className='flex justify-between items-center relative z-10'>
                    <FaRegFolder className='text-4xl text-primary group-hover:text-secondary 
                        transform group-hover:scale-110 transition-all duration-300' />
                    <RxOpenInNewWindow className='text-4xl text-secondary/70 group-hover:text-primary 
                        transform group-hover:rotate-12 transition-all duration-300' />
                </div>

                {/* Content */}
                <div className='relative z-10'>
                    <h2 className='text-xl font-bold tracking-wide text-primary 
                        group-hover:text-secondary transition-colors duration-300
                        mb-3'>
                        {title}
                    </h2>
                    <p className='text-secondary/80 text-sm leading-relaxed 
                        group-hover:text-secondary transition-colors duration-300'>
                        {des}
                    </p>
                </div>

                {/* Technologies */}
                <ul className='flex flex-wrap items-center gap-2 relative z-10'>
                    {listItems.map((item,index) => (
                        <li 
                            key={index}
                            className='text-xs px-3 py-1.5 rounded-full
                            bg-dark3/50 text-secondary/70
                            hover:bg-dark3 hover:text-primary
                            transform hover:scale-105
                            transition-all duration-300'
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Hover border effect */}
                <div className='absolute inset-0 border border-primary/20 rounded-xl opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300' />
            </div>
        </motion.a>
    )
}

export default ArchiveCard
