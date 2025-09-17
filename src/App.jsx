import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home.jsx";
import ProductSample from "./pages/ProductSample.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let rafId = requestAnimationFrame(() => {
            setLoading(false);
        });
        const timeoutId = setTimeout(() => setLoading(false), 1500);
        return () => {
            cancelAnimationFrame(rafId);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="preloader"
                        className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Your actual app */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-sample" element={<ProductSample />} />
            </Routes>
        </>
    );
}

export default App;
