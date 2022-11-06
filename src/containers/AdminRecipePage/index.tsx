import React, { useEffect, useState } from 'react';
import { Input, Card } from 'antd';

import AdminTableWrapper from '../../components/AdminTableWrapper'

interface RecipeDataType {
  key: string;
  recipename: string;
  author: string;
  link: string;
};

function AdminRecipePage() {
	const columns = ['RecipeName', 'Author', 'Link']; //The column names here lowercased also act as dataIndex
	
	const mockData: RecipeDataType[] = [
		{
			key: '1',
			recipename: 'Chicken Dish',
			author: 'A',
			link: 'link 1',
		},
	];
	
	const onDelete = () => {};
	const onSearch = () => {};
	
	return (
		<Card style={{width: '75vw', margin: 'auto', marginTop: '2vh'}}>
			<Input.Search
			placeholder=" Search"
			onSearch={onSearch}
			style={{marginBottom: '2vh'}} />
			
			<AdminTableWrapper
			columns={columns}
			data={mockData}
			onDelete = {onDelete} />
		</Card>
	);
};

export default AdminRecipePage;