import Lottie from "lottie-react";
import registrationImage from "../../assets/lottie/registration.json";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const Registration = () => {

    const {createUser, loginWithGoogle} = useContext(AuthContext);

    const notify = () => toast.success('Account Create successfully');

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
        .then(res => {
            const result = res.user;
            console.log(result);
            notify()
            reset()
        })
        .catch(err => {
            console.log(err.message);
        })
    };


    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(res => {
            const result = res.user;
            console.log(result);
            notify()
        })
        .catch(err => {
            console.log(err.message);
        })
    }



    return (
        <div className=" min-h-screen bg-base-200 p-10 md:flex justify-center items-center gap-28">
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className="mb-10 ">
                <Lottie className="" animationData={registrationImage}></Lottie>
            </div>
            <div className=" w-full max-w-sm shadow-2xl  rounded-lg">
                <p className="text-3xl font-bold text-center">
                    Please Registration Here
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name")}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
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
                            placeholder="Password"
                            {...register("password")}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            {...register("photoURL")}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className=" px-5 py-3 rounded-lg bg-[#124076] text-white">
                            Registration
                        </button>
                    </div>
                    <div className="form-control">
                        <button onClick={handleGoogleLogin} className=" px-5 py-3 rounded-lg bg-[#124076] text-white flex justify-center items-center gap-2">
                            <FaGoogle className="text-2xl" />
                            <div>Google</div>
                        </button>
                    </div>
                </form>
                <p className="font-bold pb-5 mx-9">
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
