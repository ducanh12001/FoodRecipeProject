import { Col, Layout, Row } from 'antd';
import React from 'react'
import { FacebookFilled, YoutubeFilled, TwitterSquareFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

function FooterComponent() {
  return (
    <Footer className='layout-page-footer'>
      <div className='layout-page-footer-inner'>
        <Row>
          <Col span={6}>
            <Link to="" className='logo'>FoodRecipe</Link>
          </Col>
          <Col span={6}>
            <div className='social'>
              <a className='social-icons'>
                <FacebookFilled />
              </a>
              <a className='social-icons'>
                <YoutubeFilled />
              </a>
              <a className='social-icons'>
                <TwitterSquareFilled />
              </a>
            </div>
          </Col>
        </Row>
        <Row className='footer-menu'>
          <Col span={6}>
            <Link to='' className='footer-menu-item'>Trending</Link>
          </Col>
          <Col span={6}>
            <Link to='' className='footer-menu-item'>News</Link>
          </Col>
          <Col span={6}>
            <Link to='' className='footer-menu-item'>Following</Link>
          </Col>
          <Col span={6}>
            <Link to='' className='footer-menu-item'>About us</Link>
          </Col>
        </Row>
        <Row>
          <div className='footer-copyright'>@2022 A project by FoodRecipeProject group</div>
        </Row>
      </div>
    </Footer>
  )
}

export default FooterComponent;