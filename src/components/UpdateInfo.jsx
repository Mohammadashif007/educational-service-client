import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateInfo = () => {
    const data = useLoaderData();
    const { image, description, price, name, service_area, _id } = data;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch(`https://education-server-eight.vercel.app/services/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Course Info Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center py-10">
            <div className="max-w-2xl w-full mx-4 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Add Your Service
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                                defaultValue={name}
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
                                defaultValue={service_area}
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
                                defaultValue={price}
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
                                defaultValue={image}
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
                            defaultValue={description}
                            className="form-textarea mt-1 w-full border-2 py-2 rounded-lg px-3"
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

export default UpdateInfo;
