import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import PtmApp from './routes/PtmApp.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UserApp from "./routes/UserApp.jsx";
import BlogApp from "./routes/BlogApp.jsx";
import App from "./routes/App.jsx";
import BlogDetail from "./components/BlogDetail.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Register from "./routes/Register.jsx";
import Login from "./routes/Login.jsx";
import Admin from "./routes/Admin.jsx";
import CourseMgntApp from "./routes/CourseMgntApp.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/course-mgmt",
        element: <CourseMgntApp/>,
    },
    {
        path: "/ptm",
        element: <PtmApp/>,
    },
    {
        path: "/user",
        element: <UserApp/>,
    },
    {
        path: "/blog",
        children: [
            {
                index: true,
                element: <BlogApp/>
            },
            {
                path: ":blogId",
                element: <BlogDetail/>,
            }
        ]
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/admin",
        element: <Admin/>,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
