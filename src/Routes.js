import React from "react";
import { Route, Redirect, Routes } from "react-router";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function AppRoutes() {
	return (
		<Routes>
			<Route path="*" element={<LoginPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/home" element={<HomePage />} />
		</Routes>
	);
}

export default AppRoutes;