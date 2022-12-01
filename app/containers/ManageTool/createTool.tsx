/**
 *
 * Create Tool
 *
 */

import React from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import ToolForm from './toolForm';

export default function CreateTool() {
  return (
    <>
      <FormattedMessage {...messages.createToolHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-tool'}
        title={messages.createToolPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} 
        hasBack={false}      
      />
      <div className="manage-table profile-details-card">
          <ToolForm />
      </div>
    </>
  );
}
