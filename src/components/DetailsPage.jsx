import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DetailsPage = () => {
    const course = useLoaderData();
    const { user } = useAuth();
    const { image, name, description, price, service_area, instructor_image, instructor_name } = course;
    return (
        <div className="flex justify-center items-end gap-5 my-10 w-4/5 mx-auto">
            <div className="w-1/2">
                <img className="rounded w-full h-[300px]" src={image} alt="" />
            </div>
            <div className="w-1/2 my-1">
                <p className="text-3xl font-bold">{name}</p>
                <p className="text-gray-500 my-4">{description}</p>
                <div className="">
                    <img className="w-[50px] h-[50px] rounded-full my-1" src={instructor_image} alt="" />
                    <p className="font-bold">Instructor Name: {instructor_name}</p>
                </div>
                <p className="font-bold">Service area: {service_area}</p>
                <p className="font-bold">Price: {price}</p>
                <button className=" px-5 py-3 rounded text-white bg-[#124076] mt-1">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default DetailsPage;
