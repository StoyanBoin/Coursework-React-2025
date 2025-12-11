import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export default function Details() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [furniture, setFurniture] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/furniture/${id}`)
            .then((response) => response.json())
            .then(result => setFurniture(result))
            .catch((err) => alert(err.message));

    }, [id]);

    const deleteFurniture = async () => {
        const isConfirmed = confirm('Are you sure you want to delete this furniture item?');

        if (!isConfirmed) {
            return;
        }

        try {
            await fetch(`http://localhost:3030/jsonstore/furniture/${id}`, {
                method: 'DELETE',
            });

            navigate('/shop');
        } catch (err) {
            alert(err.message);
        }
    }
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
                        src={furniture.imageUrl}
                        className="card-img-top"
                        alt="Nordic Chair"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Title: {furniture.title} </h5>
                        
                        <p>
                            <strong>Type:</strong> {furniture.type}
                        </p>
                        <p>
                            <strong>Price:</strong> {furniture.price}
                        </p>
                        <p>
                            <strong>Date:</strong> {furniture.date}
                        </p>
                        <p>
                            <strong>Summary:</strong> {furniture.summary}
                        </p>
                        {/* Action Buttons */}
                        <div className="d-flex justify-content-between mt-4">
                            <Link to={`/shop/${id}/edit`} className="btn btn-warning">
                                Edit
                            </Link>
                            {/* <Link href={`/shop/${id}/delete`} className="btn btn-warning">Delete</Link> */}
                            <button
                                onClick={deleteFurniture}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
} 