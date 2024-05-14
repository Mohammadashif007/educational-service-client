
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import empty from "../../assets/shopping/shopping.png";
import Swal from "sweetalert2";

const Service_to_do = () => {
    const [allBookedService, setAllBookedService] = useState([]);

    useEffect(() => {
        axios("http://localhost:3000/bookings").then((res) =>
            setAllBookedService(res.data)
        );
    }, []);

    const handleBookingStateChange = (id, newStatus) => {
        console.log(id, newStatus);
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const updatedServices = allBookedService.map((service) =>
                        service._id === id ? { ...service, status: newStatus } : service
                    );
                    setAllBookedService(updatedServices);
                    Swal.fire({
                        icon: "success",
                        title: "Status updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating status:", error);
                Swal.fire({
                    icon: "error",
                    title: "Failed to update status",
                    text: error.message,
                });
            });
    };

    return (
        <div className="w-4/5 mx-auto">
            <Helmet>
                <title>Service to do</title>
            </Helmet>
            {allBookedService && allBookedService.length ? (
                <div className="px-10 my-10">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="font-semibold text-[16px] text-black">
                                    <th>Images</th>
                                    <th>Name</th>
                                    <th>Service id</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allBookedService.map((x) => (
                                    <tr key={x._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="w-[100px] h-[100px] rounded-md">
                                                        <img
                                                            src={x.service_image_URL}
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
                                            <details className="dropdown">
                                                <summary className={`bg-${x.status === 'working' ? 'sky' : 'green'}-500 text-white rounded-md px-7 py-3 cursor-pointer`}>
                                                    {/* <span>{x.status.charAt(0).toUpperCase() + x.status.slice(1)}</span> */}
                                                    {x.status?<span>{x.status}</span>:<span className="bg-orange-500">Pending</span>}
                                                </summary>
                                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                                                    <li
                                                        onClick={() =>
                                                            handleBookingStateChange(x._id, 'pending')
                                                        }
                                                        className="bg-orange-500 text-white rounded-md mt-2"
                                                    >
                                                        <a>Pending</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            handleBookingStateChange(x._id, 'working')
                                                        }
                                                        className="bg-sky-500 text-white rounded-md mt-2"
                                                    >
                                                        <a>Working</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            handleBookingStateChange(x._id, 'completed')
                                                        }
                                                        className="bg-green-500 text-white rounded-md mt-2"
                                                    >
                                                        <a>Completed</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center my-10">
                    <img src={empty} alt="No bookings" />
                </div>
            )}
        </div>
    );
};

export default Service_to_do;
