/**
 *
 * Create Dinner
 *
 */

import React from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import DinnerForm from './dinnerForm';

export default function CreateDinner() {
  return (
    <>
      <FormattedMessage {...messages.createDinnerHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-dinner'}
        title={messages.createDinnerPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} hasBack={false}      
      />
      <div className="manage-table profile-details-card">
          <DinnerForm />
      </div>
    </>
  );
}
