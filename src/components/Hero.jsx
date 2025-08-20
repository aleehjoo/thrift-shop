import React from 'react'

const Hero = () => {
    return (
        <section className="relative w-full max-w-6xl mx-auto mt-6">
            <img
                src="/images/hero.jpg"
                alt="Hero"
                className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-xl">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to Clothing Co.</h1>
                <p className="mt-4 text-lg">Your style, your choice.</p>
            </div>
        </section>
    )
}

export default Hero
