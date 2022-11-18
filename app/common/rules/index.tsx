import { FormattedMessage } from 'react-intl';
import commonMessage from 'common/messages';
import React from 'react';
import { checkIfStrongPassword, checkPasswordLength } from 'common/validator';

export const rules = {
  email: [
    {
      type: 'email',
      message: <FormattedMessage {...commonMessage.validEmailRequired} />,
    },
    {
      required: true,
      whitespace: true,
      message: <FormattedMessage {...commonMessage.emailRequired} />,
    },
  ],
  password: [
    {
      required: true,
      whitespace: true,
      message: <FormattedMessage {...commonMessage.passwordRequired} />,
    },
    {
      validator: checkPasswordLength,
    },
  ],
  username: [
    {
      required: true,
      whitespace: true,
      message: <FormattedMessage {...commonMessage.usernameRequired} />,
    },
  ],
  phone: [
    {
      required: true,
      whitespace: true,
      message: <FormattedMessage {...commonMessage.phoneRequired} />,
    },
    {
      pattern: new RegExp(/^[0-9]{10,15}$/g),
      message: <FormattedMessage {...commonMessage.phoneInvalid} />,
    },
  ],
  name: [
    {
      required: true,
      whitespace: true,
      message: <FormattedMessage {...commonMessage.nameRequired} />,
    },
  ],
};
