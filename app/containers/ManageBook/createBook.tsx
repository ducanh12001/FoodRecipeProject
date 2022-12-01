/**
 *
 * Create Book
 *
 */

import React from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import BookForm from './bookForm';

export default function CreateBook() {
  return (
    <>
      <FormattedMessage {...messages.createBookHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/admin/product'}
        title={messages.createBookPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} hasBack={false}      
      />
      <div className="manage-table profile-details-card">
          <BookForm />
      </div>
    </>
  );
}
