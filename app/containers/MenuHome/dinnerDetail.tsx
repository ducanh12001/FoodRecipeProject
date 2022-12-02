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
import { makeDinnerByIdSelector } from 'containers/MenuHome/selectors';
import { getDinnerByIdAction } from 'containers/MenuHome/actions';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

const key = "menuHome"

const { Title } = Typography;

const stateSelector = createStructuredSelector({
    dinnerById: makeDinnerByIdSelector()
});

function DinnerDetail() {
    useInjectSaga({ key, saga });
    useInjectReducer({ key, reducer });
    const dispatch = useDispatch();

    const { id } = useParams()

    const { dinnerById } = useSelector(stateSelector);

    useEffect(() => {
        dispatch(getDinnerByIdAction(id ?? ''));
    }, [id]);

    return (
        <div className="news-detail">
            <div className="news-detail-head">
                <Title>{dinnerById.title}</Title> 
            </div>
            <div className="news-detail-main">
                {dinnerById.dinner_list?.map((d:any, index:number) => {
                    return (
                        <div className="dinner-list">
                            <div className="dinner-title">
                                <div className="dinner-index">{index+1}.</div>
                                <h2>{d.name}</h2>
                            </div>
                            <p className="dinner-des">{d.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DinnerDetail