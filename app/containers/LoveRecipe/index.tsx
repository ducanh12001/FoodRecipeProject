import { Card, Col, Row, Typography } from 'antd'
import { makeRecipesSelector } from 'containers/RecipeHome/selectors';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

const { Title } = Typography;
const stateSelector = createStructuredSelector({
	recipes: makeRecipesSelector()
});

function LoveRecipe() {
  const { recipes } = useSelector(stateSelector);
  const navigate = useNavigate();
  return (
    <div className="">
      <Title>My Recipes</Title>
      <div className="list">
        <Row gutter={[32, 32]}>
          {recipes.data?.map((d: any, index: number) => (
            <Col key={index} span={8} onClick={() => navigate(`/recipe-detail/${d._id}`)}>
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
  )
}

export default LoveRecipe