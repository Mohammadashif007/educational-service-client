import { Helmet } from "react-helmet-async";
import ManageData from "../../components/ManageData";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Manage_service = () => {
    const { user } = useAuth();
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch(
            `https://education-server-eight.vercel.app/services?email=${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setServiceData(data));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://education-server-eight.vercel.app/services/${id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        const remaining = serviceData.filter(
                            (x) => x._id !== id
                        );
                        setServiceData(remaining);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>Manage Service</title>
            </Helmet>
            <div className="overflow-x-auto px-12 bg-gray-300">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold text-[16px] text-black">
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Instructor Name</th>
                            <th>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceData.map((data) => (
                            <ManageData
                                key={data._id}
                                data={data}
                                handleDelete={handleDelete}
                            ></ManageData>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage_service;
