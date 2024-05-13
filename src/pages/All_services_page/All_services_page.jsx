import CommonBanner from "../../components/CommonBanner";
import ItemCard from "../../components/ItemCard";
import useLoadData from "../../hooks/useLoadData";
import allCoursesBannerImg from "../../assets/commonBanner/b.jpg";
import { Helmet } from "react-helmet-async";

const All_services_page = () => {
    const services = useLoadData();
    const title = "All Courses";
    const shortDescription =
        "We offer numerous courses that can propel you beyond your current professional capabilities.";

    return (
        <div className=" my-5">
            <Helmet>
                <title>All Services</title>
            </Helmet>
            <CommonBanner
                cover={allCoursesBannerImg}
                title={title}
                description={shortDescription}
            ></CommonBanner>
            <div className="w-4/5 mx-auto">
                <p className="font-extrabold text-5xl text-center mb-12">
                    Our courses
                </p>
                <div className="grid grid-cols-3 gap-3">
                    {services.map((service) => (
                        <ItemCard key={service._id} service={service}></ItemCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default All_services_page;
