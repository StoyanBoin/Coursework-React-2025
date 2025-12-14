export default function OneBlog({
    posts,
}) {

    const _id = posts._id;
    const title = posts.title;
    const author = posts.author;
    const date = posts.date;
    const imageUrl = posts.imageUrl;

    return (
        <div className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-5">
                        <div className="post-entry">
                            <Link to={`/blog/${_id}/details`} className="post-thumbnail">
                                <img src={imageUrl} alt="Image" className="img-fluid" />
                            </Link>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to={`/blog/${_id}/details`}>{title}</Link>
                                </h3>
                                <div className="meta">
                                    <span>
                                        by <Link to={`/blog/${_id}/details`}>{author}</Link>
                                    </span>{" "}
                                    <span>
                                        on <Link to={`/blog/${_id}/details`}>{date}</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}