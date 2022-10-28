/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
import { Button, Result } from 'antd';
import history from '../../utils/history';

const NotFoundPage = () => {
  const clickBack = () => history.push('/');
  return (
    <div className="mh-100">
      <Result
        status="404"
        title="Page not found."
        subTitle="'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',"
        extra={
          <Button type="primary" onClick={clickBack}>
            Go Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFoundPage;
