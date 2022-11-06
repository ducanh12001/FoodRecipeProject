import React, { useEffect, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function AdminTableWrapper(props: any) {
	const {columns, data, onDelete} = props;
	
	const tableColumn: ColumnsType<any> = columns.map((column: string) => (
		{
			title: column,
			dataIndex: column.toLowerCase(),
		}
	));
	
	tableColumn.push(
		{
			title: 'Action',
			dataIndex: '',
			render: () => <DeleteOutlined onClick={onDelete} />,
		}
	);
	
	return (
		<>
			<Table columns={tableColumn} dataSource={data} />
		</>
	);
};

export default AdminTableWrapper;