import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT&apos;S TIME TO</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Elevate Your Strength<span className='text-blue-400'> & Elevate Your Strength</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>To everyone who inspires and motivates us to reach our goals, your unwavering<span className='text-blue-400 font-medium'> support and encouragement</span> make all the difference in our journey to success. Your  <span className='text-blue-400 font-medium'>dedication, passion, and belief</span> in our potential drive us to push harder, strive for excellence, and overcome every obstacle in our path.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
