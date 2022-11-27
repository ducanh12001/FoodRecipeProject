import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { queryToolsAction } from './actions';
import { makeToolsSelector } from './selectors';
import { Helmet } from 'react-helmet';
import PageHeaderWrapper from 'components/PageHeaderWrapper';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

const key = 'menuHome';

const stateSelector = createStructuredSelector({
  tools: makeToolsSelector()
});

function ToolPage() {
  useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const intl = useIntl();
	const { tools } = useSelector(stateSelector);

	useEffect(() => {
    dispatch(queryToolsAction())
	}, []);

  return (
    <>
      <FormattedMessage {...messages.toolHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        title={<FormattedMessage {...messages.tips} />}
        imageSrc = 'toolImage.jpg'
        description = {<FormattedMessage {...messages.tipsDescription} />}
      >
        <div>
          
        </div>
      </PageHeaderWrapper>
    </>
  )
}

export default ToolPage