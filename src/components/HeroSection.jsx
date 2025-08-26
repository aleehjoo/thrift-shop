import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20">

            {/* Image */}
            <motion.div
                className="relative w-48 h-72 sm:w-60 sm:h-96 lg:w-[338px] lg:h-[591px] shadow-lg overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img
                    src="/images/subject.jpg"
                    alt="Hero Subject"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Text content */}
            <motion.div
                className="mt-8 lg:mt-0 lg:ml-24 flex flex-col items-center lg:items-start text-white text-center lg:text-left"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <h1 className="font-urbanist text-4xl sm:text-6xl lg:text-[96px] leading-tight">
                    Elevate <br /> your style
                </h1>

                <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-[32px]">
                    by giving pre-loved pieces a new chapter, where <br />
                    every thrifted find carries a story and every <br />
                    outfit becomes part of your own.
                </p>

                {/* Button */}
                <Link to="/product-sample" className="mt-8 lg:mt-12 w-full lg:w-auto">
                    <motion.button
                        className="flex items-center justify-between gap-3 bg-white text-black py-3 px-6 rounded-md hover:opacity-70 transition-all w-full lg:w-[240px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="font-medium">Shop Now</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default HeroSection;
