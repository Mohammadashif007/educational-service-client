import { useForm } from "react-hook-form";

const Add_service = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center py-10">
            <div className="max-w-lg w-full mx-4 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Add Your Service
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label
                            htmlFor="service_name"
                            className="block font-semibold"
                        >
                            Service Name:
                        </label>
                        <input
                            type="text"
                            id="service_name"
                            {...register("service_name", { required: true })}
                            className="form-input mt-1 w-full border-2 py-2 rounded-lg"
                        />
                        {errors.service_name && (
                            <span className="text-red-500">
                                Service Name is required
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="service_area"
                            className="block font-semibold"
                        >
                            Service Area:
                        </label>
                        <input
                            type="text"
                            id="service_area"
                            {...register("service_area", { required: true })}
                            className="form-input mt-1 w-full border-2 py-2 rounded-lg"
                        />
                        {errors.service_area && (
                            <span className="text-red-500">
                                Service Area is required
                            </span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="price" className="block font-semibold">
                            Price:
                        </label>
                        <input
                            type="number"
                            id="price"
                            {...register("price", { required: true })}
                            className="form-input mt-1 w-full border-2 py-2 rounded-lg"
                        />
                        {errors.price && (
                            <span className="text-red-500">
                                Price is required
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="photo_url"
                            className="block font-semibold"
                        >
                            Photo URL:
                        </label>
                        <input
                            type="text"
                            id="photo_url"
                            {...register("photo_url", { required: true })}
                            className="form-input mt-1 w-full border-2 py-2 rounded-lg"
                        />
                        {errors.photo_url && (
                            <span className="text-red-500">
                                Photo URL is required
                            </span>
                        )}
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
                            className="form-textarea mt-1 w-full border-2 py-2 rounded-lg"
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
