import { Link } from "react-router-dom";

const ManageData = ({ data, handleDelete }) => {
    const {
        image,
        description,
        price,
        name,
        _id,
        instructor_email,
        instructor_name,
    } = data;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{instructor_name}</td>
            <th>
                <Link to={`/updateInfo/${_id}`}>
                    <button className="px-5 py-3 bg-[#124076] text-white rounded-lg">
                        Update
                    </button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="px-5 py-3 bg-red-500 text-white rounded-lg ml-3"
                >
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default ManageData;
