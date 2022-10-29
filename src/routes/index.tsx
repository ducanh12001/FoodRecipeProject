// @ts-nocheck
import { useRoutes } from "react-router-dom";
import FoodList from "../containers/RecipeList";
import HomePage from "../containers/HomePage/Loadable";
import LoginPage from "../containers/LoginPage/Loadable";
import PrivateRoute from "../containers/PrivateRoute";
import PublicRoute from "../containers/PublicRoute";
import RecipeDetail from "../containers/RecipeDetail";
import RegisterPage from "../containers/RegisterPage";
import ForgotPassword from "../containers/ForgotPassword";
import NotFoundPage from "../containers/NotFoundPage/Loadable";
import RecipeHome from "../containers/RecipeHome";
import LayoutPage from "../components/Layout";
import RecipeList from "../containers/RecipeList";
import RecipeType from "../containers/RecipeType";
import AddRecipe from "../containers/HomePage/addRecipe";
import Profile from "../containers/Profile";

const routes = [
    {
      path: '',
      element: (
        <PublicRoute>
          <LayoutPage />
        </PublicRoute>
      ),
      children: [
        {
          path: '/',
          element: (
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          ),
        },
        {
          path: 'login',
          element: (
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          ),
        },
        {
          path: 'register',
          element: (
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          ),
        },
        {
          path: 'forgot-password',
          element: (
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          ),
        },
        {
          path: 'recipe-list',
          element: (
            <PublicRoute>
              <RecipeList />
            </PublicRoute>
          ),
        },
        {
          path: 'recipe-type',
          element: (
            <PublicRoute>
              <RecipeType />
            </PublicRoute>
          ),
        },
        {
          path: 'recipe-detail',
          element: (
            <PublicRoute>
              <RecipeDetail />
            </PublicRoute>
          ),
        },
      ]
    },
    {
      path: '',
      element: (
        <PrivateRoute method="get" resource="root" defaultPermission>
          <LayoutPage />
        </PrivateRoute>
      ),
      children: [
        {
          path: 'account/add-recipe',
          element: (
            <PrivateRoute
              path="/account"
              method="get"
              resource="recipeCreate"
              defaultPermission={true}
            >
                <AddRecipe />
            </PrivateRoute>
          ),
        },
        {
          path: 'account/profile',
          element: (
            <PrivateRoute
              path="/account"
              method="get"
              resource="profile"
              defaultPermission={true}
            >
                <Profile />
            </PrivateRoute>
          ),
        }
      ]
    },
    {
      path: '*',
      element: (
        <PublicRoute>
          <NotFoundPage />
        </PublicRoute>
      ),
    },
]

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;