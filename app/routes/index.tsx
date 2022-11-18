import React from 'react';
import Layout from 'components/Layout';
import ChangePassword from 'containers/ChangePassword';
import ForgotPassword from 'containers/ForgotPassword/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RecipeHome from 'containers/RecipeHome/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PrivateRoute from 'containers/PrivateRoute';
import Profile from 'containers/Profile/Loadable';
import PublicRoute from 'containers/PublicRoute';
import RegisterPage from 'containers/RegisterPage/Loadable';
import ResetPassword from 'containers/ResetPassword/Loadable';
import UserAccount from 'containers/UserAccount/Loadable';
import VerifyAccount from 'containers/VerifyAccount/Loadable';
import { useRoutes } from 'react-router-dom';
import RecipeType from 'containers/RecipeType';
import RecipeList from 'containers/RecipeList';
import RecipeDetail from 'containers/RecipeDetail';
import LoveRecipe from 'containers/LoveRecipe';
import CreateRecipe from 'containers/RecipeHome/createRecipe';
import DinnerPage from 'containers/MenuHome/dinnerPage';
import NewsPage from 'containers/MenuHome/newsPage';
import ToolPage from 'containers/MenuHome/toolPage';
import RecipePage from 'containers/MenuHome/recipePage';

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
    path: 'reset/:code',
    element: (
      <PublicRoute>
        <ResetPassword />
      </PublicRoute>
    ),
  },
  {
    path: 'verify/:code',
    element: (
      <PublicRoute>
        <VerifyAccount />
      </PublicRoute>
    ),
  },
  {
    path: '',
    element: (
      <PublicRoute>
        <Layout />
      </PublicRoute>
    ),
    children: [
      {
        path: '/',
        element: (
          <PublicRoute>
            <RecipeHome />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: '',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/account-setting',
        element: (
          <PrivateRoute
            path="/account-setting"
          >
            <UserAccount />
          </PrivateRoute>
        ),
      },
      {
        path: '/change-password',
        element: (
          <PrivateRoute
            path="/change-password"
          >
            <ChangePassword />
          </PrivateRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute
            path="/profile"
          >
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/home',
        element: (
          <PrivateRoute
            path="/home"
          >
            <RecipeHome />
          </PrivateRoute>
        ),
      },
      {
        path: '/recipe-list',
        element: (
          <PrivateRoute
            path="/recipe-list"
          >
            <RecipeList />
          </PrivateRoute>
        ),
      },
      {
        path: '/recipe-detail/:id',
        element: (
          <PrivateRoute
            path="/recipe-detail"
          >
            <RecipeDetail />
          </PrivateRoute>
        ),
      },
      {
        path: '/create-recipe',
        element: (
          <PrivateRoute
            path="/create-recipe"
          >
              <CreateRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: '/saved-recipe',
        element: (
          <PrivateRoute
            path="/saved-recipe"
          >
              <LoveRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: '/dinners',
        element: (
          <PrivateRoute
            path="/dinners"
          >
              <DinnerPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/recipe-ideas',
        element: (
          <PrivateRoute
            path="/recipe-ideas"
          >
            <RecipePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/food-news',
        element: (
          <PrivateRoute
            path="/food-news"
          >
              <NewsPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/kitchen-tools',
        element: (
          <PrivateRoute
            path="/kitchen-tools"
          >
              <ToolPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <PublicRoute>
        <NotFoundPage />
      </PublicRoute>
    ),
  },
];

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;
