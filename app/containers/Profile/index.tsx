/**
 *
 * Profile
 *
 */

import React from 'react';
import { Button, Descriptions, Tabs } from 'antd';
import commonMessage from 'common/messages';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
import messages from 'containers/Profile/messages';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import PersonInfo from './personInfo';
import MyRecipe from './myRecipe';
import ChangePassword from 'containers/ChangePassword';

export const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
});

function Profile() {
  const { user } = useSelector(stateSelector);
  const navigate = useNavigate();
  return (
    <>
      <FormattedMessage {...messages.helmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <div className='profile-page'>
        <Tabs
          tabPosition="left"
          items={[
            {
              key: '1',
              label: <FormattedMessage {...messages.personalInfo} />,
              children: <PersonInfo user={user} />,
            },
            {
              key: '2',
              label: <FormattedMessage {...messages.myRecipe} />,
              children: <MyRecipe />,
            },
            {
              key: '3',
              label: <FormattedMessage {...messages.changePassword} />,
              children: <ChangePassword />,
            }
          ]}
        />
      </div>
    </>
  );
}

export default Profile;
