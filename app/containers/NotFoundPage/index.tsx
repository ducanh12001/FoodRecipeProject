/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/NotFoundPage/messages';
import { Button, Result } from 'antd';
import history from 'utils/history';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const clickBack = () => navigate('/home');
  return (
    <div className="mh-100">
      <Result
        status="404"
        title={<FormattedMessage {...messages.header} />}
        subTitle={<FormattedMessage {...messages.message} />}
        extra={
          <Button type="primary" onClick={clickBack}>
            <FormattedMessage {...messages.back} />
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
