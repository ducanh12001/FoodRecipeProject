import React, { useState } from "react";
import { Menu } from "antd";

import "./style.css";
import RecipeCard from "../../components/RecipeCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function getItem(label, key, icon, children, type) {
	return {
	key,
	icon,
	children,
	label,
	type,
	};
}

const items = [
	getItem('Your posts', '1'),
	getItem('Bookmarked posts', '2'),
	getItem('Personal Info', '3'),
];

function Users() {
	
	return (
	<div>
		<Header />
		
		<div className='profile-page'>
			<div style={{flex: 1}}>
				<Menu
				defaultSelectedKeys={['1']}
				mode="inline"
				items={items}
				/>
			</div>
			
			<div style={{flex: 3}}>
				Profile content
			</div>
		</div>
		
		<Footer />
	</div>
	);
}

export default Users;

