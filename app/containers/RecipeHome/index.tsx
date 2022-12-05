import React, { useEffect, useState } from 'react';
import {
	Card,
	Col,
	Row,
	Tooltip,
	Typography,
} from 'antd';
import saga from 'containers/RecipeHome/saga';
import reducer from 'containers/RecipeHome/reducer';
import { Link, useNavigate } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useIntl } from 'react-intl';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import { queryRecipesAction } from './actions';
import { makeRecipesSelector } from './selectors';
import _ from 'lodash';

import messages from 'containers/RecipeHome/messages';
import { FormattedMessage } from 'react-intl';

const { Text, Title, Paragraph } = Typography;

const key = 'recipeHome';

const stateSelector = createStructuredSelector({
	isLogged: makeIsLoggedSelector(),
	recipes: makeRecipesSelector()
});

function RecipeHome() {
	useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
	const intl = useIntl();
	const { isLogged, recipes } = useSelector(stateSelector);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(queryRecipesAction())
	}, []);

	return (
		<div>
			<div className="top-pathing">
				<Row gutter={[16, 32]} className="top-pathing-inner">
					{recipes.data?.map((d: any, index: number) =>
						index < 6 && (
							<Col className="top-pathing-item" key={index}
								xs={8}
								sm={8}
								md={8}
								lg={4}
							>
								<Link to={`/recipe-detail/${d._id}`} style={{ textDecoration: 'none', color: 'initial' }}>
									<Row className="item-image">
										{d.pictures && d.pictures[0] ?
											<img src={d.pictures[0]} />
											:
											<img src={require('../../assets/images/NoImageAvailable.jpg')} />
										}
									</Row>
									<Row>
										<Col span={4} className="item-index">{index + 1}</Col>
										<Col span={20} className="item-name">
											<Tooltip title={d.description}>{d.name}</Tooltip>
										</Col>
									</Row>
								</Link>
							</Col>
						)
					)}
				</Row>
			</div>
			<div className="transporter">
				<div className="transporter-header">
					<div className="transporter-header-inner">
						<span><FormattedMessage {...messages.moreFrom} /></span>
						<Link to="/recipe-ideas"><FormattedMessage {...messages.mealCooking} /></Link>
					</div>
				</div>
				<div className="transporter-list">
					<Row gutter={[32, 32]}>
						{_.sampleSize(recipes.data, 9)?.map((d: any, index: number) =>  (
							<Col key={index} span={8} onClick={() => navigate(`/recipe-detail/${d._id}`)}>
								<Card
									hoverable
									cover={d.pictures[0] ?
										<img style={{ height: 150, objectFit: 'cover' }} src={d.pictures[0]} />
										:
										<img style={{ height: 150, objectFit: 'cover' }} src={require('../../assets/images/NoImageAvailable.jpg')} />
									}
								>
									<Card.Meta title={<Tooltip title={d.description}>{d.name}</Tooltip>} />
								</Card>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</div>
	);
}

export default RecipeHome;
