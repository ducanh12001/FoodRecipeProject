import React, { useEffect, useState } from 'react';
import { Input, Card, Button } from 'antd';

import AdminTableWrapper from '../../components/AdminTableWrapper';
import AddNewsModal from './AddNewsModal';

interface NewsDataType {
  key: string;
  newsname: string;
  author: string;
  link: string;
};

function AdminNewsPage() {
	const columns = ['NewsName', 'Author', 'Link']; //The column names here lowercased also act as dataIndex
	
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
	
	const mockData: NewsDataType[] = [
		{
			key: '1',
			newsname: '1 michel star',
			author: 'A',
			link: 'link 1',
		},
	];
	
	const onDelete = () => {};
	const onSearch = () => {};
	const onAddNews = () => {showModal()};
	
	return (
		<Card style={{width: '75vw', margin: 'auto', marginTop: '2vh'}}>
			<div style={{marginBottom: '2vh', display: 'flex'}}>
				<Input.Search
				placeholder="Search"
				onSearch={onSearch} 
				style= {{flex: 6, marginRight: '2vw'}}/>
				
				<Button
				type="primary"
				style={{flex: 1}}
				onClick={onAddNews}>
					Add News
				</Button>
			</div>
			
			<AdminTableWrapper
			columns={columns}
			data={mockData}
			onDelete = {onDelete} />
			
			<AddNewsModal
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel} />
		</Card>
	);
	
};

export default AdminNewsPage;