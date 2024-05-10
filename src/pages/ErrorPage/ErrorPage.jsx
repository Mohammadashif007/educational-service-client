import { Link } from "react-router-dom";
import img from "../../assets/lottie/error.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div className="flex gap-10 justify-center items-center w-4/5 mx-auto">
            <div className="flex-1">
                <Lottie animationData={img} />;
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-5 flex-1">
                <h2 className="text-9xl font-extrabold text-[#124076]">Oops!</h2>
                <p className="text-3xl font-bold mt-2 uppercase ">
                    404 - Page Not Found
                </p>
                <p className="font-semibold">
                    The page you age looking for might have been removed had its
                    name changed or its temporarily unavailable.
                </p>
                <Link to="/">
                    {" "}
                    <button className="uppercase  rounded-full px-4 py-3 font-bold bg-[#124076] text-white hover:bg-[#3f80ca]">
                        Go To Homepage
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
