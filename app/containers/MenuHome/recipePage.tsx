import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { queryRecipesAction } from './actions';
import { makeRecipesSelector } from './selectors';
import { Helmet } from 'react-helmet';
import PageCommonWrapper from 'components/PageCommonWrapper';
import messages from './messages';
import { Col, Image, Row, Typography } from 'antd';

import { FormattedMessage } from 'react-intl';

const { Title } = Typography;
const key = 'menuHome';

const stateSelector = createStructuredSelector({
  recipes: makeRecipesSelector()
});

function RecipePage() {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();
  const { recipes } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(queryRecipesAction())
  }, []);

  return (
    <>
      <FormattedMessage {...messages.recipeHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageCommonWrapper
        title={messages.recipes}
        imageSrc='recipesImage.jpg'
        description={messages.recipesDescription}
      >
        <div className="content-box">
          <div className="content-title">
            <h2 className="title"><FormattedMessage {...messages.mostPopular} /></h2>
            <span><FormattedMessage {...messages.mostPopularDescription} /></span>
          </div>
          <Row gutter={[24, 16]}>
            {
              recipes.data.map((d: any) => (
                <Col key={d._id} className="content-item"
                  xs={24} 
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                >
                  <Link to={`/recipe-detail/${d._id}`} >
                    <Row gutter={[16, 16]} className="flex-center">
                      <Col span={12}
                      >
                      {d.pictures[0] ?
                        <Image src={d.pictures[0]} />
                        :
                        <img src={require('../../assets/images/NoImageAvailable.jpg')} />
                      }
                      </Col>
                      <Col span={12}>{d.name}</Col>
                    </Row>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </div>
        <div className="content-box">
          <Title><FormattedMessage {...messages.diet} /></Title>
          <span><FormattedMessage {...messages.dietDescription} /></span>
          <div>
            {

            }
          </div>
        </div>
      </PageCommonWrapper>
    </>
  )
}

export default RecipePage