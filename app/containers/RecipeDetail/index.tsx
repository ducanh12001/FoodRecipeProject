import { Avatar, Button, Col, Comment, Form, Image, Input, List, Rate, Row, Typography } from 'antd'
import moment from 'moment-timezone';
import React, { useState } from 'react'

const key = "recipeDetail"

const { Title } = Typography;

interface CommentItem {
    author: string;
    avatar: string;
    content: React.ReactNode;
    datetime: string;
  }

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );

function RecipeDetail() {

    const [comments, setComments] = useState<CommentItem[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (!value) return;
    
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          setValue('');
          setComments([
            ...comments,
            {
              author: 'Han Solo',
              avatar: 'https://joeschmoe.io/api/v1/random',
              content: <p>{value}</p>,
              datetime: moment().fromNow(),
            },
          ]);
        }, 1000);
      };

    return (
        <div className="recipe-detail">
            <div className="recipe-detail-top">
                <h1>Easy Pancakes</h1>
                <div className="recipe-detail-user">
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <span className="mr-6 ml-6">by</span>
                    <div className="username mr-6">Jack</div>
                    <div>Updated: time</div>
                </div>
                <div className="recipe-rate">
                    <Rate disabled allowHalf value={4} />
                    <div className="ml-6">1000 ratings</div>
                </div>
                <div className="recipe-btn">
                    <Button className="btn mr-12">Save Recipe</Button>
                    <Button className="btn">Share</Button>
                </div>
            </div>
            <div className="recipe-detail-main">
                <Row>
                    <Col span={14}>
                        <Row gutter={[16, 32]}>
                            <Col span={24}>
                                <div className="description">This recipe doesn't require much thought early in the morning, and tastes great!</div>
                            </Col>
                            <Col span={24}>
                                <Image src="" preview={false} />
                            </Col>
                            <Col span={24}>
                                <Row className="recipe-time">
                                    <Col span={8} className="time-col">
                                        <div className="time-title">Yield</div>
                                        <span>4 servings</span>
                                    </Col>
                                    <Col span={8} className="time-col">
                                        <div className="time-title">Prep Time</div>
                                        <span>5 mins</span>
                                    </Col>
                                    <Col span={8} className="time-col">
                                        <div className="time-title">Cook Time</div>
                                        <span>5 mins</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24} className="ingredient">
                                <Title level={2}>Ingredients</Title>
                                <ul className="ingredient-list">
                                    <li>1 cup all-purpose flour</li>
                                    <li>1 cup all-purpose flour</li>
                                    <li>1 cup all-purpose flour</li>
                                    <li>1 cup all-purpose flour</li>
                                    <li>1 cup all-purpose flour</li>
                                    <li>1 cup all-purpose flour</li>
                                </ul>
                            </Col>
                            <Col span={24} className="step">
                                <Title level={2}>Directions</Title>
                                <ol className="step-list">
                                    <li>In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.</li>
                                    <li>In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.</li>
                                    <li>In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.</li>
                                </ol>
                            </Col>
                            <Col span={24} className="review">
                                <h2>Reviews (1,466)</h2>
                                {comments.length > 0 && <CommentList comments={comments} />}
                                <Comment
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                                    content={
                                        <>
                                            <Form.Item>
                                                <Input.TextArea rows={4} onChange={(e) => setValue(e.target.value)} value={value} />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button htmlType="submit" loading={submitting} onClick={handleSubmit} type="primary">
                                                    Thêm bình luận
                                                </Button>
                                            </Form.Item>
                                        </>
                                    }
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default RecipeDetail