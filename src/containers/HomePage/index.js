import React, { useState } from "react";
import { ArrowRightOutlined } from '@ant-design/icons';

import "./style.css";
import RecipeCard from "../../components/RecipeCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomePage() {
	
	return (
	<div>
		<Header />
		
		<div>
			<div className="category-block trending">
				<h2>
					<b>Trending recipe <ArrowRightOutlined /></b>
				</h2>
				
				<div className="recipe-block" style={{display: 'flex', flexDirection: 'row'}}>
					<RecipeCard
					image='spaghetti.png'
					title='Spaghetti'
					rating={2.0}
					tags={['noodle', 'tomato']}
					/>
					
					<RecipeCard
					image='spaghetti.png'
					title='Spaghetti'
					rating={2.0}
					tags={['noodle', 'tomato']}
					/>
				</div>
			</div>
		
			<div className="category-block following">
				<h2>
					<b>Following recipe <ArrowRightOutlined /></b>
				</h2>
				
				<div className="recipe-block" style={{display: 'flex', flexDirection: 'row'}}>
					<RecipeCard
					image='spaghetti.png'
					title='Spaghetti'
					rating={2.0}
					tags={['noodle', 'tomato']}
					/>
					
					<RecipeCard
					image='spaghetti.png'
					title='Spaghetti'
					rating={2.0}
					tags={['noodle', 'tomato']}
					/>
				</div>
			</div>
			
			<div className="category-block new">
				<h2>
					<b>New recipe <ArrowRightOutlined /></b>
				</h2>
				
				<div className="recipe-block" style={{display: 'flex', flexDirection: 'row'}}>
					<RecipeCard
					image='spaghetti.png'
					title='Spaghetti'
					rating={2.0}
					tags={['noodle', 'tomato']}
					/>
					
					<RecipeCard
					image='spaghetti.png'
					title='Spaghetti'
					rating={2.0}
					tags={['noodle', 'tomato']}
					/>
				</div>
			</div>
		</div>
		
		<Footer />
	</div>
	);
}

export default HomePage;

