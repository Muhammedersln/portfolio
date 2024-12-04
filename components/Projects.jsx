import React from 'react'
import SectionTitle from './SectionTitle'
import Image from "next/image";
import { TbBrandGithub } from 'react-icons/tb'
import { projectsData } from '@/data/projectsData'

const Projects = () => {
    return (
        <section id='projeler' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title="Geliştirdiğim Projeler" />
            <div className='w-full flex flex-col items-center justify-between gap-40 mt-10'>
                {projectsData.map((project, index) => (
                    <div key={project.id} className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                        <div className={`flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} gap-6 hover:transform hover:scale-[1.02] transition-transform duration-300 ease-in-out`}>
                            <a className='w-full xl:w-1/2 h-auto relative group' href={project.projectUrl} target='_blank'>
                                <div className="relative">
                                    <Image
                                        className='w-full h-full object-contain rounded-xl'
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                </div>
                            </a>
                            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                                <p className='text-secondary text-sm tracking-wide font-medium uppercase'>Öne Çıkan Proje</p>
                                <h3 className='text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300'>{project.title}</h3>
                                <p className='bg-dark2 text-sm md:text-base p-4 md:p-6 rounded-xl text-secondary leading-relaxed shadow-lg'>
                                    {project.description}
                                </p>
                                <ul className='flex flex-wrap gap-3 md:gap-4'>
                                    {project.technologies.map((tech) => (
                                        <li key={tech} className='bg-dark2 px-3 py-1 rounded-full text-xs text-secondary hover:text-primary hover:bg-dark3 transition-colors duration-300'>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <div className='text-4xl flex gap-4'>
                                    <a href={project.githubUrl} target='_blank'>
                                        <TbBrandGithub className='text-secondary hover:text-primary duration-300' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
