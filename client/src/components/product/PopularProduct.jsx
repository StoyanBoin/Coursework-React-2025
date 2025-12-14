import { useEffect, useState } from "react";
import NewFurniture from "../furniture/NewFurniture.jsx";

export default function PopularProduct() {
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/furniture')
            .then(response => response.json())
            .then(result => {
                const results = Object.values(result)
                    .sort((a, b) => b._createdOn - a._createdOn)
                    .slice(0, 3);

                    setNewProducts(results);
            })
    }, []);
    return (
        <div className="popular-product">
            <div className="container">
                <div className="row">

                    {newProducts.map(product => <NewFurniture key={product._id} {...product} />)}

                </div>
            </div>
        </div>
    );
}