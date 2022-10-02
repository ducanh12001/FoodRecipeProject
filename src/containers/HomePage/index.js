import React, { useState } from "react";

import "./style.css";
import RecipeCard from "../../components/RecipeCard";
import Header from "../../components/Header";

function HomePage() {
	
	return (
	<div>
		<Header />
		
		<div className="category-block following">
			<div>
				<h2><b>Following user recipe</b></h2>
				
				<div className="recipe-block" style={{display: 'flex', flexDirection: 'row'}}>
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
				
				<div className="recipe-block" style={{display: 'flex', flexDirection: 'row'}}>
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
				
				<div className="recipe-block" style={{display: 'flex', flexDirection: 'row'}}>
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

export default HomePage;

