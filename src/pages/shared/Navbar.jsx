import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const dashboardDropdown = (
        <ul className="p-2 font-semibold">
            <li><NavLink to="/add_service">Add Service</NavLink></li>
            <li><NavLink to="/manage_service">Manage Service</NavLink></li>
            <li><NavLink to="/booked_services">Booked-Services</NavLink></li>
            <li><NavLink to="/service_to_do">Service-To-Do</NavLink></li>
        </ul>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
                    >
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/all_services">All Services</NavLink>
                        </li>
                        <li>
                            <a>Dashboard</a>
                            {dashboardDropdown}
                        </li>
                    </ul>
                </div>
                <Link to="/" className="font-extrabold text-3xl text-[#124076]">Educator.org</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all_services">All Services</NavLink>
                    </li>
                    <li>
                        <details>
                            <summary>Dashboard</summary>
                            {dashboardDropdown}
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end ">
                <Link className="cursor-pointer md:px-4 px-2 py-2 rounded-full bg-[#124076] text-white font-semibold" to="/login">Login/Registration</Link>
            </div>
        </div>
    );
};

export default Navbar;
