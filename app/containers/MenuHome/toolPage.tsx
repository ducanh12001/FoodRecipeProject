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
      <Helmet>
        <title>Tips and Tools</title>
      </Helmet>
      <PageHeaderWrapper
        title="Tips and Tools"
        imageSrc = 'toolImage.jpg'
        description = "Get expert advice and top-rated reviews on everything from major kitchen appliances to cool new cookware and and the latest and fun food products."
      >
        <div>
          
        </div>
      </PageHeaderWrapper>
    </>
  )
}

export default ToolPage