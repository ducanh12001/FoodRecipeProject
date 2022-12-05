/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.RegisterPage';

export default defineMessages({
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Go Back',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  },
  internalError: {
    id: `${scope}.internalError`,
    defaultMessage:
      'There was some error during process, please try again later',
  },
  helmetRegisterTitle: {
    id: `${scope}.helmetRegisterTitle`,
    defaultMessage: 'Registration - Page',
  },
  verifiPageTitle: {
    id: `${scope}.verifiPageTitle`,
    defaultMessage: 'Verify Email - Page'
  },
  createAccount: {
    id: `${scope}.createAccount`,
    defaultMessage: 'Create an account',
  },
  loginHere: {
    id: `${scope}.loginHere`,
    defaultMessage: 'Login here',
  },
  alreadyAccount: {
    id: `${scope}.alreadyAccount`,
    defaultMessage: 'Already have an account?',
  },
  agreeTo: {
    id: `${scope}.agreeTo`,
    defaultMessage: 'I agree to the',
  },
  agreeLinkText: {
    id: `${scope}.agreeLinkText`,
    defaultMessage: 'terms and conditions',
  },
  registerAttemptError: {
    id: `${scope}.registerAttemptError`,
    defaultMessage: 'There was some error',
  },
  registerSuccess: {
    id: `${scope}.registerSuccess`,
    defaultMessage:
      'Successfully registered, please check your email to get OTP code!',
  },
  signBtn: {
    id: `${scope}.signBtn`,
    defaultMessage: 'Sign up',
  },
  acceptTerm: {
    id: `${scope}.acceptTerm`,
    defaultMessage: 'Should accept terms and condition!',
  },
  readTerm: {
    id: `${scope}.readTerm`,
    defaultMessage: 'I have read the {TermsAndConditionsLink}',
  },
  termsAndConditions: {
    id: `${scope}.termsAndConditions`,
    defaultMessage: 'Terms and conditions',
  },
  verify: {
    id: `${scope}.verify`,
    defaultMessage: 'Xác thực'
  }
});
