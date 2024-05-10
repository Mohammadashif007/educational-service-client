import Lottie from "lottie-react";
import loginImage from "../../assets/lottie/login.json";

const Login = () => {
    return (
        <div className=" min-h-screen bg-base-200 p-10 md:flex justify-center items-center gap-28">
            <div className="mb-10">
                <Lottie animationData={loginImage}></Lottie>
            </div>
            <div className=" w-full max-w-sm shadow-2xl  rounded-lg">
                <p className="text-3xl font-bold text-center p-3">Please Login</p>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className=" px-5 py-3 rounded-lg bg-[#124076] text-white">Login</button>
                    </div>
                </form>
                <p className="font-bold pb-5 mx-9">New here ? Please <span className="text-[#124076] cursor-pointer">Register</span></p>
            </div>
        </div>
    );
};

export default Login;
