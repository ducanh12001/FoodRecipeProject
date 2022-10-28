// @ts-nocheck
import React, { useState } from "react";
import { Menu, Tabs } from "antd";
import ChangePassword from "../ChangePassword";
import { Helmet } from "react-helmet";
import PersonInfo from "./personInfo";
import YourRecipe from "./yourRecipe";

function getItem(label:any, key:any, icon:any, children:any, type:any) {
	return {
	key,
	icon,
	children,
	label,
	type,
	};
}

const items = [
	getItem('Personal Info', '3'),
	getItem('Your recipes', '1'),
	getItem('Bookmarked posts', '2'),
];

function Profile() {
	
	return (
		<>
		<Helmet>
            <title>Profile - Page</title>
        </Helmet>
		
		<div className='profile-page'>
			<Tabs
				tabPosition="left"
				items={[
					{
						key: '1',
						label: 'Personal Info',
						children: <PersonInfo />,
					},
					{
						key: '2',
						label: 'Your recipes',
						children: <YourRecipe />,
					},
					{
						key: '3',
						label: 'Change Password',
						children: <ChangePassword />,
					}
				]}
			/>
		</div>
		</>
	);
}

export default Profile;