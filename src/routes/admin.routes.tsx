import Admin_Dashboard from "../pages/Admin_Pages/Admin_Dashboard";
import Create_Admin_Page from "../pages/Admin_Pages/Create_Admin_Page";
import Create_Faculty_Page from "../pages/Admin_Pages/Create_Faculty_Page";
import Create_Student_Page from "../pages/Admin_Pages/Create_Student_Page";

export const adminRoutes = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <Admin_Dashboard />,
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <Create_Student_Page />,
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <Create_Faculty_Page />,
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <Create_Admin_Page />,
            },
        ],
    },
];