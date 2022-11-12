import { Breadcrumb, Card, Image, Layout, List, Menu, Rate, Typography } from 'antd'
import React from 'react'
import { ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function RecipeType() {

    return (
        <>
            <Helmet>
                <title>Recipes</title>
            </Helmet>
            <div className="recipe-type">
                <div className="recipe-type-header">
                    <img className="title-image" src="" />
                </div>
                <div className="recipe-type-title">
                    <h1>Recipes</h1>
                    <div className="description">Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.</div>
                </div>
                <div className="recipe-type-container">
                    <div className="recipe-type-list">

                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeType