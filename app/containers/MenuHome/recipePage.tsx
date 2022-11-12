import React, { useEffect } from 'react'
import saga from 'containers/MenuHome/saga';
import reducer from 'containers/MenuHome/reducer';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { queryRecipesAction } from './actions';
import { makeRecipesSelector } from './selectors';
import { Helmet } from 'react-helmet';

const key = 'menuHome';

const stateSelector = createStructuredSelector({
  recipes: makeRecipesSelector()
});

function RecipePage() {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();
  const { recipes } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(queryRecipesAction())
  }, []);

  return (
    <>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
    </>
  )
}

export default RecipePage