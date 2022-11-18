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
import { Helmet } from 'react-helmet';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import { Typography } from 'antd';

const key = 'menuHome';

const {Title} = Typography;

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
    <>
      <Helmet>
        <title>Food News</title>
      </Helmet>
      <PageHeaderWrapper
        title='Food News'
        imageSrc = {null}
        description = ''
      >
        <div>
          <Title></Title>
        </div>
      </PageHeaderWrapper>
    </>
  )
}

export default NewsPage