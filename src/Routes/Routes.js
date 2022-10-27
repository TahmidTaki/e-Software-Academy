import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import CheckOut from "../Pages/Protected/CheckOut";
import CheckOutPage from "../Pages/Protected/CheckOutPage";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/checkout",
        element: (
          <CheckOut>
            <CheckOutPage></CheckOutPage>
          </CheckOut>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <CheckOut>
            <CheckOutPage></CheckOutPage>
          </CheckOut>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
