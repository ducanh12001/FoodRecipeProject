import { Button, Card, Image, Rate } from 'antd';
import React from 'react'
import { PushpinOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home.css'

import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';

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
        style={{position: 'absolute', top: "3%", left: "80%"}}
      />
    </div>
  );
};

function HomePage() {
  return (
	<div>
		<HeaderComponent />

		<div>
			<div className="category-block following">
				<h2><b>Following user recipe <ArrowRightOutlined /></b></h2>

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
				<h2><b>Trending recipe <ArrowRightOutlined /></b></h2>
				
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
				<h2><b>New recipe <ArrowRightOutlined /></b></h2>

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

		<FooterComponent />
	</div>
  );
}

export default HomePage