import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image, Card, Rate, Tag } from 'antd';
import { PushpinOutlined } from '@ant-design/icons';

import "./style.css";

function RecipeCard({image, title, rating, tags}) {
	const navigate = useNavigate();
	
	return(
		<div className='container recipe-card'>
			<Card
			style={{width: 200, borderRadius: 5}}
			cover={<Image src={require(`../../assets/images/${image}`)} preview={false} />}
			onClick={() => navigate('/foodlist')}
			hoverable={true}
			>
				<Card.Meta
				title={title}
				description={
					<Rate disabled allowHalf defaultValue={rating} />
				} />
				<div style={{marginTop: 5}}>
				{tags.map((tag) => <Tag>{tag}</Tag>)}
				</div>
			</Card>
			
			<Button
				className="bookmark-button"
				type="primary"
				shape="circle"
				icon={<PushpinOutlined />}
				onClick={() => console.log('bookmarked')}
			/>
		</div>
	);
};

export default RecipeCard