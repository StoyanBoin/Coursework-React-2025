import Furniture from "../furniture/Furniture.jsx";
import { useUserContext } from "../../context/UserContext.jsx";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const BASE_URL = 'http://localhost:3030/jsonstore/furniture';

export default function Shop() {
    const { isAuthenticated } = useUserContext();
    const [furnitureData, setFurnitureData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(BASE_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch furniture data.');
                }
                const result = await response.json();

                setFurnitureData(Object.values(result));
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);

    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Shop</h1>
                                <p className="mb-4">
                                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                    velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                </p>
                                <p>
                                    {isAuthenticated
                                        ? (
                                            <Link to="/create" className="btn btn-secondary me-2">Create Now</Link>
                                        )
                                        : (
                                            <Link to="/login" className="btn btn-secondary me-2">Login to Create</Link>
                                        )
                                    }

                                    {/* <a href="#" className="btn btn-white-outline">
                                        Explore
                                    </a> */}
                                </p>
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
            {/* <!-- End Hero Section --> */}


            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">


                        {furnitureData.length === 0 && <p className="no-furniture">No furniture available.</p>}

                        {furnitureData.map(furniture => <Furniture key={furniture._id} {...furniture} />)}

                    </div>
                </div>
            </div>

        </>

    );
}