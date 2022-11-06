import React, { useEffect, useState } from 'react';
import {
	KeyOutlined, LogoutOutlined, PlusCircleOutlined, UserOutlined
} from '@ant-design/icons';
import { Affix, Avatar, Dropdown, Input, Layout, Menu, Popover } from 'antd';
import { logoutAction } from '../../containers/App/actions';
import {
	makeDeviceSelector,
	makeIsLoadingSelector,
	makeIsLoggedSelector,
	makeLoggedInUserSelector
} from '../../containers/App/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from '../../containers/App/reducer';
import saga from '../../containers/App/saga';

const key = 'global'

const { Header } = Layout;
const { Search } = Input;

const stateSelector = createStructuredSelector({
	user: makeLoggedInUserSelector(),
	device: makeDeviceSelector(),
	isLogged: makeIsLoggedSelector(),
	isLoading: makeIsLoadingSelector(),
});

function AdminHeaderComponent(props: any) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const { user, isLogged, device } = useSelector(stateSelector);

	const onLogout = () => dispatch(logoutAction());

	const menu = (
		<Menu>
			<Menu.Item key="1" onClick={onLogout}>
				<span>
					<LogoutOutlined />
					<span
						tabIndex={0}
						aria-hidden="true"
						role="button"
					>
						Logout
					</span>
				</span>
			</Menu.Item>
		</Menu>
	);
	
	useEffect(() => {

	}, [dispatch])

	return (
		<Affix offsetTop={0}>
			<Header className="layout-page-header">
				<div className='logo'>
					<h2><b>FoodRecipeProject</b></h2>
				</div>
				
				<div className="layout-page-header-main">
					<div className="actions">
						<Dropdown overlay={menu} trigger={['click']}>
							<span className="user-action">
								<UserOutlined className='profile-icon' />
							</span>
						</Dropdown>
					</div>
				</div>
			</Header>
		</Affix>
	);
}

export default AdminHeaderComponent;
