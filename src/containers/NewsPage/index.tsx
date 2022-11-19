import { Button, Card, Col, Row } from 'antd';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { queryRecipesAction, setFormValues } from './actions';
import { makeRecipesSelector } from './selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function NewsPage() {
	return (
		<>
			<Helmet>
                <title>News</title>
            </Helmet>
			<div className="transporter">
				<div className="transporter-header">
					<div className="transporter-header-inner">
						<span>The newest items to chew on</span>
						<Link to="">Latest Food News</Link>
					</div>
				</div>
				<div className="transporter-list">
					<Row gutter={[32, 32]}>
						{new Array(6).fill(null).map((_, index) => (
							<Col key={index} span={8} onClick={() => console.log("")}>
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

export default NewsPage