import React from 'react'
import {Link} from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CategoryCard = ({ name, image }) => {
    return (
        <div className="relative w-full max-w-xs h-80 rounded-2xl overflow-hidden group">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[75%]">
                <Link to="/product-sample">
                    <button className="flex items-center justify-between w-full px-4 py-3 bg-[#0A0A0A] text-white font-semibold rounded-md shadow-md hover:invert transition">
                        <span>{name}</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryCard
