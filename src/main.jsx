import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <main>
            <Header/>
            <HeroSection />
        </main>
    </React.StrictMode>
);
