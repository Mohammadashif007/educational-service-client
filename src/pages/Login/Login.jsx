import Lottie from "lottie-react";
import loginImage from "../../assets/lottie/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const notify = () => toast.success("Login Successful!");
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then((res) => {
                const result = res.user;
                navigate(from);
                notify();
            })
            .catch((err) => {
                console.log(err.message);
            });
        reset();
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((res) => {
                const result = res.user;
                console.log(result);
                navigate(from)
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className=" min-h-screen bg-base-200 p-10 md:flex justify-center items-center gap-28 dark:bg-black dark:text-white">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="mb-10">
                <Lottie animationData={loginImage}></Lottie>
            </div>
            <div className=" w-full max-w-sm shadow-2xl  rounded-lg dark:border-2 dark:border-blue-950 p-8">
                <p className="text-3xl font-bold text-center p-3">
                    Please Login
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-bold dark:text-white">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            {...register("email", {
                                required: "Please enter your email",
                            })}
                            className="input input-bordered text-gray-600"
                        />
                        {errors.email && (
                            <span className="text-red-600 mt-2 font-semibold">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text font-bold dark:text-white">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            {...register("password", {
                                required: "Please enter your password",
                            })}
                            className="input input-bordered text-gray-600"
                        />
                        {errors.password && (
                            <span className="text-red-600 mt-2 font-semibold">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button className=" px-5 py-3 rounded-lg bg-[#124076] text-white">
                            Login
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
                <p className="font-bold pb-5 mx-3 mt-3">
                    New here ? Please{" "}
                    <span className="text-[#124076] cursor-pointer">
                        <Link to="/registration">Registration</Link>
                    </span>
                </p>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;
