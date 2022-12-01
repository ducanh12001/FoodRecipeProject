/**
 *
 * Edit Dinner
 *
 */

import React, { useEffect } from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import EditDinnerForm from './editDinnerForm';

export default function EditDinner() {
  
  return (
    <>
      <FormattedMessage {...messages.editDinnerHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-dinner'}
        title={messages.editDinnerPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} 
        hasBack={true} />
      <div className="manage-table">
        <EditDinnerForm />
      </div>
    </>
  );
}
