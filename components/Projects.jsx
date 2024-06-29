import React from 'react'
import SectionTitle from './SectionTitle'
import Image from "next/image";
import deneme from "../public/assets/images/test_photo.jpg";
import { TbBrandGithub } from 'react-icons/tb'


const Projects = () => {
    return (
        <section id='projeler' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title="Geliştirdiğim Projeler"></SectionTitle>
            <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
                {/* Proje 1 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group' href="" target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-contain'
                                    src={deneme}
                                    alt="proje1"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='text-secondary text-sm tracking-wide'> Öne Çıkan Proje</p>
                            <h3 className='text-2xl font-bold text-primary'> Yolo ile Futbol Analiz</h3>
                            <p className='bg-dark2 text-sm md:text-base p-2 md:p-6 rounded-md text-secondary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque assumenda, odio alias quasi, delectus ut eos eaque corrupti non voluptas iusto aperiam. Numquam ad deserunt commodi, eveniet unde esse? <span className='text-light'>asdasdasdasd</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic.
                            </p>
                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-dark'>
                                <li>Deneme</li>
                                <li>Deneme</li>
                                <li>Deneme</li>
                                <li>Deneme</li>
                                <li>Deneme</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="https://github.com/Muhammedersln/Graduation-Project--Football-Analysis" target='_blank'>
                                    <TbBrandGithub className=' text-secondary hover:text-primary duration-300'></TbBrandGithub>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Proje 2 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group' href="" target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-contain'
                                    src={deneme}
                                    alt="proje1"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                            <p className='text-secondary text-sm tracking-wide'> Öne Çıkan Proje</p>
                            <h3 className='text-2xl font-bold text-primary'> Yolo ile Futbol Analiz</h3>
                            <p className='bg-dark2 text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md text-secondary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque assumenda, odio alias quasi, delectus ut eos eaque corrupti non voluptas iusto aperiam. Numquam ad deserunt commodi, eveniet unde esse? <span className='text-light'>asdasdasdasd</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic.
                            </p>
                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-dark'>
                                <li>Deneme</li>
                                <li>Deneme</li>
                                <li>Deneme</li>
                                <li>Deneme</li>
                                <li>Deneme</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="https://github.com/Muhammedersln/Graduation-Project--Football-Analysis" target='_blank'>
                                    <TbBrandGithub className=' text-secondary hover:text-primary duration-300'></TbBrandGithub>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Proje 3 */}
            </div>
        </section>
    )
}

export default Projects
