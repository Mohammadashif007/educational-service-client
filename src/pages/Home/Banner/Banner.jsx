import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import b1 from "../../../assets/banner/b1.jpg";
import b2 from "../../../assets/banner/b2.jpg";
import b3 from "../../../assets/banner/b3.jpg";
import b4 from "../../../assets/banner/b4.jpg";
import b5 from "../../../assets/banner/b5.jpg";
import b6 from "../../../assets/banner/b6.jpg";

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 4000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = false;
                        // clearNextTimeout();
                        nextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    return (
        <div>
            <div ref={sliderRef} className="keen-slider h-screen relative">
                <div className="keen-slider__slide number-slide1 relative">
                    <img
                        src={b1}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                            Welcome to Our Educational Website
                        </h2>
                        <p className="text-lg text-center mb-4">
                            Unlock the door to knowledge with our diverse range
                            of courses. Whether you're a beginner or an expert,
                            we have something for everyone.
                        </p>

                        <button className="px-4 py-2 bg-[#124076] hover:bg-blue-600 text-white rounded">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="keen-slider__slide number-slide2 relative">
                    <img
                        src={b2}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                            Discover a World of Knowledge
                        </h2>
                        <p className="text-lg text-center mb-4">
                            Explore our vast library of resources and expand
                            your horizons. Dive deep into subjects that
                            fascinate you and uncover new passions.
                        </p>

                        <button className="px-4 py-2 bg-[#124076] hover:bg-blue-600 text-white rounded">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="keen-slider__slide number-slide3 relative">
                    <img
                        src={b3}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                            Ignite Your Passion for Learning
                        </h2>
                        <p className="text-lg text-center mb-4">
                            Embark on a journey of discovery and lifelong
                            learning. Our platform empowers you to pursue your
                            interests and achieve your goals.
                        </p>

                        <button className="px-4 py-2 bg-[#124076] hover:bg-blue-600 text-white rounded">
                            Start Learning
                        </button>
                    </div>
                </div>

                <div className="keen-slider__slide number-slide4 relative">
                    <img
                        src={b4}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                            Expand Your Knowledge Base
                        </h2>
                        <p className="text-lg text-center mb-4">
                            Stay ahead of the curve with our comprehensive
                            courses and cutting-edge content. Challenge yourself
                            and grow your skills.
                        </p>

                        <button className="px-4 py-2 bg-[#124076] hover:bg-blue-600 text-white rounded">
                            View Courses
                        </button>
                    </div>
                </div>

                <div className="keen-slider__slide number-slide5 relative">
                    <img
                        src={b5}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                            Empower Your Learning Journey
                        </h2>
                        <p className="text-lg text-center mb-4">
                            Our platform is designed to inspire curiosity and
                            facilitate learning at your own pace. Join us and
                            unleash your potential.
                        </p>

                        <button className="px-4 py-2 bg-[#124076] hover:bg-blue-600 text-white rounded">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="keen-slider__slide number-slide6 relative">
                    <img
                        src={b6}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                            Join Our Community of Learners
                        </h2>
                        <p className="text-lg text-center mb-4">
                            Connect with fellow learners, exchange ideas, and
                            collaborate on projects. Together, we can achieve
                            greatness.
                        </p>

                        <button className="px-4 py-2 bg-[#124076] hover:bg-blue-600 text-white rounded">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
