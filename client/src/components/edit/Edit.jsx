import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import request from "../utils/request.js";

const initialValues = {
    title: "",
    type: "",
    price: "",
    date: "",
    summary: "",
    imageUrl: "",
};

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [furniture, setFurniture] = useState(initialValues);

    const changeHandler = (e) => {
        setFurniture(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        request(`http://localhost:3030/jsonstore/furniture/${id}`)
            .then(result => {
                setFurniture(result);
            })
            .catch((err) => {
                alert(err.message);
            })
    }, [id]);

    const editFurnitureHandler = async () => {

        if (!furniture.title || !furniture.type || !furniture.price || !furniture.date || !furniture.imageUrl || !furniture.summary) {
            return alert('All fields are required!');
        }
        if (furniture.price <= 0) {
            return alert('Price must be a positive number!');
        }
        if (furniture.summary.length < 10) {
            return alert('Summary must be at least 10 characters long!');
        }
        if (furniture.title.length < 4) {
            return alert('Title must be at least 4 characters long!');
        }
        if (furniture.type.length < 3) {
            return alert('Type must be at least 3 characters long!');
        }
        if (furniture.date > new Date().toISOString().split('T')[0]) {
            return alert('Date cannot be in the future!');
        }

        try {
            await request(`http://localhost:3030/jsonstore/furniture/${id}`, "PUT", furniture);
        } catch (err) {
            alert(err.message);
        }
        navigate(`/shop/${id}/details`);
    };

    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Edit</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <h2 className="mb-4 text-center">Edit New Item</h2>
                <form
                    action={editFurnitureHandler}
                    className="mx-auto"
                    style={{ maxWidth: 600 }}
                >
                    {/* Title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            onChange={changeHandler}
                            value={furniture.title}
                            required
                        />
                    </div>

                    {/* Type */}
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="type"
                            name="type"
                            onChange={changeHandler}
                            value={furniture.type}
                            placeholder="e.g. Chair, Table"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            onChange={changeHandler}
                            value={furniture.price}
                            step="0.01"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            onChange={changeHandler}
                            value={furniture.date}
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-3">
                        <label htmlFor="imageURL" className="form-label">Image URL</label>
                        <input
                            type="url"
                            className="form-control"
                            id="imageURL"
                            name="imageURL"
                            onChange={changeHandler}
                            value={furniture.imageUrl}
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                    </div>

                    {/* Summary */}
                    <div className="mb-3">
                        <label htmlFor="summary" className="form-label">Summary</label>
                        <textarea
                            className="form-control"
                            id="summary"
                            name="summary"
                            onChange={changeHandler}
                            value={furniture.summary}
                            rows={4} placeholder="Write a short description..."
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-dark w-100">Submit Item</button>
                </form>

                <div className="text-center mt-3">
                    <p>Already have an account? <a href="/login">Login here</a></p>
                </div>
            </div>
        </>
    );
}
