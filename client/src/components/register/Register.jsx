import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm.jsx";
import { useContext } from "react";
import UserContext from "../../context/UserContext.jsx";


export default function Register() {
    const navigate = useNavigate();
    const { registerHandler } = useContext(UserContext);

    const registerSubmitHandler = async (values) => {
        const { username, email, password, confirmPassword } = values;

        if (!username || !email || !password) {
            return alert("All fields are required!");
        }
        if (email !== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            return alert("Invalid email address!");
        }

        if (password !== confirmPassword) {
            return alert("Passwords missmatch!");
        }
        try {
            await registerHandler(
                username,
                email,
                password,
            );

            navigate("/");
        } catch (err) {
            return alert(err.message);
        }
    }

    const {
        registerFild,
        formAction,
    } = useForm(registerSubmitHandler, {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Register</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <div className="container mt-5">
                <h2 className="mb-4 text-center">Register</h2>
                <form
                    action={formAction}
                    className="mx-auto"
                    style={{ maxWidth: 500 }}
                >
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            required=""
                            {...registerFild('username')}
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            required=""
                            {...registerFild('confirmPassword')}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100">
                        Register
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
        </>
    );
}