import { Link } from "react-router";

export default function Details() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Details</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        </div>
                    </div>
                </div>
            </div>

            < div className="container my-5" >
                <h2 className="mb-4 text-center">Furniture Details</h2>
                <div className="card mx-auto" style={{ maxWidth: 700 }}>
                    <img
                        src="https://example.com/nordic-chair.jpg"
                        className="card-img-top"
                        alt="Nordic Chair"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Title: Nordic Chair</h5>
                        <p>
                            <strong>ID:</strong> 001
                        </p>
                        <p>
                            <strong>Type:</strong> Chair
                        </p>
                        <p>
                            <strong>Price:</strong> $199.99
                        </p>
                        <p>
                            <strong>Date:</strong> 2025-12-10
                        </p>
                        <p>
                            <strong>Summary:</strong> A stylish and ergonomic Nordic chair designed
                            for comfort and modern interiors.
                        </p>
                        {/* Action Buttons */}
                        <div className="d-flex justify-content-between mt-4">
                            <Link to="/edit/001" className="btn btn-warning">
                                Edit
                            </Link>
                            <Link href="/edit/001" className="btn btn-warning">
                                Delate
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}