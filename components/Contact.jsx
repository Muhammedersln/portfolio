import React from 'react'

const Contact = () => {
    return (
        <section id='iletişim' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className='text-lg text-primary font-semibold flex items-center tracking-wide'>
                İletişim
            </p>
            <h2 className='text-5xl font-semibold text-secondary'> Bana Ulaş</h2>
            <p className='max-w-[600px] text-center text-third'>
                Benimle iletişime geçmek için aşağıdaki butona tıklayarak bana mail atabilirsiniz. Size en kısa sürede dönüş yapacağım.
            </p>
            <a href="mailto:muhammed.ersln@icloud.com">
                <button className='w-40 h-14 border font-semibold border-primary mt-6 text-sm text-primary tracking-wide rounded-md hover:bg-primary hover:text-bodyColor  duration-300'>Selam Ver</button>
                </a>
        </section>

    )
}

export default Contact
