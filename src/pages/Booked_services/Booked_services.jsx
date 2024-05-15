import { Helmet } from "react-helmet-async";
import empty from "../../assets/shopping/shopping.png";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Booked_services = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    console.log(bookings);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/bookings?email=${user?.email}`)
            .then((res) => setBookings(res.data));
    }, []);

    return (
        <div>
            <Helmet>
                <title>Booked Service</title>
            </Helmet>
            {bookings && bookings.length ? (
                <div className="px-10 my-10 dark:bg-black dark:text-white">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="font-semibold text-[16px] text-black dark:text-white">
                                    <th>Images</th>
                                    <th>Name</th>
                                    <th>Service id</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((x) => (
                                    <tr key={x._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="w-[100px] h-[100px] rounded-md">
                                                        <img
                                                            src={
                                                                x.service_image_URL
                                                            }
                                                            alt="img"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{x.service_name}</td>
                                        <td>{x.service_id}</td>
                                        <td>{x.service_date}</td>
                                        <th>
                                          <span className={`bg-${x.status === "pending"? "orange-500": x.status ==="working"? "sky-500": "green-500"} text-white px-5 py-2 rounded-full`}> {x.status ? x.status : <span>Pending</span> }</span>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center my-10">
                    {/* <p className="text-4xl font-extrabold">Card is empty</p> */}
                    <img src={empty} alt="" />
                </div>
            )}
        </div>
    );
};

export default Booked_services;
