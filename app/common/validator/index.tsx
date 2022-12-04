import messages from 'common/messages';
import { FormattedMessage } from 'react-intl';
import React from 'react';

export const checkIfStrongPassword = (
  rule: any,
  value: string,
  callback: (...arg: any) => any,
) => {
  const re =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
  if (re.test(value)) {
    callback();
  } else {
    callback(<FormattedMessage {...messages.weakPassword} />);
  }
};

export const checkPasswordLength = (
  rule: any,
  value: string,
  callback: (...arg: any) => any,
) => {
  const re =
    /^.{6,15}$/;
  if (re.test(value)) {
    callback();
  } else {
    callback('Password should contain at least 6 letters!');
  }
};
