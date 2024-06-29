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
                    title="Unity RunController"
                    des="Unity oyun moturu ile geliştirdiğim Hyper Casual platform oyunu. Oyunun amacı, karakteri engellerden kaçırarak maksimum skor yapmaktır."
                    listItems={['Unity', 'C#', 'Blender']}
                    link="https://github.com/Muhammedersln/Unity-RunController"
                />
                <ArchiveCard
                    title="Mami Flix"
                    des="React.js  ile geliştirdiğim Netflix benzeri film ve dizi platformu. 
                    Tailwind Css ile tasarlanmıştır. API üzerinden veri çekilerek oluşturulmuştur."
                    listItems={['React', 'API', 'Next.js']}
                    link="https://github.com/Muhammedersln/MamiFlix"
                />
                <ArchiveCard
                    title="Java Scrum"
                    des="Java ile geliştirdiğim bu projede scrum, proje yönetimi ve takım yönetimi üzerine bir uygulama geliştirdim."
                    listItems={['Java', 'JavaFX', 'Mysql']}
                    link="https://github.com/Muhammedersln/javaMysql"
                />
                <ArchiveCard
                    title="Portfolio"
                    des="Bu portfolyo sitesi, React.js ve Tailwind Css ile geliştirilmiştir. Next.js ile SSR özelliği eklenmiştir. Şu an gördüğünüz site bu projedir."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://www.muhammederaslan.com"
                />
                <ArchiveCard
                    title="Hava Durumu"
                    des="Next.js ile geliştirdiğim bu projede hava durumu bilgilerini gösteren bir uygulama geliştirdim. Tasarımı Tailwind Css ile yapılmıştır."
                    listItems={['React', 'Tailwind', 'Next.js']}
                    link="https://weather-app-sooty-eta.vercel.app/"
                />
                <ArchiveCard
                    title="Github Arama Motoru"
                    des="Github üzerinde arama yaparak kullanıcıları ve repoları listeleyen bir uygulama. React.js ve Tailwind Css ile geliştirilmiştir."
                    listItems={['React', 'Next.js']}
                    link="https://github.com/Muhammedersln/Github-Search"
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
                                    title="Resim Arama Motoru"
                                    des="React.js ve Tailwind Css ile geliştirdiğim bu projede Unsplash API kullanarak resim arama motoru geliştirdim."
                                    listItems={['React', 'Tailwind', 'API']}
                                    link="https://github.com/Muhammedersln/ImageSearch-React"
                                />
                            </motion.div>
                            {/* <motion.div
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
                            </motion.div> */}
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
