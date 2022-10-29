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
import { Link } from 'react-router-dom';

const key = 'login';

export default function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className="login-page">
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Row className="login-center">
        <Col xl={6} lg={10} md={10} xs={16} className="m-auto">
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}
