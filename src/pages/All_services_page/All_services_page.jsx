import CommonBanner from "../../components/CommonBanner";
import ItemCard from "../../components/ItemCard";
import useLoadData from "../../hooks/useLoadData";
import allCoursesBannerImg from "../../assets/commonBanner/b.jpg";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const All_services_page = () => {
    const title = "All Courses";
    const shortDescription =
        "We offer numerous courses that can propel you beyond your current professional capabilities.";
    // const [services, setServices] = useState([]);
    const [courses, setCourses] = useState();
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/services")
            .then((res) => res.json())
            .then((data) => {
                setCourses(data), 
                setFilteredCourses(data);
            });
    }, []);

    // const handleSearch = () => {

    // }

    const handleSearchKey = e => {
        const searchKey = e.target.value.toLowerCase();
        setSearchKey(searchKey);
        const searchedCourse = courses.filter(course => course.name.toLowerCase().includes(searchKey));
        setFilteredCourses(searchedCourse);
    }

    const handleSearch = () => {
        const searchedCourse = courses.filter(course => course.name.toLowerCase().includes(searchKey));
        setFilteredCourses(searchedCourse);
    }

    return (
        <div className=" my-5">
            <Helmet>
                <title>All Services</title>
            </Helmet>
            <CommonBanner
                cover={allCoursesBannerImg}
                title={title}
                description={shortDescription}
                handleSearchKey={handleSearchKey}
                searchKey={searchKey}
                handleSearch={handleSearch}
            ></CommonBanner>
            <div className="w-4/5 mx-auto">
                <p className="font-extrabold text-5xl text-center mb-12">
                    Our courses
                </p>
                <div className="grid grid-cols-3 gap-3">
                    {filteredCourses.map((service) => (
                        <ItemCard
                            key={service._id}
                            service={service}
                        ></ItemCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default All_services_page;
