import { Breadcrumb, Card, Image, Layout, List, Menu, Rate, Typography } from 'antd'
import React, { useEffect } from 'react'
import saga from 'containers/RecipeList/saga';
import reducer from 'containers/RecipeList/reducer';
import { ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { makeRecipesSelector } from './selectors'
import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { queryRecipesAction } from './actions'
import messages from 'containers/RecipeList/messages';
import { FormattedMessage } from 'react-intl';

const key = "recipeList"

const stateSelector = createStructuredSelector({
	recipes: makeRecipesSelector()
});

function RecipeList() {

    useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
	const intl = useIntl();
	const { recipes } = useSelector(stateSelector);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(queryRecipesAction())
	}, []);
    
    return (
        <div className="recipe-type">
            <div className="recipe-type-header">
                <img className="title-image" src="" />
            </div>
            <div className="recipe-type-title">
                <h1><FormattedMessage {...messages.recipes} /></h1>
                <div className="description"><FormattedMessage {...messages.description} /></div>
            </div>
            <div className="food-container">
                <List
                    grid={{
                        gutter: 20,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 3,
                        xl: 4,
                        xxl: 4
                    }}
                    dataSource={recipes.data}
                    renderItem={(dish:any, index:any) => {
                        return (
                            <List.Item>
                                <Card
                                    cover={
                                        <Link to='/recipe-detail'>
                                            {dish.pictures[0] ?
											<img src={dish.pictures[0]} />
											:
											<img src={require('../../assets/images/NoImageAvailable.jpg')} />
										}
                                        </Link>
                                    }
                                    className="recipe-card"
                                    size='small'
                                    bodyStyle={{height: '140px'}}
                                >
                                    <Link to='/recipe-detail'>
                                        <Typography.Title level={3} className="dish-name">{dish.name}</Typography.Title>
                                    </Link>
                                    <div className="recipe-detail">
                                        <Rate disabled allowHalf value={dish.rate} />
                                        <div>1000 <FormattedMessage {...messages.rating} /></div>
                                    </div>
                                </Card>
                            </List.Item>
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default RecipeList