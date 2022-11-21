import React, { useEffect, useState } from 'react';
import { Input, Card, Button } from 'antd';

import AdminTableWrapper from '../../components/AdminTableWrapper';
import AddRecipeModal from './AddRecipeModal';

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
	
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	
	const onDelete = () => {};
	const onSearch = () => {};
	const onAddRecipe = () => {showModal()};
	
	return (
		<Card style={{width: '75vw', margin: 'auto', marginTop: '2vh'}}>
			<div style={{marginBottom: '2vh', display: 'flex'}}>
				<Input.Search
				placeholder=" Search"
				onSearch={onSearch}
				style= {{flex: 6, marginRight: '2vw'}} />
			
				<Button
				type="primary"
				style={{flex: 1}}
				onClick={onAddRecipe}>
					Add Recipe
				</Button>
			</div>
			
			<AdminTableWrapper
			columns={columns}
			data={mockData}
			onDelete = {onDelete} />
			
			<AddRecipeModal
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel} />
		</Card>
	);
};

export default AdminRecipePage;