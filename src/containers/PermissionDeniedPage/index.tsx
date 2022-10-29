/**
 * PermissionDeniedPage
 *
 * This is the page we show when the user visits a url that doesn't have permission to a route
 */
import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';


const PermissionDeniedPage = () => {
  const navigate = useNavigate();
  const clickBack = () => navigate('/login');
  return (
    <div className="mh-100">
      <Result
        status="403"
        title=""
        subTitle=""
        extra={
          <Button type="primary" onClick={clickBack}>
            Back
          </Button>
        }
      />
    </div>
  );
};

export default PermissionDeniedPage;
