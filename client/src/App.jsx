import { Route } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Hero from "./components/hero/Hero.jsx"
import Product from "./components/product/Product.jsx"
import Blog from "./components/blog/Blog.jsx"
import PopularProduct from "./components/product/PopularProduct.jsx"
import Choose from "./components/info/Choose.jsx"
import Help from "./components/info/Help.jsx"

function App() {

    return (
        <>
            <body>

                <Header />
                <Hero />
                <Product />
                <Choose />
                <Help />
                <PopularProduct />
                <Blog />
                <Footer />

                <script src="js/bootstrap.bundle.min.js"></script>
                <script src="js/tiny-slider.js"></script>
                <script src="js/custom.js"></script>
            </body>
        </>
    )
}

export default App
