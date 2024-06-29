import React from 'react'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { FaRegFolder } from 'react-icons/fa'

const ArchiveCard = ({title,des,listItems,link}) => {
    return (
        <a href={link} target='_blank'>
            <div className='w-full h-80 rounded-lg bg-dark2 p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
                <div className='flex justify-between items-center'>
                    <FaRegFolder className='text-4xl text-primary group-hover:text-secondary' />
                    <RxOpenInNewWindow className='text-4xl hover:text-secondary' />
                </div>
                <div>
                    <h2 className='text-xl font-semibold tracking-wide text-primary group-hover:text-secondary'>{title}</h2>
                    <p className='text-third text-sm mt-3'>{des}</p>
                </div>
                <ul className='text-xs mdl:text-sm text-dark flex items-center gap-1 justify-between flex-wrap'>
                    {listItems.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div></a>
    )
}

export default ArchiveCard
