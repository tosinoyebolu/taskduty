import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import MyTask from "../pages/myTasks/MyTask";
import NewTask from "../pages/newTask/NewTask";
import AllTask from "../pages/allTasks/AllTask";
import Login from "../pages/login/Login";

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "my-tasks",
          element: <MyTask />,
        },
        {
          path: "new-task",
          element: <NewTask />,
        },
        {
          path: "all-task",
          element: <AllTask />,
        },
        {
          path: "login",
          element: <Login/>
        }
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
