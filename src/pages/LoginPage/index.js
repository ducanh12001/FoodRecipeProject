import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

function LoginPage() {
	return (
	<div style={{}}>
		<div style={{ backgroundImage: "url(/login_wallpaper.png)", display: "flex", justifyContent: "center", height: "100%", backgroundSize: "cover"}}>
			<Card style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
				<Form>
					<div>
						<h1><b>FoodRecipeProject</b></h1>
					</div>
					
					<Form.Item label="Email" rules={[{required: true, message: 'Email is required'}]}>
						<Input />
					</Form.Item>
					
					<Form.Item label="Password" rules={[{required: true, message: 'Password is required'}]}>
						<Input.Password />
					</Form.Item>
					
					<Form.Item>
						<Button type="primary" htmlType="submit" style={{display: "flex", marginLeft: "auto", marginRight: "auto", alignItems: "center"}}>
							Login
						</Button>
					</Form.Item>
					
					<Form.Item>
						<Button style={{display: "flex", marginLeft: "auto", marginRight: "auto", alignItems: "center"}}>
							<GoogleOutlined />
							Login with Google
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
		</div>
	);
}

export default LoginPage

