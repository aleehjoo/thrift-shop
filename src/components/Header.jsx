import React from 'react'

const Header = () => {
    return (
        <nav className="w-full p-4 flex justify-between items-center bg-gray-100">
            <div className="text-xl font-bold">Clothing Co.</div>

            <div className="hidden md:flex gap-6">
                <a href="#" className="hover:opacity-75">
                    <img src="public/icons/notifications.svg" alt="Notifications" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-75">
                    <img src="public/icons/cart.svg" alt="Cart" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-75">
                    <img src="public/icons/profile.svg" alt="Profile" className="w-6 h-6" />
                </a>

            </div>

            <button className="md:hidden p-2 border rounded">☰</button>
        </nav>
    )
}
export default Header
