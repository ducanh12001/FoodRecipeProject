import { useRoutes } from "react-router-dom";
import "antd/dist/antd.css";
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from "../containers/LoginPage";
import HomePage from "../containers/HomePage";
import FoodList from "../containers/FoodList";
import Users from "../containers/Users";

const routes = [
    {
        path: '/login',
        element: (
            <LoginPage />
        ),
    },
	{
		path: '/home',
        element: (
            <HomePage />
        ),
	},
	{
		path: '/foodlist',
        element: (
            <FoodList />
        ),
	},
	{
		path: '/profile',
        element: (
            <Users />
        ),
	},
	{
		path: '*',
        element: (
            <HomePage />
        ),
	},
]

const RenderRouter = () =>  { return useRoutes(routes) };

export default RenderRouter;