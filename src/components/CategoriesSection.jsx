import React from 'react'
import CategoryCard from "./CategoryCard.jsx";

const CategoriesSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 justify-items-center">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    )
}
export default CategoriesSection
