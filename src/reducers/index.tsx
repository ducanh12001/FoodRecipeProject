import { combineReducers } from 'redux';
import globalReducer from '../containers/App/reducer';
import homePageReducer from '../containers/HomePage/reducer';
import loginPageReducer from '../containers/LoginPage/reducer';
import registerPageReducer from '../containers/RegisterPage/reducer';
import alertMessageReducer from '../containers/AlertMessage/reducer';
import snackMessageReducer from '../containers/SnackMessage/reducer';
import changePasswordReducer from '../containers/ChangePassword/reducer';

export default function createReducer(injectedReducers = {}) {
    return combineReducers({
        global: globalReducer,
        homePage: homePageReducer,
        login: loginPageReducer,
        alertMessage: alertMessageReducer,
        snackMessage: snackMessageReducer,
        register: registerPageReducer,
        changePassword: changePasswordReducer,
        ...injectedReducers,
    })
}