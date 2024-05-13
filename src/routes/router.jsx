import Main from "../layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Add_service from "../pages/Add_service/Add_service";
import Manage_service from "../pages/Manage_service/Manage_service";
import Booked_services from "../pages/Booked_services/Booked_services";
import Service_to_do from "../pages/Service_to_do/Service_to_do";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import All_services_page from "../pages/All_services_page/All_services_page";
import DetailsPage from "../components/DetailsPage";
import DetailsForm from "../components/DetailsForm";
import UpdateInfo from "../components/UpdateInfo";



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
                path: "/all_services_page",
                element: <All_services_page></All_services_page>
            },
            {
                path: "/add_service",
                element: <PrivateRoute><Add_service></Add_service></PrivateRoute>
            },
            {
                path: "/manage_service",
                element: <PrivateRoute><Manage_service></Manage_service></PrivateRoute>
            },
            {
                path: "/booked_services",
                element: <PrivateRoute><Booked_services></Booked_services></PrivateRoute>,
                // element:<Booked_services></Booked_services>,
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
            {
                path: '/detailsPage/:id',
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/detailsForm/:id',
                element: <PrivateRoute><DetailsForm></DetailsForm></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/updateInfo/:id',
                element: <PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            }
            
           
        ]
    }
])