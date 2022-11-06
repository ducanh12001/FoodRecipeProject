import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';

function AdminSidebarComponent() {	
	return (
		<>
			<Menu theme="dark" mode="inline">
				<Menu.Item key="1" >
					<span>
						<span
							tabIndex={0}
							aria-hidden="true"
							role="button"
						>
							Manage Recipes
						</span>
					</span>
				</Menu.Item>
				
				<Menu.Item key="2" >
					<span>
						<span
							tabIndex={1}
							aria-hidden="true"
							role="button"
						>
							Manage News
						</span>
					</span>
				</Menu.Item>
				
				<Menu.Item key="3" >
					<span>
						<span
							tabIndex={2}
							aria-hidden="true"
							role="button"
						>
							Manage Users
						</span>
					</span>
				</Menu.Item>
			</Menu>
		</>
	);
};

export default AdminSidebarComponent;