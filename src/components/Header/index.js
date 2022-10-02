import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Affix } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "./style.css";

function Header() {
	const navigate = useNavigate();
	
	return(
		<Affix offsetTop={0}>
			<div className='container'>
				<div style={{flex: 1}}>
					<div className='logo' onClick={() => navigate('/home')}>
						<h2><b>FoodRecipeProject</b></h2>
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

export default Header;