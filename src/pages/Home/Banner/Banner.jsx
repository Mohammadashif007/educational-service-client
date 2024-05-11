import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import b1 from "../../../assets/banner/b1.jpg"
import b2 from "../../../assets/banner/b2.jpg"
import b3 from "../../../assets/banner/b3.jpg"
import b4 from "../../../assets/banner/b4.jpg"
import b5 from "../../../assets/banner/b5.jpg"

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
                    }, 2000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
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
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img src={b1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <img src={b2} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <img src={b3} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <img src={b4} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <img src={b5} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Banner;
