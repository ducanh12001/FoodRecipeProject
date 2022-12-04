/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.Profile';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Profile - Page',
  },
  pageHeader: {
    id: `${scope}.pageHeader`,
    defaultMessage: 'Profile',
  },
  na: {
    id: `${scope}.na`,
    defaultMessage: 'Not Available',
  },
  editProfileLabel: {
    id: `${scope}.editProfileLabel`,
    defaultMessage: 'Edit Profile',
  },
  genderMale:{
    id: `${scope}.genderMale`,
    defaultMessage: 'Nam',
  },
  genderFemale:{
    id: `${scope}.genderFemale`,
    defaultMessage: 'Nữ',
  },
  personalInfo:{
    id: `${scope}.personalInfo`,
    defaultMessage: 'Personal Info',
  },
  myRecipe:{
    id: `${scope}.myRecipe`,
    defaultMessage: 'My Recipe',
  },
  myRecipeHelmet:{
    id: `${scope}.myRecipeHelmet`,
    defaultMessage: 'My Recipe',
  },
  changePassword:{
    id: `${scope}.changePassword`,
    defaultMessage: 'Change Password',
  },
});
