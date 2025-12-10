export default function NewFurniture({
    _id,
    title,
    summary,
    imageUrl,
}){

    const shortSummary = summary.length > 70 
    ? summary.substring(0, 70) + "..." 
    : summary;

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="product-item-sm d-flex">
                <div className="thumbnail">
                    <img src={imageUrl} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                    <h3>{title}</h3>
                    <p>{shortSummary} </p>
                    <p><a href="#">Read More</a></p>
                </div>
            </div>
        </div>
    );
}