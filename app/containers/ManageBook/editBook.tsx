/**
 *
 * Edit Book
 *
 */

import React, { useEffect } from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import EditBookForm from './editBookForm';

export default function EditBook() {
  
  return (
    <>
      <FormattedMessage {...messages.editBookHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-Book'}
        title={messages.editBookPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} hasBack={true}      />
      <div className="manage-table">
        <EditBookForm />
      </div>
    </>
  );
}
