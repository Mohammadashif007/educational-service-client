import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="w-4/5 mx-auto my-20 dark:bg-black dark:text-white">
            <p className="font-bold text-center text-4xl mb-10">
                Testimonials of Our students
            </p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div>
                    {reviews.map((x) => (
                        <SwiperSlide key={x.id}>
                            <div className="flex gap-16 justify-center items-center py-10 px-16  bg-gray-200 dark:bg-blue-950">
                                <div className="my-10">
                                    <img
                                        className="h-[400px] w-full"
                                        src={x.image}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Rating
                                        style={{ maxWidth: 200 }}
                                        value={x.rating}
                                        readOnly
                                    />
                                    <p className="my-2 text-[18px] py-1">
                                        {x.review}
                                    </p>
                                    <p className="font-semibold text-2xl my-1">
                                        {x.name}
                                    </p>
                                    <p className="font-semibold">{x.address}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;
