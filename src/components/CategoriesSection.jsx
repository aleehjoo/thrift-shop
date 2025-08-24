import React from 'react'
import CategoryCard from "./CategoryCard.jsx";

const categories = [
    { name: 'T-Shirts', image: '/images/tshirt.jpg' },
    { name: 'Hoodies', image: '/images/hoodie.jpg' },
    { name: 'Jeans', image: '/images/jeans.jpg' },
    { name: 'Shorts', image: '/images/shorts.jpg' },
    { name: 'Skirts', image: '/images/skirt.jpg' },
    { name: 'Dresses', image: '/images/dress.jpg' },
    { name: 'Shoes', image: '/images/shoe.jpg' },
    { name: 'Accessories', image: '/images/accessories.jpg' },
]

const CategoriesSection = () => {
    return (
        <section className="mt-32">
            <h2 className="text-3xl font-bold text-center text-white">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 justify-items-center">
                    {categories.map((category) => (
                        <CategoryCard name={category.name} image={category.image} alt={category.name}/>
                    ))}
            </div>
        </section>
    )
}
export default CategoriesSection
