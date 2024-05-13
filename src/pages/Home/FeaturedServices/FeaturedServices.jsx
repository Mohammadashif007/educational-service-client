import ItemCard from "../../../components/ItemCard";
import useLoadData from "../../../hooks/useLoadData";

const FeaturedServices = () => {
    const services = useLoadData();
    return (
        <div>
            <h2 className="text-center font-extrabold text-5xl mt-10">Our Popular Courses</h2>
            <div className="grid grid-cols-3 gap-3 my-8 w-4/5 mx-auto">
                {services.map((service) => (
                    <ItemCard key={service._id} service={service}></ItemCard>
                ))}
            </div>
        </div>
    );
};

export default FeaturedServices;
