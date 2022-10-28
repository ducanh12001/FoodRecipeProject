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

function HeaderComponent(props: any) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const { user, isLogged, device } = useSelector(stateSelector);

	const onLogout = () => dispatch(logoutAction());

	const menu = (
		<Menu>
			<Menu.Item key="1" onClick={() => navigate('/account/profile')}>
				<span>
					<UserOutlined />
					<span
						tabIndex={0}
						aria-hidden="true"
						role="button"
					>
						Profile
					</span>
				</span>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="2" onClick={() => navigate('/account/add-recipe')}>
				<span>
					<PlusCircleOutlined />
					<span
						tabIndex={0}
						aria-hidden="true"
						role="button"
					>
						Add recipe
					</span>
				</span>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3" onClick={onLogout}>
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

	const onSearch = (value: string) => console.log(value);

	const toLogin = () => {
		navigate('/login');
	};

	const toHomepage = () => {
		navigate('/');
	}
	useEffect(() => {

	}, [dispatch])

	return (
		<Affix offsetTop={0}>
			<Header className="layout-page-header">
				<div className='logo' onClick={toHomepage}>
					<h2><b>FoodRecipeProject</b></h2>
				</div>
				<Menu
					style={{ flex: 2 }}
					mode="horizontal"
					items={[
						{
							label: <Link className="item-link" to="">DINNERS</Link>,
							key: "1"
						},
						{
							label: <Link className="item-link" to="/recipe-type">RECIPES</Link>,
							key: "2"
						},
						{
							label: <Link className="item-link" to="">FOOD NEWS</Link>,
							key: "3"
						},
						{
							label: <Link className="item-link" to="">COCKTAILS</Link>,
							key: "4"
						},
						{
							label: <Link className="item-link" to="">TIPS & TOOLS</Link>,
							key: "5"
						},
					]}
				/>
				<div className="layout-page-header-main">
					<div className="actions">
						{isLogged ? (
							<Dropdown overlay={menu} trigger={['click']}>
								<span className="user-action">
									<UserOutlined className='profile-icon' />
								</span>
							</Dropdown>
						) : (
							<span
								aria-hidden="true"
								style={{ cursor: 'pointer' }}
								onClick={toLogin}
								className="login-action"
							>
								SIGN IN
							</span>
						)}
					</div>
				</div>
			</Header>
		</Affix>
	);
}

export default HeaderComponent;
