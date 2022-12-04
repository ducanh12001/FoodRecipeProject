import React, { useEffect, useState } from 'react';
import {
	Card,
	Col,
	Row,
	Typography,
} from 'antd';
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { Link, useNavigate } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useIntl } from 'react-intl';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import { queryRecipesAction } from './actions';
import { makeRecipesSelector } from './selectors';

const { Text, Title, Paragraph } = Typography;

const key = 'menuHome';

const stateSelector = createStructuredSelector({
	recipes: makeRecipesSelector()
});

function RecipeHome() {
	useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
	const intl = useIntl();
	const { recipes } = useSelector(stateSelector);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(queryRecipesAction())
	}, []);

	return (
		<div>
			
		</div>
	);
}

export default RecipeHome;
