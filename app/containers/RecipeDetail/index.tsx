import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { Avatar, Button, Col, Comment, Form, Image, Input, List, Rate, Row, Typography } from 'antd'
import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeRecipeByIdSelector } from 'containers/MenuHome/selectors';
import { getRecipeByIdAction } from 'containers/MenuHome/actions';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

const key = "menuHome"

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

const stateSelector = createStructuredSelector({
    recipeById: makeRecipeByIdSelector()
});

function RecipeDetail() {
    useInjectSaga({ key, saga });
    useInjectReducer({ key, reducer });
    const dispatch = useDispatch();

    const { id } = useParams()
    const [comments, setComments] = useState<CommentItem[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const { recipeById } = useSelector(stateSelector);

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

    useEffect(() => {
        dispatch(getRecipeByIdAction(id ?? ''));
    }, [id]);

    return (
        <div className="recipe-detail">
            <div className="recipe-detail-top">
                <h1>{recipeById.name}</h1>
                <div className="recipe-detail-user">
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <span className="mr-6 ml-6"><FormattedMessage {...messages.by} /></span>
                    <div className="username mr-6">Jack</div>
                    <div>Updated: {moment(recipeById.last_updated).format('HH:mm DD/MM/YYYY')}</div>
                </div>
                <div className="recipe-rate">
                    <Rate disabled allowHalf value={4} />
                    <div className="ml-6">1000 <FormattedMessage {...messages.rating} /></div>
                </div>
                <div className="recipe-btn">
                    <Button className="btn mr-12"><FormattedMessage {...messages.saveRecipeBtn} /></Button>
                    <Button className="btn"><FormattedMessage {...messages.shareBtn} /></Button>
                </div>
            </div>
            <div className="recipe-detail-main">
                <Row>
                    <Col span={14}>
                        <Row gutter={[16, 32]}>
                            <Col span={24}>
                                <div className="description">{recipeById.description}</div>
                            </Col>
                            {recipeById.pictures && recipeById.pictures[0] &&
                                <Col span={24}>
                                    <Image src={recipeById.pictures[0]} preview={false} />
                                </Col>
                            }
                            <Col span={24}>
                                <Row className="recipe-time">
                                    <Col span={8} className="time-col">
                                        <div className="time-title"><FormattedMessage {...messages.yield} /></div>
                                        <span>{recipeById.time?.yields} <FormattedMessage {...messages.serving} /></span>
                                    </Col>
                                    <Col span={8} className="time-col">
                                        <div className="time-title"><FormattedMessage {...messages.prepTime} /></div>
                                        <span>{recipeById.time?.preptime} <FormattedMessage {...messages.minutes} /></span>
                                    </Col>
                                    <Col span={8} className="time-col">
                                        <div className="time-title"><FormattedMessage {...messages.cookTime} /></div>
                                        <span>{recipeById.time?.cooktime} <FormattedMessage {...messages.minutes} /></span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24} className="ingredient">
                                <Title level={2}><FormattedMessage {...messages.ingredient} /></Title>
                                <ul className="ingredient-list">
                                    {recipeById.ingredients?.map((d:any, index:number) => (
                                        <li key={index}>{d.name}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col span={24} className="step">
                                <Title level={2}><FormattedMessage {...messages.direction} /></Title>
                                <ol className="step-list">
                                    {recipeById.steps?.map((d:any, index:number) => (
                                        <li key={index}>{d.content}</li>
                                    ))}
                                </ol>
                            </Col>
                            <Col span={24} className="review">
                                <h2><FormattedMessage {...messages.comments} /> ({comments.length})</h2>
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
                                                    <FormattedMessage {...messages.addCommentBtn} />
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