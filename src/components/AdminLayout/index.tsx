import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd'
import AdminHeaderComponent from '../AdminHeader';
import AdminSidebarComponent from '../AdminSidebar';

function AdminLayout() {
	
	return (
		<Layout className="layout-page mh-100">
			<AdminHeaderComponent />
			
			<Layout>
				<Layout.Sider>
					<AdminSidebarComponent />
				</Layout.Sider>
				
				<Layout.Content>
					<Outlet /> 
				</Layout.Content>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;