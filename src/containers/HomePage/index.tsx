//@ts-nocheck
import { Button, Card, Col, Row } from 'antd';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { assignRecipesAction, queryRecipesAction, setFormValues } from './actions';
import { makeRecipesSelector } from './selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { QUERY_RECIPES } from './constants';

const key = 'homePage';

const stateSelector = createStructuredSelector({
	recipes: makeRecipesSelector(),
});

function HomePage() {
	useInjectReducer({ key, reducer });
	useInjectSaga({ key, saga });
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { recipes } = useSelector(stateSelector);

	useEffect(() => {
		dispatch(queryRecipesAction());
		dispatch(setFormValues({}));
		
		axios.get('http://dnqfood.tk/api/recipe', {
			headers: {
				Accept: 'application/json',
				"Content-Type": 'application/json',
				"Authorization": `Bearer ${localStorage.getItem('ACCESS_TOKEN') ?? ''}`
			  },
		}).then((res) => dispatch(assignRecipesAction(res)))
		.catch((err) => {})
	}, [])

	return (
		<>
			<Helmet>
                <title>Food Recipe</title>
            </Helmet>
			<div className="top-pathing">
				<Row gutter={16} className="top-pathing-inner">
					{/* {recipes.data?.map((d:any, index:number) => {
						index < 6 && (
							<Col span={4} className="top-pathing-item" key={index}>
								<Link to="" style={{ textDecoration: 'none', color: 'initial' }}>
									<Row className="item-image">
										<img src={require('../../assets/images/NoImageAvailable.jpg')} />
									</Row>
									<Row>
										<Col span={4} className="item-index">{index + 1}</Col>
										<Col span={20} className="item-name">{d.name}</Col>
									</Row>
								</Link>
							</Col>
						)
					})} */}
					{new Array(6).fill(null).map((_, index) => {
						return (
							<Col span={4} className="top-pathing-item" key={index}>
								<Link to="" style={{ textDecoration: 'none', color: 'initial' }}>
									<Row className="item-image">
										<img src={require('../../assets/images/NoImageAvailable.jpg')} />
									</Row>
									<Row>
										<Col span={4} className="item-index">{index + 1}</Col>
										<Col span={20} className="item-name">Burger Texas </Col>
									</Row>
								</Link>
							</Col>
						)
					})}
				</Row>
			</div>
			<div className="transporter">
				<div className="transporter-header">
					<div className="transporter-header-inner">
						<span>More From</span>
						<Link to="">Meals & Cooking</Link>
					</div>
				</div>
				<div className="transporter-list">
					<Row gutter={[32, 32]}>
						{new Array(6).fill(null).map((_, index) => (
							<Col key={index} span={8} onClick={() => navigate('/recipe-detail')}>
								<Card
									hoverable
									cover={
										<img style={{ height: 150, objectFit: 'cover' }} alt="example"
											src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peppermint-meringues1-1663882344.jpg?crop=0.817xw:0.601xh;0,0.158xh&resize=480:*" />
									}
								>
									<Card.Meta title="Europe Street beat" />
								</Card>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</>
	);
}

export default HomePage