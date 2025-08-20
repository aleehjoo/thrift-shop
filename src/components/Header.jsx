import React from "react";

const Header = () => {
    return (
        <header className="relative">
            <img
                src="/images/hero.jpg"
                alt="Hero"
                className="w-full h-[70vh] md:h-[80vh] object-cover"
            />

            <nav
                className="
          absolute top-4 left-1/2 -translate-x-1/2
          w-[92%] max-w-6xl
          bg-black text-white rounded-2xl
          px-4 sm:px-6 py-3
          flex items-center justify-between gap-4
          shadow-lg
        "
            >
                <div className="hidden sm:flex items-center gap-6">
                    <a href="#" className="hover:opacity-80">Shop</a>
                    <a href="#" className="hover:opacity-80">About Us</a>
                </div>

                <div className="text-lg sm:text-xl font-bold">Clothing Co.</div>

                <div className="flex items-center gap-4">
                    <a href="#" aria-label="Notifications" className="hover:opacity-80 invert">
                        <img src="/icons/notifications.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href="#" aria-label="Cart" className="hover:opacity-80 invert">
                        <img src="/icons/cart.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href="#" aria-label="Profile" className="hover:opacity-80 invert">
                        <img src="/icons/profile.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
