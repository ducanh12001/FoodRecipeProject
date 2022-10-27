import React, { useState } from "react";
import {  } from 'antd';
import { FacebookFilled, YoutubeFilled, TwitterSquareFilled } from '@ant-design/icons';

import "../../assets/styles/footer.css";

function FooterComponent() {
	return (
		<div className='container footer'>
			<div className='footer-left' style={{flex: 1}}>
				<div style={{flex: 1}}>
					<h2><b>FoodRecipeProject</b></h2>
				</div>
				
				<div style={{flex: 1}}>
					Follow us
					
					<div className='social-icons'>
						<FacebookFilled />
						<YoutubeFilled />
						<TwitterSquareFilled />
					</div>
				</div>
			</div>
			
			<div className='footer-right' style={{flex: 1}}>
				<div className='footer-links' style={{flex: 1}}>
					<div>
						<b>Trending</b>
					</div>
					<div>
						<b>New</b>
					</div>
					<div>
						<b>Following</b>
					</div>
				</div>
				
				<div className='footer-credit' style={{flex: 1}}>
					<p>A project by FoodRecipeProject group</p>
				</div>
			</div>
		</div>
	);
}

export default FooterComponent;