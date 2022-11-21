import React, { useEffect, useState } from 'react';
import { Input, Card } from 'antd';

import AdminTableWrapper from '../../components/AdminTableWrapper'

interface UsersDataType {
  key: string;
  username: string;
  link: string;
};

function AdminUsersPage() {
	const columns = ['UserName', 'Link']; //The column names here lowercased also act as dataIndex
	
	const mockData: UsersDataType[] = [
		{
			key: '1',
			username: 'John Doe',
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

export default AdminUsersPage;