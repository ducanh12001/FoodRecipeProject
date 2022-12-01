/**
 *
 * Create News
 *
 */

import React from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import NewsForm from './newsForm';

export default function CreateNews() {
  return (
    <>
      <FormattedMessage {...messages.createNewsHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-news'}
        title={messages.createNewsPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} 
        hasBack={false} 
      />
      <div className="manage-table profile-details-card">
          <NewsForm />
      </div>
    </>
  );
}
