import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="min-h-screen text-[white] flex flex-col items-center justify-center px-6
                        pt-24 lg:flex-row lg:items-center lg:pl-80 lg:pt-0">

            <div className="bg-white w-48 h-72 sm:w-60 sm:h-96 lg:w-[338px] lg:h-[591px] overflow-hidden shadow-lg mt-10 lg:mt-20" />

            <div className="mt-8 lg:mt-0 lg:ml-24">
                <h1 className="font-urbanist text-4xl sm:text-6xl lg:text-[96px] leading-tight text-center lg:text-left">
                    Elevate <br /> your style
                </h1>

                <div className="mt-6 lg:mt-8 flex flex-col">
                    <p className="text-base sm:text-lg lg:text-[32px] text-center lg:text-left">
                        by giving pre-loved pieces a new chapter, where <br />
                        every thrifted find carries a story and every <br />
                        outfit becomes part of your own.
                    </p>

                    <Link to="/product-sample" className="self-center lg:self-start">
                        <button
                            className="flex items-center justify-between gap-3 bg-white text-black py-3 px-6 mt-8 lg:mt-12 rounded-md hover:opacity-70 transition-all"
                        >
                            <span className="font-medium">Shop Now</span>
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
