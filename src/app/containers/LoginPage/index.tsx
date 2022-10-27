/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import LoginForm from './loginForm';
import saga from './saga';
import Helmet from 'react-helmet';
import { Row, Col } from 'antd';

const key = 'login';

export default function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
	<div className="login-page" style={{height: "100vh", display: "flex", flexDirection: "column"}}>
		<Helmet>
			<title>Login</title>
		</Helmet>

		<div style={{flex: 1}}></div>

		<Row justify="center" align="middle" className="login-center" style={{flex: 1}}>
			<Col xl={6} lg={10} md={10} xs={16} className="m-auto">
				<LoginForm />
			</Col>
		</Row>

		<div style={{flex: 1}}></div>
	</div>
  );
}
