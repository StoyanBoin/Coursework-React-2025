import { useState } from "react"
import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
import Shop from "./components/shop/Shop.jsx"
import Create from "./components/create/Create.jsx"
import AboutUs from "./components/about/AboutUs.jsx"
import ContactUs from "./components/contact/ContactUs.jsx"
import Blog from "./components/blog/Blog.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import Cart from "./components/cart/Cart.jsx"
import Logout from "./components/logout/Logout.jsx"


function App() {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [user, setUser] = useState(null);

    const registerHandler = (username, email, password) => {
        if (registeredUsers.some(u => u.email === email)) {
            throw new Error("User with this email already exists.");
        }

        const newUser = { username, email, password };

        setRegisteredUsers(state => [...state, newUser]);

        setUser(newUser);
    };

    const loginHandler = (username, email, password) => {
        const user = registeredUsers.find(u => u.email === email && u.password === password);
        if (!user) {
            throw new Error("No user found with this email.");
        }

        setUser(user);
    }

    const logoutHandler = () => {
        setUser(null);
    }


    return (
        <>
            <Header user={user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/create" element={<Create />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login onLogin={loginHandler} />} />
                <Route path="/register" element={<Register onRegister={registerHandler} />} />
                <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App