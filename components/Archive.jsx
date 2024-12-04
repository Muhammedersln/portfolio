"use client";
import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion";
import { archiveData } from '@/data/archiveData'

const Archive = () => {
    const [show, setShow] = useState(false)

    // Görünür projeleri filtrele
    const visibleProjects = archiveData.filter(project => !project.isHidden);
    // Gizli projeleri filtrele
    const hiddenProjects = archiveData.filter(project => project.isHidden);

    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-semibold text-primary'>Diğer Projeler</h2>
                <p className='text-sm text-secondary'>arşive göz at</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                {/* Görünür projeler */}
                {visibleProjects.map((project) => (
                    <ArchiveCard
                        key={project.id}
                        title={project.title}
                        des={project.description}
                        listItems={project.technologies}
                        link={project.link}
                    />
                ))}

                {/* Gizli projeler */}
                {show && (
                    <>
                        {hiddenProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                <ArchiveCard
                                    title={project.title}
                                    des={project.description}
                                    listItems={project.technologies}
                                    link={project.link}
                                />
                            </motion.div>
                        ))}
                    </>
                )}
            </div>
            <div className='mt-12 flex items-center justify-center'>
                {show ? (
                    <button 
                        onClick={() => setShow(false)}
                        className='w-36 h-12 rounded-md text-primary text-[13px] border border-primary hover:bg-dark2 duration-300'
                    >
                        Daha Az
                    </button>
                ) : (
                    <button 
                        onClick={() => setShow(true)}
                        className='w-36 h-12 rounded-md text-primary text-[13px] border border-primary hover:bg-dark2 duration-300'
                    >
                        Daha Fazla
                    </button>
                )}
            </div>
        </div>
    )
}

export default Archive
