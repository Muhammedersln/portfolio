import React from 'react'
import SectionTitle from './SectionTitle'
import Image from "next/image";
import monster from "../public/assets/images/monster.png";
import futbolanaliz from "../public/assets/images/futbolanaliz.png";
import engapp from "../public/assets/images/engapp2.png";
import { TbBrandGithub } from 'react-icons/tb'

const Projects = () => {
    return (
        <section id='projeler' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title="Geliştirdiğim Projeler"></SectionTitle>
            <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
                {/* Proje 1 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group' href="https://english-apptest.vercel.app" target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-contain'
                                    src={engapp}
                                    alt="proje1"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='text-secondary text-sm tracking-wide'> Öne Çıkan Proje</p>
                            <h3 className='text-2xl font-bold text-primary'> İngilizce Sesli Asistan AI</h3>
                            <p className='bg-dark2 text-sm md:text-base p-2 md:p-6 rounded-md text-secondary'>
                                Bu proje <span className='text-primary'>Kişisel Gelişim</span> amacıyla geliştirdiğim bir projedir. İngilizce öğrenirken, kelime ve cümleleri daha iyi öğrenmek için geliştirdiğim bir projedir. Projede, kelime ve cümleleri sesli bir şekilde dinleyebilirsiniz. Ayrıca, kelime ve cümlelerin anlamlarını ve örnek cümlelerini görebilirsiniz. Projede, <span className='text-primary'>Yapay Zeka</span> modelini kullanarak geliştirdim. Projede, <span className='text-primary'>Speech Recognition</span> özelliğini kullandım. Tasarımı Tailwind Css ile yaptım.
                            </p>
                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-dark'>
                                <li>React</li>
                                <li>Yapay Zeka</li>
                                <li>Elevenlabs</li>
                                <li>OpenAI</li>
                                <li>TailwindCss</li>
                            </ul>
                            <div className='text-4xl flex gap-4'>
                                <a href="https://github.com/Muhammedersln/english-voice-assistant-React" target='_blank'>
                                    <TbBrandGithub className='text-secondary hover:text-primary duration-300'></TbBrandGithub>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Proje 2 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group' href="https://github.com/Muhammedersln/MonsterClone" target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-contain'
                                    src={monster}
                                    alt="proje1"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                            <p className='text-secondary text-sm tracking-wide'> Öne Çıkan Proje</p>
                            <h3 className='text-2xl font-bold text-primary'> Monster Clone Web Site</h3>
                            <p className='bg-dark2 text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md text-secondary'>
                                Bu proje <span className='text-primary'>Staj</span> dönemimde geliştirdiğim bir projedir. Monster firmasının websitesinin bir klonunu geliştirdim. Projeyi responsive bir şekilde geliştirdim. Next.js ile dinamik bir yapı oluşturdum. <span className='text-primary'>Server Side Render</span>ing özelliğini kullandım. Projede, veri çekme işlemlerini API üzerinden yaptım. Tasarımı Tailwind Css ile yaptım.
                            </p>
                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-dark'>
                                <li>Next.js</li>
                                <li>React.js</li>
                                <li>TailwindCSS</li>
                                <li>Server Side Render</li>
                                <li>API</li>
                            </ul>
                            <div className='text-4xl flex gap-4'>
                                <a href="https://github.com/Muhammedersln/Graduation-Project--Football-Analysis" target='_blank'>
                                    <TbBrandGithub className='text-secondary hover:text-primary duration-300'></TbBrandGithub>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Proje 3 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group' href="https://github.com/Muhammedersln/Graduation-Project--Football-Analysis" target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-contain'
                                    src={futbolanaliz}
                                    alt="proje1"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='text-secondary text-sm tracking-wide'> Öne Çıkan Proje</p>
                            <h3 className='text-2xl font-bold text-primary'> Yolo ile Futbol Analiz Uygulaması</h3>
                            <p className='bg-dark2 text-sm md:text-base p-2 md:p-6 rounded-md text-secondary'>
                                Bu proje <span className='text-primary'>Lisans Bitirme Tezim&apos;de</span> geliştirdiğim bir projedir. Yolo yapay zeka modelini kullanarak geliştirdim. Proje, bir futbol maçını analiz ederek, maç içerisindeki <span className='text-primary'>oyuncu, hakem ve topu</span> tespit eder. Bu tespitler sonucunda maçı analiz eder ve takımların topla oynama yüzdesini hesaplar. Ve bunu arayüzde gösterir.
                            </p>
                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-dark'>
                                <li>Python</li>
                                <li>YOLO</li>
                                <li>Görüntü İşleme</li>
                                <li>Yapay Zeka</li>
                                <li>UI</li>
                            </ul>
                            <div className='text-4xl flex gap-4'>
                                <a href="https://github.com/Muhammedersln/Graduation-Project--Football-Analysis" target='_blank'>
                                    <TbBrandGithub className='text-secondary hover:text-primary duration-300'></TbBrandGithub>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects
