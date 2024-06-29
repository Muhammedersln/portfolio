"use client";
import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion";


const Archive = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-semibold text-primary'>Diğer Projeler</h2>
                <p className='text-sm text-secondary'>arşive göz at</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard
                    title="Proje adı"
                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://www.google.com"
                />
                <ArchiveCard
                    title="Proje adı"
                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://www.google.com"
                />
                <ArchiveCard
                    title="Proje adı"
                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://www.google.com"
                />
                <ArchiveCard
                    title="Proje adı"
                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://www.google.com"
                />
                <ArchiveCard
                    title="Proje adı"
                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://www.google.com"
                />
                <ArchiveCard
                    title="Proje adı"
                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://www.google.com"
                />
                {
                    show && (
                        < >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                <ArchiveCard
                                    title="Proje adı"
                                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                                    listItems={['React', 'Tailwind', 'Next.js']}
                                    link="https://www.google.com"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                <ArchiveCard
                                    title="Proje adı"
                                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                                    listItems={['React', 'Tailwind', 'Next.js']}
                                    link="https://www.google.com"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                <ArchiveCard
                                    title="Proje adı"
                                    des="Proje açıklaması lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                                    listItems={['React', 'Tailwind', 'Next.js']}
                                    link="https://www.google.com"
                                />
                            </motion.div>
                        </>
                    )
                }
            </div>
            <div className='mt-12 flex items-center justify-center'>
                {show ? <button onClick={() => setShow(false)}
                    className='w-36 h-12 rounded-md text-primary text-[13px] border border-primary hover:bg-dark2 duration-300'>
                    Daha Az
                </button> : <button onClick={() => setShow(true)}
                    className='w-36 h-12 rounded-md text-primary text-[13px] border border-primary hover:bg-dark2 duration-300'>
                    Daha Fazla
                </button>}
            </div>
        </div>
    )
}

export default Archive
