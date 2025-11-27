import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import PtmApp from './PtmApp.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UserApp from "./UserApp.jsx";

const router = createBrowserRouter([
    {
        path: "/ptm",
        element: <PtmApp/>,
    },
    {
        path: "/ptm/user",
        element: <UserApp/>,
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
