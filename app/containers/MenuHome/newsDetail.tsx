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
import { makeNewByIdSelector, makeRecipeByIdSelector } from 'containers/MenuHome/selectors';
import { getNewByIdAction, getRecipeByIdAction } from 'containers/MenuHome/actions';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

const key = "menuHome"

const { Title } = Typography;

const stateSelector = createStructuredSelector({
    newById: makeNewByIdSelector()
});

function NewsDetail() {
    useInjectSaga({ key, saga });
    useInjectReducer({ key, reducer });
    const dispatch = useDispatch();

    const { id } = useParams()

    const { newById } = useSelector(stateSelector);

    useEffect(() => {
        dispatch(getNewByIdAction(id ?? ''));
    }, [id]);

    return (
        <div className="news-detail">
            <div className="news-detail-head">
                <Title>{newById.title}</Title> 
            </div>
            <div className="news-detail-main">
                {newById.pictures && newById.pictures[0] && 
                    <div style={{marginBottom: '10px'}}>
                        <Image width={600} height={350} src={newById.pictures[0]} />
                    </div>
                }
                <p>{newById.content}</p>
            </div>
        </div>
    )
}

export default NewsDetail