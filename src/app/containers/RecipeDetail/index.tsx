import { Button, Rate } from 'antd'
import React from 'react'

const key = "recipeDetail"

function ReciprDetail() {
    return (
        <div className="food-container">
            <h1>Easy Pancakes</h1>
            <div className="">
                <Rate disabled allowHalf value={4} />
                <div className="">1000 ratings</div>
                <div>This recipe doesn't require much thought early in the morning, and tastes great!</div>
                <div>Recipe by Sharon Holt</div>
                <div>
                    <div>
                        <Button>Save</Button>
                    </div>
                    <div>
                        <Button>Rate</Button>
                    </div>
                    <div>
                        <Button>Share</Button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src=""/>
                </div>
                <div className="recipe-time">
                    <div className="recipe-time-detail">
                        <div>
                            <div className="time-title">Prep Time</div>
                            <div>5p</div>
                        </div>
                        <div>
                            <div className="time-title">Cook Time</div>
                            <div>5p</div>
                        </div>
                        <div>
                            <div className="time-title">Total Time</div>
                            <div>5p</div>
                        </div>
                        <div>
                            <div className="time-title">Servings</div>
                            <div>5p</div>
                        </div>
                        <div>
                            <div className="time-title">Yield</div>
                            <div>4 servings</div>
                        </div>
                    </div>
                </div>
                <div className="ingredient-container">
                    <h2>Ingredients</h2>
                    <ul className="ingredient-list">
                        <li>1 cup all-purpose flour</li>
                        <li>1 cup all-purpose flour</li>
                        <li>1 cup all-purpose flour</li>
                        <li>1 cup all-purpose flour</li>
                        <li>1 cup all-purpose flour</li>
                        <li>1 cup all-purpose flour</li>
                    </ul>
                </div>
                <div className="step-container">
                    <h2>Directions</h2>
                    <ol className="step-list">
                        <li>In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.</li>
                        <li>In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.</li>
                        <li>In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.</li>
                    </ol>
                </div>
                <div className="nutrition-container">
                    <h2>Nutrition Facts</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>247</td>
                                <td>Calories</td>
                            </tr>
                            <tr>
                                <td>247</td>
                                <td>Fat</td>
                            </tr>
                            <tr>
                                <td>247</td>
                                <td>Carbs</td>
                            </tr>
                            <tr>
                                <td>247</td>
                                <td>Protein</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="review-container">
                    <h2>Reviews (1,466)</h2>
                </div>
            </div>
        </div>
    )
}

export default ReciprDetail