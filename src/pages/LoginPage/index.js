import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import axios from "axios";

import "./style.css";

function LoginPage() {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: ""
	});
	
	const login = () => {
		console.log(userInfo);
		
		axios.post('http://13.215.176.20:3000/api/auth/login', userInfo).then((res) => console.log(res));
		//if res === 200, redirect
	}
	
	
	return (
	<div>
		<div
		className="background_image"
		style={{backgroundImage: "url(/login_wallpaper.png)", flexDirection: 'column'}}
		>
			<div style={{flex: 1}}></div>
			
			<div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
				<div style={{flex: 1}}></div>
				
				<Card style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
					<Form layout="vertical">
						<div style={{flex: 1, textAlign: 'center'}}>
							<h1><b>FoodRecipeProject</b></h1>
						</div>
						
						<Form.Item
						name="email"
						label="Email"
						rules={[{required: true, message: 'Email is required'}]}
						style={{flex: 1}}
						>
							<Input
							onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
							/>
						</Form.Item>
						
						<Form.Item
						name="password"
						label="Password"
						rules={[{required: true, message: 'Password is required'}]}
						style={{flex: 1}}
						>
							<Input.Password
							onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
							/>
						</Form.Item>
						
						<div style={{flex: 1}}>
							<Form.Item>
								<Button
								type="primary"
								htmlType="submit"
								style={{display: "flex", marginLeft: "auto", marginRight: "auto", alignItems: "center"}}
								onClick={login}
								>
									Login
								</Button>
							</Form.Item>
							
							<Form.Item>
								<Button
								style={{display: "flex", marginLeft: "auto", marginRight: "auto", alignItems: "center"}}
								>
									<GoogleOutlined />
									Login with Google
								</Button>
							</Form.Item>
						</div>
						
						<div style={{flex: 1, textAlign: 'center'}}>
							<u>Sign up</u>
						</div>
					</Form>
				</Card>
				
				<div style={{flex: 1}}></div>
			</div>
			
			<div style={{flex: 1}}></div>
		</div>
	</div>
	);
}

export default LoginPage

