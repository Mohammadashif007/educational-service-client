import { FaBrain } from "react-icons/fa";
import { FaBusinessTime, FaHandHoldingHand } from "react-icons/fa6";
import YouTube from "react-youtube";

const Multimedia_section = () => {
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const videoId = "7cEpNIjMO7c";
    return (
        <div className="lg:flex justify-center items-center w-4/5 mx-auto my-10 dark:bg-black dark:text-white">
            <div className="flex-1">
                <h1 className="text-3xl font-extrabold text-[#124076]">
                    Build your Career To Share Your Knowledge.
                </h1>
                <p className="my-5">
                    If you have any kind of skills, you can make course based on
                    your skills. You can publish your course and make money from
                    learners.
                </p>
                <div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaBusinessTime className="text-3xl bg-[#124076] text-white p-1 rounded-full" />
                        <p className="font-semibold ">Flexible Schedule</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaBrain className="text-3xl bg-[#124076] text-white p-1 rounded-full" />
                        <p className="font-semibold ">Share your Knowledge</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaHandHoldingHand className="text-3xl bg-[#124076] text-white p-1 rounded-full" />
                        <p className="font-semibold ">
                            Help to grow others Career
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 lg:m-0 mt-4">
                <YouTube  className="" videoId={videoId} opts={opts} />
            </div>
        </div>
    );
};

export default Multimedia_section;
