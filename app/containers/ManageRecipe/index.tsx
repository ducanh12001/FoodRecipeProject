import React, { useEffect } from 'react';
import reducer from 'containers/ManageRecipe/reducer';
import saga from 'containers/ManageRecipe/saga';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import commonMessage from 'common/messages';
import { createStructuredSelector } from 'reselect';
import {
  clearFormAction,
  deleteItemByIdAction,
  queryRecipesAction,
  setFormMethodAction,
  setFormValues,
  setIdAction,
  setInitialTableParams,
} from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { POST, PUT } from 'utils/constants';
import { FormattedMessage, useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Tabs } from 'antd';
import messages from './messages';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import { useNavigate } from 'react-router-dom';
import RecipeTable from './recipeTable';

const key = 'manageRecipe';

const stateSelector = createStructuredSelector({

});

function ManageRecipe() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const navigate = useNavigate();
  const intl = useIntl();
  const {  } = useSelector(stateSelector);

  const resetTableParams = () => dispatch(setInitialTableParams());
  const loadInitialProduct = () => dispatch(clearFormAction());

  const onchangeFormMethod = (formMethod: any) =>
    dispatch(setFormMethodAction(formMethod));

  const onCreate = () => {
    onchangeFormMethod(POST);
    navigate('/manage-recipe/create');
  };

  const onEdit = (id: any) => {
    dispatch(setIdAction(id));
    onchangeFormMethod(PUT);
    navigate(`/manage-recipe/edit/${id}`);
  };

  const onDelete = (id: string) => {
    dispatch(deleteItemByIdAction(id));
  };

  useEffect(() => {
    resetTableParams();
    dispatch(queryRecipesAction());
  }, []);

  return (
    <>
      <FormattedMessage {...messages.helmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        title={messages.helmetTitle}
        extra={[
          <Button key="3" onClick={onCreate}>
            <PlusOutlined /> <FormattedMessage {...commonMessage.addLabel} />
          </Button>,
        ]}
        ghost={false}
        children={[]} backUrl={null} hasBack={false} />
      <div className="manage-table">
        <RecipeTable onDelete={onDelete} onEdit={onEdit} />
      </div>
    </>
  );
}

export default ManageRecipe;
