import { Route, Routes, Navigate } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
import Shop from "./components/shop/Shop.jsx"
import Create from "./components/create/Create.jsx"
import AboutUs from "./components/about/AboutUs.jsx"
import ContactUs from "./components/contact/ContactUs.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import Cart from "./components/cart/Cart.jsx"
import Logout from "./components/logout/Logout.jsx"
import Details from "./components/details/Details.jsx"
import Edit from "./components/edit/Edit.jsx"
import UserContext, { useUserContext } from "./context/UserContext.jsx"
import { useContext } from "react"
import CreateBlog from "./components/create/CreateBlog.jsx"
import Blog from "./components/blog/Blog.jsx"



function App() {
    const { user, isAuthenticated } = useUserContext();

    return (
        <>
            <Header user={user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id/details" element={<Details user={user} />} />
                {isAuthenticated ? (<Route path="/shop/:id/edit" element={<Edit user={user} />} />) : (<Route path="/shop/:id/edit" element={<Navigate to="/login" replace />} />)}
                {isAuthenticated ? (<Route path="/create" element={<Create user={user} />} /> ) : (<Route path="/create" element={<Navigate to="/login" replace />} />)}
                {isAuthenticated ? (<Route path="/blog/create" element={<CreateBlog user={user}/>} />) : (<Route path="/blog/create" element={<Navigate to="/login" replace />} />)}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog" element={<Blog user={user}/>} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App