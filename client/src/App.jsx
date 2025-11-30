import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
import Shop from "./components/shop/Shop.jsx"
import AboutUs from "./components/about/AboutUs.jsx"
import ContactUs from "./components/contact/ContactUs.jsx"
import Blog from "./components/blog/Blog.jsx"

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App