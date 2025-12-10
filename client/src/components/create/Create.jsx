import { useNavigate } from "react-router";

export default function Create() {
    const navigate = useNavigate();

    const createFurnitureHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const result = await fetch('http://localhost:3030/jsonstore/furniture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resultData = await result.json();
        console.log(resultData);

        navigate('/shop');
    }

    return (
        <>
            {/* Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Add New Furniture</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="container mt-5 mb-5">
                <h2 className="mb-4 text-center">Add New Item</h2>
                <form
                    onSubmit={createFurnitureHandler}
                    className="mx-auto"
                    style={{ maxWidth: 600 }}
                >
                    {/* Title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" required />
                    </div>

                    {/* Type */}
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input type="text" className="form-control" id="type" name="type" placeholder="e.g. Chair, Table" required />
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" name="price" step="0.01" required />
                    </div>

                    {/* Date */}
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" name="date" required />
                    </div>

                    {/* Image URL */}
                    <div className="mb-3">
                        <label htmlFor="imageURL" className="form-label">Image URL</label>
                        <input type="url" className="form-control" id="imageURL" name="imageURL" placeholder="https://example.com/image.jpg" required />
                    </div>

                    {/* Summary */}
                    <div className="mb-3">
                        <label htmlFor="summary" className="form-label">Summary</label>
                        <textarea className="form-control" id="summary" name="summary" rows={4} placeholder="Write a short description..." required />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-dark w-100">Submit Item</button>
                </form>

                <div className="text-center mt-3">
                    <p>Already have an account? <a href="/login">Login here</a></p>
                </div>
            </div>
        </>
    )
}

