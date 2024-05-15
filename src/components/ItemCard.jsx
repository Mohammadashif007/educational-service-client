import { Link } from "react-router-dom";

const ItemCard = ({ service }) => {
    const { image, price, name, description, service_area, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl dark:bg-black dark:text-white dark:border-blue-950 dark: border-2">
            <figure>
                <img className="h-[200px] w-full" src={image} alt="course image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className="font-semibold">Service Area: {service_area}</p>
                <p className="font-semibold">Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/detailsPage/${_id}`}>
                        <button className=" px-5 py-3 rounded text-white bg-[#124076]">
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
