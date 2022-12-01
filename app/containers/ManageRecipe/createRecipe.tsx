/**
 *
 * Create Recipe
 *
 */

import React from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from 'containers/ManageRecipe/messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import RecipeForm from './recipeForm';

export default function CreateRecipe() {
  return (
    <>
      <FormattedMessage {...messages.createRecipeHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/admin/product'}
        title={messages.createRecipePageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} hasBack={false}      
      />
      <div className="manage-table profile-details-card">
          <RecipeForm />
      </div>
    </>
  );
}
