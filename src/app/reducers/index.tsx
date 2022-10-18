import { combineReducers } from 'redux';
import globalReducer from '../containers/App/reducer';
import homePageReducer from '../containers/HomePage/reducer';
import loginPageReducer from '../containers/LoginPage/reducer';
import registerPageReducer from '../containers/RegisterPage/reducer';

export default function createReducer(injectedReducers = {}) {
    return combineReducers({
        global: globalReducer,
        homePage: homePageReducer,
        login: loginPageReducer,
        register: registerPageReducer,
        ...injectedReducers,
    })
}