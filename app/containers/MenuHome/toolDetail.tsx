import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { Col, Image, Row, Typography } from 'antd'
import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeToolByIdSelector } from 'containers/MenuHome/selectors';
import { getToolByIdAction } from 'containers/MenuHome/actions';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';

const key = "menuHome"

const { Title } = Typography;

const stateSelector = createStructuredSelector({
    toolById: makeToolByIdSelector()
});

function ToolDetail() {
    useInjectSaga({ key, saga });
    useInjectReducer({ key, reducer });
    const dispatch = useDispatch();

    const { id } = useParams()

    const { toolById } = useSelector(stateSelector);

    useEffect(() => {
        dispatch(getToolByIdAction(id ?? ''));
    }, [id]);

    return (
        <div className="news-detail">
            <div className="news-detail-head">
                <Title>{toolById.title}</Title>
            </div>
            <div className="news-detail-main">
                <div style={{ marginBottom: '10px' }}>
                    <Image width={600} height={350}src={require('../../assets/images/tool.jpg')} />
                </div>
                <p>{toolById.content}</p>
                {toolById.tool_list?.map((d: any, index: number) => {
                    return (
                        <div className="dinner-list">
                            <div className="dinner-title">
                                <div className="dinner-index">{index + 1}.</div>
                                <h2>{d.name}</h2>
                            </div>
                            <div className="pros-cons">
                                <Row>
                                    <Col span={12} className="pros">
                                        <h3>Pros</h3>
                                        <ul className="pros-list">
                                            <li className="pros-item"><LikeOutlined className="like-icon" />Easy to use</li>
                                            <li className="pros-item"><LikeOutlined className="like-icon"/>Multiple brew options</li>
                                        </ul>
                                    </Col>
                                    <Col span={12} className="cons">
                                        <h3>Cons</h3>
                                        <ul className="cons-list">
                                            <li className="cons-item"><DislikeOutlined className="dislike-icon"/>Expensive</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToolDetail