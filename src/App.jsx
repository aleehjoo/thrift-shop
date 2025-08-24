import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductSample from "./pages/ProductSample.jsx";

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-sample" element={<ProductSample />} />
            </Routes>
    );
}


export default App;
