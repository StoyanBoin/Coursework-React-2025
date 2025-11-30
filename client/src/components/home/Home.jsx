import Blog from "../blog/Blog.jsx";
import Hero from "../hero/Hero.jsx";
import Choose from "../info/Choose.jsx";
import Help from "../info/Help.jsx";
import PopularProduct from "../product/PopularProduct.jsx";
import Product from "../product/Product.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Product />
            <Choose />
            <Help />
            <PopularProduct />
            <Blog />
        </>
    );
}