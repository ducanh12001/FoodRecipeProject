import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { queryNewsAction } from './actions';
import { makeNewsSelector } from './selectors';

const key = 'menuHome';

const stateSelector = createStructuredSelector({
  news: makeNewsSelector()
});

function NewsPage() {
  useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const intl = useIntl();
	const { news } = useSelector(stateSelector);

	useEffect(() => {
    dispatch(queryNewsAction())
	}, []);

  return (
    <div>NewsPage</div>
  )
}

export default NewsPage