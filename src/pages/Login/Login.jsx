import Lottie from "lottie-react";
import loginImage from "../../assets/lottie/login.json";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className=" min-h-screen bg-base-200 p-10 md:flex justify-center items-center gap-28">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="mb-10">
                <Lottie animationData={loginImage}></Lottie>
            </div>
            <div className=" w-full max-w-sm shadow-2xl  rounded-lg">
                <p className="text-3xl font-bold text-center p-3">
                    Please Login
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            {...register("email")}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            {...register("password")}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className=" px-5 py-3 rounded-lg bg-[#124076] text-white">
                            Login
                        </button>
                    </div>
                    <div className="form-control">
                        <button className=" px-5 py-3 rounded-lg bg-[#124076] text-white flex justify-center items-center gap-2">
                            <FaGoogle className="text-2xl" />
                            <div>Google</div>
                        </button>
                    </div>
                </form>
                <p className="font-bold pb-5 mx-9">
                    New here ? Please{" "}
                    <span className="text-[#124076] cursor-pointer">
                        <Link to="/registration">Registration</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
