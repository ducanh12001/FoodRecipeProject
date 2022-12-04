import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { queryNewsAction } from './actions';
import { makeNewsSelector } from './selectors';
import { Helmet } from 'react-helmet';
import PageCommonWrapper from 'components/PageCommonWrapper';
import { Col, Image, Row, Typography } from 'antd';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

const key = 'menuHome';

const {Title} = Typography;

const stateSelector = createStructuredSelector({
  news: makeNewsSelector()
});

function NewsPage() {
  useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const intl = useIntl();
	const { news } = useSelector(stateSelector);

	useEffect(() => {
    dispatch(queryNewsAction())
	}, []);

  return (
    <>
      <FormattedMessage {...messages.newsHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageCommonWrapper
        title={messages.foodNews}
        imageSrc = {null}
        description={messages.foodNews}
      >
        <div className="content-box">
          <div className="content-title">
            <h2 className="title"><FormattedMessage {...messages.latestNews} /></h2>
            <span><FormattedMessage {...messages.latestNewsDescription} /></span>
          </div>
          <Row gutter={[24, 16]}>
            {
              news.data.map((d: any) => (
                <Col key={d._id} className="content-item"
                  xs={24} 
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                >
                  <Link to={`/news-detail/${d._id}`} >
                    <Row gutter={[16, 16]} className="flex-center">
                      <Col
                        span={24}
                      >
                      {d.pictures && d.pictures[0] ?
                        <Image style={{objectFit: 'cover'}} 
                          width='100%' 
                          height={350} 
                          src={d.pictures[0]} 
                          preview={false}
                        />
                        :
                        <img src={require('../../assets/images/NoImageAvailable.jpg')} />
                      }
                      </Col>
                      <Col span={24}>{d.title}</Col>
                    </Row>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </div>
      </PageCommonWrapper>
    </>
  )
}

export default NewsPage