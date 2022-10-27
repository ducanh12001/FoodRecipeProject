import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Affix, Menu, Dropdown, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "../../assets/styles/header.css";

function HeaderComponent() {
	const navigate = useNavigate();
	
	const { Search } = Input;
	
	const onSearch = (value:string) => console.log(value);
	
	return(
		<Affix offsetTop={0}>
			<div className='container header'>
				<div style={{flex: 1}}>
					<div className='logo' onClick={() => navigate('/')}>
						<h2><b>FoodRecipeProject</b></h2>
					</div>
				</div>
				
				<div style={{flex: 1}}>
					<div className='search'>
						<Search placeholder="Search" onSearch={onSearch} />
					</div>
				</div>
				
				<div style={{flex: 1}}>
					<div className='profile' onClick={() => navigate('/login')}>
						<UserOutlined className='profile-icon' />
					</div>
				</div>
			</div>
		</Affix>
	);
};

export default HeaderComponent;