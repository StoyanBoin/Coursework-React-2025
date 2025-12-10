import { useNavigate } from "react-router";

export default function Register({
    onRegister,
}) {
    const navigate = useNavigate();

    const registerSubmitHandler = (formData) => {
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (!username || !email || !password) {
            return alert("All fields are required!");
        }

        if (password !== confirmPassword) {
            return alert("Passwords missmatch!");
        }
        onRegister(
            username,
            email,
            password,
        );

        navigate("/");
    }

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
                    action={registerSubmitHandler}
                    method="POST"
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
                            name="username"
                            required=""
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
                            name="email"
                            required=""
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
                            name="password"
                            required=""
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
                            name="confirmPassword"
                            required=""
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100">
                        Register
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
        </>
    );
}