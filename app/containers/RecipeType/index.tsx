import { Breadcrumb, Card, Image, Layout, List, Menu, Rate, Typography } from 'antd'
import React from 'react'
import { ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import messages from 'containers/RecipeType/messages';
import { FormattedMessage } from 'react-intl';

function RecipeType() {

    return (
        <>
            <FormattedMessage {...messages.helmetTitle}>
				{(title) => (
				  <Helmet>
					<title>{title}</title>
				  </Helmet>
				)}
			</FormattedMessage>
            <div className="recipe-type">
                <div className="recipe-type-header">
                    <img className="title-image" src="" />
                </div>
                <div className="recipe-type-title">
                    <h1><FormattedMessage {...messages.recipes} /></h1>
                    <div className="description"><FormattedMessage {...messages.description} /></div>
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