import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CategoriesSection from "./components/CategoriesSection.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <main>
            <Header/>
            <HeroSection />
            <CategoriesSection />
        </main>
    </React.StrictMode>
);
