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
import PageCommonWrapper from 'components/PageCommonWrapper';
import { Typography } from 'antd';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

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
      <FormattedMessage {...messages.newsHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageCommonWrapper
        title={messages.foodNews}
        imageSrc = {null}
        description={messages.foodNews}
      >
        <div>
          <Title></Title>
        </div>
      </PageCommonWrapper>
    </>
  )
}

export default NewsPage