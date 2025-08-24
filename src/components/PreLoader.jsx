import { motion } from "framer-motion";

const Preloader = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-black fixed top-0 left-0 z-50">
            <motion.div
                className="text-white text-2xl font-bold"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading...
            </motion.div>
        </div>
    );
};

export default Preloader;
