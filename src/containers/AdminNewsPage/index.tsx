import React, { useEffect, useState } from 'react';
import { Input, Card, Button } from 'antd';

import AdminTableWrapper from '../../components/AdminTableWrapper'

interface NewsDataType {
  key: string;
  newsname: string;
  author: string;
  link: string;
};

function AdminNewsPage() {
	const columns = ['NewsName', 'Author', 'Link']; //The column names here lowercased also act as dataIndex
	
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
	const onAddNews = () => {};
	
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
		</Card>
	);
};

export default AdminNewsPage;