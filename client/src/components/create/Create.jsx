import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm.jsx";
import useRequest from "../../hooks/useRequest.jsx";

export default function Create({
    user,
}) {
    const navigate = useNavigate();
    const { request } = useRequest();

    const createFurnitureHandler = async (values) => {
        const data = values;

        data.price = Number(data.price);
        data._createdOn = Date.now();
        data._creatorId = user?._id;

        if (!data.title || !data.type || !data.price || !data.date || !data.imageUrl || !data.summary) {
            return alert('All fields are required!');
        }
        if (data.price <= 0) {
            return alert('Price must be a positive number!');
        }
        if (data.summary.length < 10) {
            return alert('Summary must be at least 10 characters long!');
        }
        if (data.title.length < 4) {
            return alert('Title must be at least 4 characters long!');
        }
        if (data.type.length < 3) {
            return alert('Type must be at least 3 characters long!');
        }
        if (data.date > new Date().toISOString().split('T')[0]) {
            return alert('Date cannot be in the future!');
        }
        if (data.imageUrl != '' && !/^https?:\/\/.+/i.test(data.imageUrl)) {
            return alert('Image URL must start with http:// or https://');
        }

        try {
            await request('http://localhost:3030/jsonstore/furniture', 'POST', data);

            navigate('/shop');
        }
        catch (err) {
            alert(err.message);
        }
    }


    const {
        registerFild,
        formAction,
    } = useForm(createFurnitureHandler, {
        _id: '',
        title: '',
        type: '',
        price: '',
        date: '',
        imageUrl: '',
        summary: '',
    });

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
                    action={formAction}
                    className="mx-auto"
                    style={{ maxWidth: 600 }}
                >
                    {/* Title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" {...registerFild('title')} required />
                    </div>

                    {/* Type */}
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input type="text" className="form-control" id="type" {...registerFild('type')} placeholder="e.g. Chair, Table" required />
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" {...registerFild('price')} step="0.01" required />
                    </div>

                    {/* Date */}
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" {...registerFild('date')} required />
                    </div>

                    {/* Image URL */}
                    <div className="mb-3">
                        <label htmlFor="imageURL" className="form-label">Image URL</label>
                        <input type="url" className="form-control" id="imageURL" {...registerFild('imageUrl')} placeholder="https://example.com/image.jpg" required />
                    </div>

                    {/* Summary */}
                    <div className="mb-3">
                        <label htmlFor="summary" className="form-label">Summary</label>
                        <textarea className="form-control" id="summary" {...registerFild('summary')} rows={4} placeholder="Write a short description..." required />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-dark w-100">Submit Item</button>
                </form>

                <div className="text-center mt-3">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </>
    )
}

