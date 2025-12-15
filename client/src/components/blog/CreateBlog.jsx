import { useState } from "react";
import { useEffect } from "react";
import OneBlog from "./OneBlog.jsx";

// const BASE_URL = 'http://localhost:3030/jsonstore/blog';

export default function CreateBlog() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3030/jsonstore/blog");
                if (!response.ok) {
                    throw new Error('Failed to fetch blog data.');
                }
                const result = await response.json({});

                setBlogData(Object.values(result));
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);

    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Blog</h1>
                                <p className="mb-4">
                                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                    velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                </p>
                                {/* <p>
                                        <Link to="/shop" className="btn btn-secondary me-2">
                                            Shop Now
                                        </Link>
                                        <Link to="/" className="btn btn-white-outline">
                                            Explore
                                        </Link>
                                    </p> */}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/couch.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-section">
                <div className="container">
                    <div className="row">
                        {blogData.length === 0 && (<h2 className="my-5 text-center">No blog posts available.</h2>)}
                        {blogData.map(blog => <OneBlog key={blog._id} {...blog} />)}
                    </div>
                </div>
            </div>

        </>
    );
}