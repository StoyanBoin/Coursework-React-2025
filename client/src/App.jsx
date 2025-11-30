import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
import Shop from "./components/shop/Shop.jsx"
import AboutUs from "./components/about/AboutUs.jsx"

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App