import { createBrowserRouter } from "react-router-dom";
import Root_Page from "../pages/Major_Pages/Root_Page";
import Home_Page from "../pages/Major_Pages/Home_Page";
import Login_Page from "../pages/Major_Pages/Login_Page";
import generateRoutes from "../utils/Generate_Routes";
import { adminRoutes } from "./admin.routes";
import Base_Layout from "../pages/Major_Pages/Base_Layout";
import {  userRoutes } from "./user.routes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root_Page />,
        children: [
            {
                index: true,
                element: <Home_Page />
            }
        ]
    },
    {
        path: '/admin',
        element: <Base_Layout />,
        children: generateRoutes(adminRoutes)
    },
    {
        path: '/user',
        element: <Base_Layout />,
        children: generateRoutes(userRoutes)
    },
    {
        path: '/login',
        element: <Login_Page />
    }
])


export default router;