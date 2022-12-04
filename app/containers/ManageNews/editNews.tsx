/**
 *
 * Edit News
 *
 */

import React, { useEffect } from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import EditNewsForm from './editNewsForm';

export default function EditNews() {
  
  return (
    <>
      <FormattedMessage {...messages.editNewsHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-news'}
        title={messages.editNewsPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} 
        hasBack={true} 
      />
      <div className="manage-table">
        <EditNewsForm />
      </div>
    </>
  );
}
