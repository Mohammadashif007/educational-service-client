import Lottie from "lottie-react";
import registrationImage from "../../assets/lottie/registration.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Registration = () => {
    const { createUser, loginWithGoogle, updateUser, logOut } =
        useContext(AuthContext);
    const navigate = useNavigate();
    const notify = () => toast.success("Account Create successfully");

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((res) => {
                logOut()
                    .then(() => {
                        setTimeout(() => {
                            navigate("/login");
                        }, 2000);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
                updateUser(data.name, data.photoURL)
                    .then(() => {})
                    .catch((err) => {
                        console.log(err.message);
                    });

                notify();
                reset();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((res) => {
                const result = res.user;
                console.log(result);
                notify();
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className=" min-h-screen bg-base-200 p-10 md:flex justify-center items-center gap-28 dark:text-white dark:bg-black">
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className="mb-10 ">
                <Lottie className="" animationData={registrationImage}></Lottie>
            </div>
            <div className=" w-full max-w-sm shadow-2xl  rounded-lg dark:border-2 dark:border-blue-950 p-8">
                <p className="text-3xl font-bold text-center">
                    Please Registration Here
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">
                                Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: true })}
                            className="input input-bordered text-gray-600"
                        />
                        {errors.name && (
                            <span className="text-red-500">
                                Name field is required
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                            className="input input-bordered text-gray-600"
                        />
                        {errors.email && (
                            <span className="text-red-500">
                                Email field is required
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: "Password field is required",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password must have at list 8 character",
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                    message:
                                        "Password must have one uppercase, one lowercase and one number",
                                },
                            })}
                            className="input input-bordered text-gray-700"
                        />
                        {errors.password && (
                            <span className="text-red-500">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">
                                Photo URL
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            {...register("photoURL", { required: true })}
                            className="input input-bordered text-gray-600"
                        />
                        {errors.photoURL && (
                            <span className="text-red-500">
                                PhotoURL field is required
                            </span>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button className=" px-5 py-3 rounded-lg bg-[#124076] text-white">
                            Registration
                        </button>
                    </div>
                </form>
                <div className="form-control mt-4">
                    <button
                        onClick={handleGoogleLogin}
                        className=" px-5 py-3 rounded-lg bg-[#124076] text-white flex justify-center items-center gap-2"
                    >
                        <FaGoogle className="text-2xl" />
                        <div>Google</div>
                    </button>
                </div>
                <p className="font-bold pb-5 mx-2 mt-3">
                    Already have an account ? Please{" "}
                    <span className="text-[#124076] cursor-pointer">
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Registration;
