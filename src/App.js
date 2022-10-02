import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "antd/dist/antd.css";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import RenderRouter from './routes';

function App() {
	return (
	<BrowserRouter>
		<RenderRouter />
		
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
	</BrowserRouter>
	);
}

export default App;
