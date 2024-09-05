
import Card_Cancel from "../pages/User_Pages/Card_Cancel";
import Card_History from "../pages/User_Pages/Card_History";
import Card_Request from "../pages/User_Pages/Card_Request";
import Student_Profile from "../pages/User_Pages/User_Profile";


export const userRoutes = [
    {
        name: 'Profile',
        path: 'profile',
        element: <Student_Profile />,
    },
    {
        name: 'Transport Management',
        children: [
            {
                name: 'Card Request',
                path: 'card-req',
                element: <Card_Request />,
            },
            {
                name: 'Card History',
                path: 'card-history',
                element: <Card_History />,
            },
            {
                name: 'Card Cancel',
                path: 'card-cancel',
                element: <Card_Cancel />,
            },
        ],
    },
];