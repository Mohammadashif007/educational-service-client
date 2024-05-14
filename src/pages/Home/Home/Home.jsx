import { Helmet } from "react-helmet-async";
import Multimedia_section from "../Multimedia_section/Multimedia_section";
import Banner from "../Banner/Banner";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Testimonials from "../Testimonials/Testimonials";
import Best_teacher from "../Best_teacher/Best_teacher";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <Testimonials></Testimonials>
            <Multimedia_section></Multimedia_section>
            <Best_teacher></Best_teacher>

        </div>
    );
};

export default Home;