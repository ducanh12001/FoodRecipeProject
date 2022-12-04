import React from 'react';
import moment from 'moment-timezone';
import messages from 'components/Footer/messages';
import { FormattedMessage } from 'react-intl';
import GitHubButton from 'react-github-btn';
import LocaleToggle from 'containers/LocaleToggle';
import { useLocalStorage } from 'hooks/localstorage';
import { Layout, Card, Button, Row, Col } from 'antd';
import { DownloadOutlined, FacebookFilled, SettingOutlined, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

const FooterComponent = () => {
  const currentYear = moment().get('year');

  const [showSettings, setShowSettings] = useLocalStorage(
    'settingsVisible',
    false,
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <Footer className='layout-page-footer'>
      <div className='layout-page-footer-inner'>
        <Row>
          <Col span={6}>
            <Link to="/" className='logo'>FoodRecipe</Link>
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
          <Col span={6}>
            <FormattedMessage {...messages.language} />
            <LocaleToggle />
          </Col>
        </Row>
        <Row className='footer-menu'>
          <Col span={6}>
            <Link to='' className='footer-menu-item'><FormattedMessage {...messages.trending} /></Link>
          </Col>
          <Col span={6}>
            <Link to='' className='footer-menu-item'><FormattedMessage {...messages.news} /></Link>
          </Col>
          <Col span={6}>
            <Link to='' className='footer-menu-item'><FormattedMessage {...messages.following} /></Link>
          </Col>
          <Col span={6}>
            <Link to='' className='footer-menu-item'><FormattedMessage {...messages.aboutUs} /></Link>
          </Col>
        </Row>
        <Row>
              <FormattedMessage {...messages.copyright} /> © 2021
              {`${currentYear !== 2021 ? `-${currentYear}` : ''} `}
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
