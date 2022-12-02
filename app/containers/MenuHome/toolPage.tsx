import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { queryToolsAction } from './actions';
import { makeToolsSelector } from './selectors';
import { Helmet } from 'react-helmet';
import PageCommonWrapper from 'components/PageCommonWrapper';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { Col, Image, Row } from 'antd';

const key = 'menuHome';

const stateSelector = createStructuredSelector({
  tools: makeToolsSelector()
});

function ToolPage() {
  useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const intl = useIntl();
	const { tools } = useSelector(stateSelector);

	useEffect(() => {
    dispatch(queryToolsAction())
	}, []);

  return (
    <>
      <FormattedMessage {...messages.toolHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageCommonWrapper
        title={messages.tips}
        imageSrc = 'toolImage.jpg'
        description = {messages.tipsDescription}
      >
        <div className="content-box">
          <div className="content-title">
            <h2 className="title">TOP-RATED SMALL APPLIANCES</h2>
            <span>We partnered with the Good Housekeeping Institute to identify the best kitchen appliances based on rigorous testing and analysis at the ​​Kitchen Appliances & Culinary Innovation Lab.</span>
          </div>
          <Row gutter={[24, 32]}>
            {
              tools.data.map((d: any) => (
                <Col key={d._id} className="content-item"
                  xs={24} 
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                >
                  <Link to={`/kitchen-tools/${d._id}`} className="flex-col">
                    <div className="mb-10">
                      <Image width='100%' height={400} preview={false} src={require('../../assets/images/tool.jpg')} />
                    </div>
                    <div>{d.title}</div>
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

export default ToolPage