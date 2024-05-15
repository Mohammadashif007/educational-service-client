import { Link } from "react-router-dom";
import ItemCard from "../../../components/ItemCard";
import useLoadData from "../../../hooks/useLoadData";

const FeaturedServices = () => {
    // const services = useLoadData();

    const url = "http://localhost:3000/services";
    const { isPending, error, data: services } = useLoadData(url);

    if (isPending) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-center m-10"></span>
            </div>
        );
    }

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div className="dark:bg-black dark:text-white">
            <h2 className="text-center font-extrabold text-5xl mt-10">
                Our Popular Courses
            </h2>
            <div className="grid lg:grid-cols-2 gap-3 my-8 md:w-4/5 mx-auto ">
                {services &&
                    services
                        .slice(0, 6)
                        .map((service) => (
                            <ItemCard
                                key={service._id}
                                service={service}
                            ></ItemCard>
                        ))}
            </div>
            <div className="flex justify-center items-center">
                <Link to="/all_services_page">
                    <button className="bg-[#124076] px-6 py-3 text-white font-semibold rounded-md">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedServices;
