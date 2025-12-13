import { Link } from "react-router";

export default function Furniture({
    _id,
    title,
    price,
    imageUrl,
}) {
    return (
        <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to={`/shop/${_id}/details`}>
                <img src={imageUrl} className="img-fluid product-thumbnail"/>
                <h3 className="product-title">{title}</h3>
                <strong className="product-price">${price}</strong>
                <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                </span>
            </Link>
        </div>
    );
}
