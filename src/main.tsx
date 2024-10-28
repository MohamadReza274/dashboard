import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/ErrorPage.tsx";
import HomePage from "./routes/HomePage.tsx";
import Layout from "./routes/Layout.tsx";
import StudentDetails from "./routes/StudentDetails.tsx";
import StudentsPage from "./routes/StudentsPage.tsx";
import ProfilePage from "./routes/ProfilePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "/profile", element: <ProfilePage/>},
            {
                path: "/students", element: <StudentsPage/>, children: [
                    {path: "/students/:id", element: <StudentDetails/>}
                ]
            }
        ],
        errorElement: <ErrorPage/>,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
