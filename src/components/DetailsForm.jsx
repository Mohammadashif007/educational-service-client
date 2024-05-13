import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const DetailsForm = () => {
    const {user} = useAuth();
    const data = useLoaderData();
    const { image, description, price, name, _id, instructor_email, instructor_name } = data;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:3000/bookings', data)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Service booked successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        
    };



    return (
        <div className="max-w-2xl mx-auto my-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="/submit_service"
                method="post"
                className=""
            >
                <div>
                    <label className="block mt-4 font-semibold mb-1">
                        Service Name:
                    </label>
                    <input
                        type="text"
                        {...register("service_name")}
                        defaultValue={name}
                        readOnly
                        className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400 "
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mt-4 font-semibold mb-1">
                        Service ID:
                    </label>
                    <input
                        type="text"
                        {...register("service_id")}
                        defaultValue={_id}
                        readOnly
                        className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                    />
                </div>
                <div className="flex gap-3 w-full">
                    <div className="w-full">
                        <label className="block mt-4 font-semibold mb-1">
                            Price:
                        </label>
                        <input
                            type="text"
                            {...register("price")}
                            defaultValue={price}
                            readOnly
                            className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mt-4 font-semibold mb-1">
                            Service Image URL:
                        </label>
                        <input
                            type="text"
                            {...register("service_image_URL")}
                            defaultValue={image}
                            readOnly
                            className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                        />
                    </div>
                </div>

                <div className="flex gap-3 w-full">
                    <div className="w-full">
                        <label className="block mt-4 font-semibold mb-1">
                            Instructor Email:
                        </label>
                        <input
                            type="email"
                            {...register("provider_email")}
                            defaultValue={instructor_email}
                            readOnly
                            className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block mt-4 font-semibold mb-1">
                            Instructor Name:
                        </label>
                        <input
                            type="text"
                            {...register("provider_name")}
                            defaultValue={instructor_name}
                            readOnly
                            className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                        />
                    </div>
                </div>

                <div className="flex gap-3 w-full">
                    <div className="w-full">
                        <label className="block mt-4 font-semibold mb-1">
                            User Email:
                        </label>
                        <input
                            type="email"
                            {...register("user_email")}
                            defaultValue={user.email}
                            readOnly
                            className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block mt-4 font-semibold mb-1">
                            User Name:
                        </label>
                        <input
                            type="text"
                            {...register("user_name")}
                            defaultValue={user.displayName}
                            readOnly
                            className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mt-4 font-semibold mb-1">
                        Service Taking Date:
                    </label>
                    <input
                        type="date"
                        {...register("service_date")}
                        className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                    />
                </div>

                <div className="col-span-2">
                    <label className="block mt-4 font-semibold mb-1">
                        Special Instruction:
                    </label>
                    <textarea
                        type="text"
                        {...register("instruction")}
                        rows="4"
                        cols="50"
                        className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 border-2 border-gray-400"
                    ></textarea>
                </div>

                <div className="flex justify-center mt-5">
                    <button
                        type="submit"
                        className="col-span-2 bg-[#124076] text-white py-3 px-6 rounded-md shadow-sm"  
                    >
                        Purchase
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DetailsForm;
