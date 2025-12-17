import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useUserContext } from "../../context/UserContext.jsx";
import CreateComment from "../comment/CreateComment.jsx";
import DetailsComments from "./DetailsComments.jsx";


export default function DetailsBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useUserContext();
    const [blog, setBlog] = useState({});
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/blog/${id}`)
            .then((res) => res.json())
            .then((data) => setBlog(data))
            .catch((err) => alert(err.message));
    }, [id]);

    const deleteBlog = async () => {
        const isConfirmed = confirm('Are you sure you want to delete this blog post?');

        if (!isConfirmed) {
            return;
        }

        try {
            await fetch(`http://localhost:3030/jsonstore/blog/${id}`, {
                method: 'DELETE',
            });

            navigate('/blog');
        } catch (err) {
            alert(err.message);
        }
    }

    const refreshHanler = () => {
        setRefresh(state => !state)
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
                        src={blog.imageUrl}
                        className="card-img-top"
                        alt="Nordic Chair"
                    />
                    <div className="card-body">
                        <h2 className="card-title">{blog.title} </h2>
                        <p>
                            <strong>Author:</strong> {blog.author}
                        </p>
                        <p>
                            <strong>Date:</strong> {blog.date}
                        </p>
                        <p>
                            <strong></strong> {blog.body}
                        </p>
                        {/* Action Buttons */}

                        {blog._creatorId === user._id
                            ?
                            (
                                <div className="d-flex justify-content-between mt-4">
                                    {/* <Link to={`/shop/${id}/edit`} className="btn btn-warning">
                                    Edit
                                </Link> */}

                                    <button
                                        onClick={deleteBlog}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>)
                            :
                            (<p></p>)
                        }
                        {/* Existing comments */}
                        <div className="mt-5">
                            {/* <h3>Comments</h3>
                            {blog.comments && blog.comments.length > 0 ? (
                                <ul className="list-group mb-4">
                                    {blog.comments.map((comment, index) => (
                                        <li key={index} className="list-group-item">
                                            <strong>{comment.author}</strong>: {comment.text}
                                            <div className="text-muted" style={{ fontSize: "0.9em" }}>
                                                {comment.date}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No comments yet. Be the first to comment!</p>
                            )} */}
                            {/* Comments Section */}
                            <div className="mt-5">

                                <DetailsComments refresh={refresh} />

                                {user && <CreateComment user={user} onCreate={refreshHanler}/>}

                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    );
}