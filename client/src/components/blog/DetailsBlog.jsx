import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function DetailsBlog({
    user,
}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3030/data/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, [id]);

    return (
        <div className="col-12 mb-5">
            <div className="blog-entry d-flex">
                <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div className="text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>
                        <a href="#" className="btn btn-primary btn-sm">
                            Read More
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}