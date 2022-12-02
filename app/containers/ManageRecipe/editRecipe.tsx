/**
 *
 * Edit Recipe
 *
 */

import React, { useEffect } from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from 'containers/ManageRecipe/messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import EditRecipeForm from './editRecipeForm';

export default function EditRecipe() {
  
  return (
    <>
      <FormattedMessage {...messages.editRecipeHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-recipe'}
        title={messages.editRecipePageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} hasBack={true}      
      />
      <div className="manage-table">
        <EditRecipeForm />
      </div>
    </>
  );
}
