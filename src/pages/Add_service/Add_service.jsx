import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Add_service = () => {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = {
            ...data,
            instructor_name: user.displayName,
            instructor_email: user.email,
            instructor_image: user.photoURL,
        };
        axios
            .post("http://localhost:3000/services", formData)
            .then((res) => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        icon: "success",
                        title: "Your service added successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center py-10 dark:bg-black  ">
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <div className="max-w-2xl w-full mx-4 bg-white p-6 rounded-lg shadow-md dark:border-2 dark:border-blue-950 dark:bg-black dark:text-white">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Add Your Service
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-full">
                            <label className="block font-semibold">
                                Service Name:
                            </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: true,
                                })}
                                className="form-input mt-1 w-full border-2 py-2 rounded-lg px-3"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    Service Name is required
                                </span>
                            )}
                        </div>

                        <div className="w-full">
                            <label className="block font-semibold">
                                Service Area:
                            </label>
                            <input
                                type="text"
                                {...register("service_area", {
                                    required: true,
                                })}
                                className="form-input mt-1 w-full border-2 py-2 rounded-lg px-3"
                            />
                            {errors.service_area && (
                                <span className="text-red-500">
                                    Service Area is required
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-5">
                        <div className="w-full">
                            <label className="block font-semibold">
                                Price:
                            </label>
                            <input
                                type="text"
                                {...register("price", { required: true })}
                                className="form-input mt-1 w-full border-2 py-2 rounded-lg px-3"
                            />
                            {errors.price && (
                                <span className="text-red-500">
                                    Price is required
                                </span>
                            )}
                        </div>

                        <div className="w-full">
                            <label className="block font-semibold">
                                Photo URL:
                            </label>
                            <input
                                type="text"
                                {...register("image", { required: true })}
                                className="form-input mt-1 w-full border-2 py-2 rounded-lg px-3"
                            />
                            {errors.photo_url && (
                                <span className="text-red-500">
                                    Photo URL is required
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block font-semibold"
                        >
                            Description:
                        </label>
                        <textarea
                            id="description"
                            {...register("description", { required: true })}
                            className="form-textarea mt-1 w-full border-2 py-2 rounded-lg px-3 dark:text-gray-900"
                            rows="4"
                        ></textarea>
                        {errors.description && (
                            <span className="text-red-500">
                                Description is required
                            </span>
                        )}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#124076] text-white px-6 py-3 rounded-lg font-bold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add_service;
