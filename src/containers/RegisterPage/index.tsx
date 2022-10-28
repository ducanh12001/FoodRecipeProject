/**
 *
 * Register Page
 *
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import reducer from './reducer';
import saga from './saga';
import RegisterForm from './registerForm';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'antd';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import { makeLoggedInUserSelector } from '../App/selectors';

const key = 'register';

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(stateSelector);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {

  }, [user]);

  return (
    <div className="register-page">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Row className="register-center">
        <Col xl={24} lg={10} md={10} xs={16} className="m-auto">
          <RegisterForm />
        </Col>
      </Row>
    </div>
  );
}
