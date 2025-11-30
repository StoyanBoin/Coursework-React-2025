import { Route } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Hero from "./components/hero/Hero.jsx"
import Product from "./components/product/Product.jsx"
import Blog from "./components/blog/Blog.jsx"

function App() {

    return (
        <>
            <body>

                <Header />
                <Hero />
                <Product />

                {/* <!-- Start Why Choose Us Section --> */}
                <div className="why-choose-section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <h2 className="section-title">Why Choose Us</h2>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                                <div className="row my-5">
                                    <div className="col-6 col-md-6">
                                        <div className="feature">
                                            <div className="icon">
                                                <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                                            </div>
                                            <h3>Fast &amp; Free Shipping</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-6">
                                        <div className="feature">
                                            <div className="icon">
                                                <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                                            </div>
                                            <h3>Easy to Shop</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-6">
                                        <div className="feature">
                                            <div className="icon">
                                                <img src="images/support.svg" alt="Image" className="imf-fluid" />
                                            </div>
                                            <h3>24/7 Support</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-6">
                                        <div className="feature">
                                            <div className="icon">
                                                <img src="images/return.svg" alt="Image" className="imf-fluid" />
                                            </div>
                                            <h3>Hassle Free Returns</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="img-wrap">
                                    <img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- End Why Choose Us Section --> */}

                {/* <!-- Start We Help Section --> */}
                <div className="we-help-section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-7 mb-5 mb-lg-0">
                                <div className="imgs-grid">
                                    <div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co" /></div>
                                    <div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co" /></div>
                                    <div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co" /></div>
                                </div>
                            </div>
                            <div className="col-lg-5 ps-lg-5">
                                <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
                                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

                                <ul className="list-unstyled custom-list my-4">
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                </ul>
                                <p><a herf="#" className="btn">Explore</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End We Help Section --> */}

                {/* <!-- Start Popular Product --> */}
                <div className="popular-product">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="product-item-sm d-flex">
                                    <div className="thumbnail">
                                        <img src="images/product-1.png" alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="pt-3">
                                        <h3>Nordic Chair</h3>
                                        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="product-item-sm d-flex">
                                    <div className="thumbnail">
                                        <img src="images/product-2.png" alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="pt-3">
                                        <h3>Kruzo Aero Chair</h3>
                                        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="product-item-sm d-flex">
                                    <div className="thumbnail">
                                        <img src="images/product-3.png" alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="pt-3">
                                        <h3>Ergonomic Chair</h3>
                                        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- End Popular Product --> */}

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
