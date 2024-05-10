import Main from "../layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services";
import Add_service from "../pages/Add_service/Add_service";
import Manage_service from "../pages/Manage_service/Manage_service";
import Booked_services from "../pages/Booked_services/Booked_services";
import Service_to_do from "../pages/Service_to_do/Service_to_do";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/add_service",
                element: <Add_service></Add_service>
            },
            {
                path: "/manage_service",
                element: <Manage_service></Manage_service>
            },
            {
                path: "/booked_services",
                element: <Booked_services></Booked_services>
            },
            {
                path: "/service_to_do",
                element: <Service_to_do></Service_to_do>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
          
           
        ]
    }
])