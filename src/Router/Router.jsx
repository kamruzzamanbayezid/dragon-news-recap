import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivateRoute from "../Routes/PrivateRoute";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/news/:id',
                        element: <PrivateRoute><NewsPage /></PrivateRoute>,
                        loader: () => fetch('/data/news.json')
                  }
            ],
      }
]);

export default router;