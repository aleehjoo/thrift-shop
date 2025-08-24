import "../styles.css";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import CategoriesSection from "../components/CategoriesSection.jsx";
import ContactForm from "../components/ContactForm.jsx";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <CategoriesSection />
            <ContactForm />
        </div>
    )
}
export default Home
