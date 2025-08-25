const Header = () => {
    return (
        <header className="sticky top-4 z-50 flex justify-center">
            <nav
                className="
          w-[92%] max-w-6xl
          bg-white text-black rounded-2xl
          px-4 sm:px-6 py-3
          flex items-center justify-between gap-4
          shadow-lg
        "
            >
                <div className="text-lg sm:text-xl font-bold">Clothing Co.</div>

                <div className="flex items-center gap-4">
                    <a href="#" aria-label="Notifications" className="hover:opacity-80">
                        <img src="/icons/notifications.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href="#" aria-label="Cart" className="hover:opacity-80">
                        <img src="/icons/cart.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href="#" aria-label="Profile" className="hover:opacity-80">
                        <img src="/icons/profile.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
