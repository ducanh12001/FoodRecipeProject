import { Layout } from "antd";
import { useRoutes } from "react-router-dom";
import FoodList from "../containers/RecipeList";
import HomePage from "../containers/HomePage";
import LoginPage from "../containers/LoginPage";
import PrivateRoute from "../containers/PrivateRoute";
import PublicRoute from "../containers/PublicRoute";
import RecipeDetail from "../containers/RecipeDetail";

const routes = [
    {
      path: 'login',
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },
    {
      path: '/',
      element: (
        <PublicRoute>
          <Layout>
            <HomePage />
          </Layout>
        </PublicRoute>
      ),
    },
    {
      path: 'recipe-list',
      element: (
        <PrivateRoute
          path="/recipe-list"
          method="get"
          resource="recipeList"
          defaultPermission={true}
        >
          <FoodList />
        </PrivateRoute>
      ),
    },
    {
      path: 'recipe-detail',
      element: (
        <PrivateRoute
          path="/recipe-detail"
          method="get"
          resource="recipeDetail"
          defaultPermission={true}
        >
            <RecipeDetail />
        </PrivateRoute>
      ),
    },
]

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;