import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Contact = () => {
    return (
        <section id='iletişim' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className='font-titleFont text-lg text-secondary font-semibold flex items-center tracking-wide'>
                İletişim
            </p>
            <h2 className='font-titleFont text-5xl font-semibold text-primary'>Bana Ulaşın</h2>
            <p className='max-w-[600px] text-center text-third mt-4'>
                Yeni fırsatlar için her zaman açığım. İster bir soru sormak, ister merhaba demek isteyin, 
                size en kısa sürede dönüş yapacağım.
            </p>

            <div className='flex flex-col md:flex-row gap-8 mt-12'>
                {/* Email Card */}
                <motion.a 
                    href="mailto:muhammed.ersln@icloud.com"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='flex flex-col items-center justify-center p-8 rounded-lg bg-dark2 hover:bg-dark transition-colors duration-300 group'
                >
                    <AiOutlineMail className='text-4xl text-secondary group-hover:text-primary mb-4' />
                    <h3 className='text-primary font-semibold mb-2'>Email</h3>
                    <p className='text-third text-sm'>muhammed.ersln@icloud.com</p>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a 
                    href="https://www.linkedin.com/in/muhammed-eraslan-466049236/"
                    target="_blank"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='flex flex-col items-center justify-center p-8 rounded-lg bg-dark2 hover:bg-dark transition-colors duration-300 group'
                >
                    <AiOutlineLinkedin className='text-4xl text-secondary group-hover:text-primary mb-4' />
                    <h3 className='text-primary font-semibold mb-2'>LinkedIn</h3>
                    <p className='text-third text-sm'>Muhammed Eraslan</p>
                </motion.a>

                {/* GitHub Card */}
                <motion.a 
                    href="https://github.com/Muhammedersln"
                    target="_blank"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='flex flex-col items-center justify-center p-8 rounded-lg bg-dark2 hover:bg-dark transition-colors duration-300 group'
                >
                    <AiOutlineGithub className='text-4xl text-secondary group-hover:text-primary mb-4' />
                    <h3 className='text-primary font-semibold mb-2'>GitHub</h3>
                    <p className='text-third text-sm'>@Muhammedersln</p>
                </motion.a>
            </div>

            <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='mt-12'
            >
                <a href="mailto:muhammed.ersln@icloud.com">
                    <button className='px-8 py-4 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-bodyColor transition-colors duration-300 font-semibold tracking-wide'>
                        Mesaj Gönder
                    </button>
                </a>
            </motion.div>
        </section>
    )
}

export default Contact
