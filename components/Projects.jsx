"use client";
import React from 'react';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
    return (
        <div className="w-full h-full bg-white rounded-bento p-8 md:p-10 border border-slate-100 shadow-bentoShadow flex flex-col gap-10 transition-all hover:shadow-xl duration-500">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold text-primary">Projeler</h3>
                    <p className="text-xs text-third font-medium">Geliştirilen profesyonel çözümler ve SaaS ürünleri</p>
                </div>
            </div>
            
            <div className="flex flex-col gap-2">
                {projectsData.map((project, index) => (
                    <div 
                        key={project.id} 
                        className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-[24px] border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-500 gap-6"
                    >
                        <div className="flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-3">
                                <h4 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                                    {project.title}
                                </h4>
                                {index < 3 && (
                                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-wider border border-blue-100">
                                        Elmalı Tech
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-third font-medium leading-relaxed max-w-[550px]">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="text-[9px] font-bold uppercase tracking-tight text-secondary/70 bg-secondary/5 px-2 py-0.5 rounded-md border border-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
