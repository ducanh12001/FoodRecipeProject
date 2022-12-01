/**
 *
 * Edit Tool
 *
 */

import React, { useEffect } from 'react';
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import messages from './messages';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import EditToolForm from './editToolForm';

export default function EditTool() {
  
  return (
    <>
      <FormattedMessage {...messages.editToolHelmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
        backUrl={'/manage-tool'}
        title={messages.editToolPageheader}
        ghost={false}
        children={[]}
        extra={undefined}
        avatar={undefined} hasBack={true}      
      />
      <div className="manage-table">
        <EditToolForm />
      </div>
    </>
  );
}
