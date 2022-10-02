import { Breadcrumb, Card, Image, Layout, Menu, Typography } from 'antd'
import React from 'react'
import { ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import '../../assets/styles/food-list.css'
import { Link } from 'react-router-dom'

function FoodList() {
    return (
        <div className="content-container">
            <div>
                <div className="full-width-image"></div>
            </div>
            <div>
                <div className="header-wrapper">
                    <div className="header-breadcrumb">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Center</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            <ShareAltOutlined /> Share
                        </div>
                    </div>
                    <div className="type-food">
                        <h1>Chicken Soup</h1>
                        <div className="type-food-desc">Wondering what to cook?</div>
                    </div>
                </div>
            </div>
            <div className="content">
                <h2>Great Food</h2>
                <div className="list-food">
                    <Card
                        cover={
                            <a>
                                <Image preview={false} className="dish-image" width="100%" alt="" src={require('../../assets/images/hambur.webp')} />
                                <Typography.Title className="dish-name">Air Fryer Hamburger Patties</Typography.Title>
                            </a>
                        }
                        className="card"
                    >
                        <div className="data">
                            <div className="rate">
                                <StarOutlined />
                                <StarOutlined />
                                <StarOutlined />
                            </div>
                            <div className="">
                                <Typography.Paragraph ellipsis={{ rows: 2, tooltip: 'a' }} className="description">Use your air fryer to cook hamburger patties when it's too cold to grill outside adsad a sada</Typography.Paragraph>
                            </div>
                            <div className="author-box">
                                By <div className="author">author</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FoodList