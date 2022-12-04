import { HeartOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd'
import icons from 'assets/images/icons/IconAll';
import { makeRecipesSelector } from 'containers/RecipeHome/selectors';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import messages from 'containers/Profile/messages';
import { FormattedMessage } from 'react-intl';

const { Title } = Typography;
const stateSelector = createStructuredSelector({
	recipes: makeRecipesSelector()
});

function MyRecipe() {
  const { recipes } = useSelector(stateSelector);
  const navigate = useNavigate();


  return (
    <>
      <FormattedMessage {...messages.myRecipe}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <div className="love-recipe">
        <Title><FormattedMessage {...messages.myRecipe} /></Title>
        <div >
          <Row gutter={[32, 32]}>
            {recipes.data?.filter((r:any) => r.author_id === localStorage.getItem('USER_ID'))
                          .map((d: any, index: number) => (
              <Col key={index} onClick={() => navigate(`/recipe-detail/${d._id}`)}
                xs={24}
                sm={24}
                md={12}
                lg={8}
              >
                <Card
                  hoverable
                  cover={d.pictures[0] ?
                    <img style={{ height: 150, objectFit: 'cover' }} src={d.pictures[0]} />
                    :
                    <img style={{ height: 150, objectFit: 'cover' }} src={require('../../assets/images/NoImageAvailable.jpg')} />
                  }
                >
                  <Card.Meta title={d.name} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}

export default MyRecipe