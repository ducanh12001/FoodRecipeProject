import { Layout } from 'antd'
import React from 'react'
import HeaderComponent from '../Header'

const { Sider, Content } = Layout;

function LayoutPage() {
  return (
    <Layout>
        <HeaderComponent />
        <Layout>
            <Content>

            </Content>
        </Layout>
    </Layout>
  )
}

export default LayoutPage