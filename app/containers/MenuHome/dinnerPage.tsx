import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeDinnersSelector } from './selectors';
import { queryDinnersAction } from './actions';

const key = 'menuHome';

const stateSelector = createStructuredSelector({
	dinners: makeDinnersSelector()
});

function DinnerPage() {
  useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const intl = useIntl();
	const { dinners } = useSelector(stateSelector);

	useEffect(() => {
    dispatch(queryDinnersAction())
	}, []);

  return (
    <div>DinnerPage</div>
  )
}

export default DinnerPage