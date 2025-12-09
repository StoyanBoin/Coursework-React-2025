import { useNavigate } from "react-router";

export default function Login(
    onLogin,
) {

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return alert("All fields are required!");
        }
        try {
            onLogin({
                email,
                password
            });

            navigate("/");
        } catch (err) {
            alert(err.message);
            return;
        }
    }

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
                    action={loginHandler}
                    method="POST"
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
                    <button type="submit" className="btn btn-dark w-100">
                        Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>
                        Don't have an account? <a href="/register">Register here</a>
                    </p>
                </div>
            </div>

        </>
    );
}