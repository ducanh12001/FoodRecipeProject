import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeDinnersSelector } from './selectors';
import { queryDinnersAction } from './actions';
import { Helmet } from 'react-helmet';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import { Col, Image, Row } from 'antd';

const key = 'menuHome';

const stateSelector = createStructuredSelector({
	dinners: makeDinnersSelector()
});

function DinnerPage() {
  useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const intl = useIntl();
	const { dinners } = useSelector(stateSelector);

	useEffect(() => {
    dispatch(queryDinnersAction())
	}, []);

  return (
    <>
      <Helmet>
        <title>Dinners</title>
      </Helmet>
      <PageHeaderWrapper
        title='Weeknight Dinners'
        imageSrc = 'dinnerImage.jpg'
        description = "Don't get stuck in a dinner rut. We've got all the fun dinner ideas you could ever need."
      >
        <div className="content-box">
          <div className="content-title">
            <h2 className="title">Our best easy dinners</h2>
            <span>The whole family will give these a stamp of approval.</span>
          </div>
          <Row gutter={[24, 32]}>
            {
              dinners.data.map((d: any) => (
                <Col key={d._id} className="content-item"
                  xs={24} 
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                >
                  <Link to="" className="flex-col">
                    <div className="mb-10">
                      {d.dinner_list && d.dinner_list[0].picture ?
                        <Image src={d.dinner_list[0].picture} />
                        :
                        <img src={require('../../assets/images/NoImageAvailable.jpg')} />
                      }
                    </div>
                    <div className="item-name">{d.title}</div>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </div>
      </PageHeaderWrapper>
    </>
  )
}

export default DinnerPage