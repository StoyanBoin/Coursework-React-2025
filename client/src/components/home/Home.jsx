import React from "react";
import HomeBlog from "../blog/HomeBlog.jsx";
import Hero from "../hero/Hero.jsx";
import Choose from "../info/Choose.jsx";
import Help from "../info/Help.jsx";
import PopularProduct from "../product/PopularProduct.jsx";

export default function Home() {


    return (
        <>
            <Hero />
            <Choose />
            <Help />
            <PopularProduct />
            <HomeBlog />
        </>
    );
}