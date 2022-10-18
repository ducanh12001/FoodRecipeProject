import { Breadcrumb, Card, Image, Layout, List, Menu, Rate, Typography } from 'antd'
import React from 'react'
import { ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import '../../assets/styles/food-list.css'
import { Link } from 'react-router-dom'

const key = "recipeList"

function RecipeList() {
    const foodList:any = [
        {
            id: 1,
            name: 'food',
            rate: 4.5,
        },
        {
            id: 12,
            name: 'food sad asd asd',
            rate: 4.5,
        },
        {
            id: 11,
            name: 'food',
            rate: 2.5,
        },
        {
            id: 13,
            name: 'food',
            rate: 4.5,
        },
        {
            id: 13,
            name: 'food',
            rate: 4.5,
        }
    ];
    return (
        <div className="recipe-container">
            <div>
                <img className="title-image" src={require('../../assets/images/pancake.webp')} />
            </div>
            <div>
                <h1>Breakfast and Brunch</h1>
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
                    dataSource={foodList}
                    renderItem={(dish:any, index:any) => {
                        return (
                            <List.Item>
                                <Card
                                    cover={
                                        <Link to='/recipe-detail'>
                                            <Image preview={false} className="dish-image" alt={''} src={require('../../assets/images/hambur.webp')} /> 
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
                                        <div>1000 ratings</div>
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