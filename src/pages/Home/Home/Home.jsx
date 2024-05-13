import { Helmet } from "react-helmet-async";
import Multimedia_section from "../Multimedia_section/Multimedia_section";
import Banner from "../Banner/Banner";
import FeaturedServices from "../FeaturedServices/FeaturedServices";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <Multimedia_section></Multimedia_section>
        </div>
    );
};

export default Home;