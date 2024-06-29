import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <h2 className=' text-2xl font-semibold flex items-center text-primary'>
        {title}
      <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'></span>
    </h2>
  )
}

export default SectionTitle
