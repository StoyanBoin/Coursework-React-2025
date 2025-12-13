import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm.jsx";
import { useContext } from "react";
import UserContext from "../../context/UserContext.jsx";

export default function Login() {

    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext);

    const loginSubmitHandler = async ({ email, password }) => {

        if (!email || !password) {
            return alert("All fields are required!");
        }
        try {
            await loginHandler({
                email,
                password
            });

            navigate("/");
        } catch (err) {
            alert(err.message);
            return;
        }
    }

    const {
        registerFild,
        formAction,
    } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    });

    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <div className="container mt-5">
                <h2 className="mb-4 text-center">Login</h2>
                <form
                    action={formAction}
                    className="mx-auto"
                    style={{ maxWidth: 400 }}
                >
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required=""
                            {...registerFild('email')}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required=""
                            {...registerFild('password')}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100">
                        Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>
                        Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>

        </>
    );
}