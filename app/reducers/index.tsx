/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import globalReducer from 'containers/App/reducer';
import loginPageReducer from 'containers/LoginPage/reducer';
import registerPageReducer from 'containers/RegisterPage/reducer';
import alertMessageReducer from 'containers/AlertMessage/reducer';
import snackMessageReducer from 'containers/SnackMessage/reducer';
import verifyPageReducer from 'containers/VerifyAccount/reducer';
import forgotPasswordReducer from 'containers/ForgotPassword/reducer';
import resetPasswordReducer from 'containers/ResetPassword/reducer';
import userAccountReducer from 'containers/UserAccount/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import changePasswordReducer from 'containers/ChangePassword/reducer';
import recipeHomeReducer from 'containers/RecipeHome/reducer';
import manageRecipeReducer from 'containers/ManageRecipe/reducer';
import manageDinnerReducer from 'containers/ManageDinner/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: globalReducer,
    recipeHome: recipeHomeReducer,
    alertMessage: alertMessageReducer,
    snackMessage: snackMessageReducer,
    language: languageProviderReducer,
    login: loginPageReducer,
    register: registerPageReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    changePassword: changePasswordReducer,
    verifyPage: verifyPageReducer,
    userAccount: userAccountReducer,
    manageRecipe: manageRecipeReducer,
    manageDinner: manageDinnerReducer,
    ...injectedReducers,
  });
}
