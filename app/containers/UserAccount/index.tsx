/**
 *
 * VerifyAccount
 *
 */

import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/UserAccount/saga';
import reducer from 'containers/UserAccount/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { Layout, Tabs } from 'antd';
import ProfileForm from 'containers/UserAccount/profileForm';
import messages from 'containers/UserAccount/messages';
import { FormattedMessage, useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import PageHeaderWrapper from 'components/PageHeaderWrapper';

const { TabPane } = Tabs;
const key = 'userAccount';

export default function UserAccount() {
  const intl = useIntl();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  return (
    <>
      <FormattedMessage {...messages.helmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageHeaderWrapper
          title={messages.pageHeader}
          ghost={false}
          subtitle={undefined}
          children={[]} extra={undefined} avatar={null}/>
      <div className="ais-table profile-details-card">
        <ProfileForm />
      </div>
    </>
  );
}
