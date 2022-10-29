import { Layout } from 'antd'
import React, { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import FooterComponent from '../Footer';
import HeaderComponent from '../Header'
import LoadingIndicator from '../LoadingIndicator';

const { Sider, Content } = Layout;

function LayoutPage() {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    
  }, [navigate, location]);

  return (
    <Layout className="layout-page mh-100">
      <HeaderComponent />
      <Layout>
        <Content className="layout-page-content">
          <Suspense>
            <Outlet /> 
          </Suspense>
        </Content>
      </Layout>
      <FooterComponent />
    </Layout>
  )
}

export default LayoutPage