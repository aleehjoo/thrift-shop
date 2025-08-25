import React, { useRef } from "react";
import CategoryCard from "./CategoryCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
    { name: "T-Shirts", image: "/images/tshirt.jpg" },
    { name: "Hoodies", image: "/images/hoodie.jpg" },
    { name: "Jeans", image: "/images/jeans.jpg" },
    { name: "Shorts", image: "/images/shorts.jpg" },
    { name: "Skirts", image: "/images/skirt.jpg" },
    { name: "Dresses", image: "/images/dress.jpg" },
    { name: "Shoes", image: "/images/shoe.jpg" },
    { name: "Accessories", image: "/images/accessories.jpg" },
];

const CategoriesSection = () => {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".category-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play reset play reset",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="mt-32 px-6 lg:px-16">
            <h2 className="text-3xl font-bold text-center text-white">
                Browse by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 justify-items-center">
                {categories.map((category, idx) => (
                    <div key={idx} className="category-card w-full">
                        <CategoryCard
                            name={category.name}
                            image={category.image}
                            alt={category.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;
