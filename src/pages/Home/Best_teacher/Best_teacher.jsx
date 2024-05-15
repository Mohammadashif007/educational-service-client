import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useLoadData from "../../../hooks/useLoadData";

const Best_teacher = () => {

    const url = "http://localhost:3000/teachers";
    const { isPending, error, data: teachers } = useLoadData(url);

    if (isPending) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-center m-10"></span>
            </div>
        );
    }

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div className="w-4/5 mx-auto my-20 dark:bg-black dark:text-white">
            <div className="text-center font-bold text-5xl my-8">
                Our Best Teacher
            </div>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {teachers.map((x) => (
                        <SwiperSlide key={x.id}>
                            <div className="relative group w-[300px] h-[400px]">
                                <img
                                    className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
                                    src={x.image}
                                    alt={name}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                                        <FaFacebookF className="text-white text-3xl cursor-pointer" />

                                        <FaTwitter className="text-white text-3xl cursor-pointer" />

                                        <FaLinkedinIn className="text-white text-3xl cursor-pointer" />
                                    </div>
                                </div>
                                <p className="text-xl font-bold text-center text-white absolute inset-x-0 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {x.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default Best_teacher;
