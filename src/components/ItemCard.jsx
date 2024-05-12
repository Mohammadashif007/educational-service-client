const ItemCard = ({ service }) => {
    const { image, price, name, description, service_area } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="course image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className="font-semibold">Service Area: {service_area}</p>
                <p className="font-semibold">Price: {price}</p>
                <div className="card-actions">
                    <button className=" px-5 py-3 rounded text-white bg-[#124076]">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
