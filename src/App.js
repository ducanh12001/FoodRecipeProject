import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import './App.css';
import AppRoutes from './Routes.js'

function App() {
	return (
	<BrowserRouter>
		<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
		/>
		
		<div>
			<AppRoutes />
		</div>
	</BrowserRouter>
	);
}

export default App;
