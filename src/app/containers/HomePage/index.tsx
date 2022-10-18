import { Button, Card, Image, Rate } from 'antd';
import React from 'react'
import HeaderComponent from '../../components/Header';
import { PushpinOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home.css'

function RecipeCard({ image, title, rating }: any) {
  const navigate = useNavigate();

  return (
    <div style={{position: 'relative'}}>
      <Card
        style={{ width: 200, borderRadius: 5 }}
        cover={<Image src={require(`../../assets/images/${image}`)} preview={false} />}
        onClick={() => navigate('/recipe-list')}
        hoverable={true}
      >
        <Card.Meta
          title={title}
          description={
            <Rate disabled allowHalf defaultValue={rating} />
          } />
      </Card>

      <Button
        className="bookmark-button"
        type="primary"
        shape="circle"
        icon={<PushpinOutlined />}
        onClick={() => console.log('bookmarked')}
        style={{position: 'absolute',}}
      />
    </div>
  );
};

function HomePage() {
  return (
    <div>
      <HeaderComponent />
      <div className="category-block following">
        <div>
          <h2><b>Following user recipe</b></h2>

          <div className="recipe-block" style={{ display: 'flex', flexDirection: 'row' }}>
            <RecipeCard
              image='spaghetti.png'
              title='Spaghetti'
              rating={2.0}
            />
            <RecipeCard
              image='spaghetti.png'
              title='Spaghetti'
              rating={2.0}
            />
          </div>
        </div>
        <div className="category-block trending">
          <h2><b>Trending recipe</b></h2>
          <div className="recipe-block" style={{ display: 'flex', flexDirection: 'row' }}>
            <RecipeCard
              image='spaghetti.png'
              title='Spaghetti'
              rating={2.0}
            />

            <RecipeCard
              image='spaghetti.png'
              title='Spaghetti'
              rating={2.0}
            />
          </div>
        </div>

        <div className="category-block new">
          <h2><b>New recipe</b></h2>

          <div className="recipe-block" style={{ display: 'flex', flexDirection: 'row' }}>
            <RecipeCard
              image='spaghetti.png'
              title='Spaghetti'
              rating={2.0}
            />

            <RecipeCard
              image='spaghetti.png'
              title='Spaghetti'
              rating={2.0}
            />
          </div>
        </div>
      </div>

      <div>
        Footer
      </div>
    </div>
  );
}

export default HomePage