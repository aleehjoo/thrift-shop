const HeroSection = () => {
    return (
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6
                            lg:flex-row lg:items-center lg:pl-80">

            <div className="bg-white w-48 h-72 sm:w-60 sm:h-96 lg:w-[338px] lg:h-[591px] overflow-hidden shadow-lg mt-10 lg:mt-20" />

            <div className="mt-8 lg:mt-0 lg:ml-24">
                <h1 className="font-urbanist text-4xl sm:text-6xl lg:text-[96px] font-normal leading-tight text-center lg:text-left">
                    Elevate <br /> your style
                </h1>
                <p className="text-base sm:text-lg lg:text-[32px] font-normal mt-6 lg:mt-8 text-center lg:text-left">
                    by giving pre-loved pieces a new chapter, where <br />
                    every thrifted find carries a story and every <br />
                    outfit becomes part of your own.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
