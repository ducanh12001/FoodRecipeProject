/*
 *
 * HomePage actions
 *
 */

import { RecipeType } from '../../type/type.home';
import {
    IS_LOGGED,
    ASYNC_START,
    ASYNC_END,
    QUERY_RECIPES,
    QUERY_NEWS,
    CLEAR_FORM,
    SUBMIT_FORM,
    CLEAR_FORM_FIELD,
    SET_FORM_METHOD,
    SET_FORM_VALUES,
    SET_INITIAL_VALUES,
    ASSIGN_RECIPES,
    ASSIGN_NEWS,
} from './constants';

export function isLoggedAction() {
    return {
        type: IS_LOGGED,
    };
}

export function asyncStartAction() {
    return {
        type: ASYNC_START,
    };
}

export function asyncEndAction() {
    return {
        type: ASYNC_END,
    };
}

export function queryRecipesAction() {
    return {
        type: QUERY_RECIPES,
    };
}

export function queryNewsAction() {
    return {
        type: QUERY_NEWS,
    };
}

export function assignRecipesAction(recipes: RecipeType) {
    return {
        type: ASSIGN_RECIPES,
        recipes
    };
}

export function assignNewsAction(news: object) {
    return {
        type: ASSIGN_NEWS,
        news
    };
}

export function clearFormAction() {
    return {
        type: CLEAR_FORM,
    };
}

export function submitFormAction() {
    return {
        type: SUBMIT_FORM,
    };
}

export function clearFormFieldAction() {
    return {
        type: CLEAR_FORM_FIELD,
    };
}

export function setFormMethodAction(method: string) {
    return {
        type: SET_FORM_METHOD,
        method,
    };
}

export function setFormValues(formValues: object) {
    return {
        type: SET_FORM_VALUES,
        formValues,
    };
}

export function setInitialValuesAction(initialValues: object) {
    return {
        type: SET_INITIAL_VALUES,
        initialValues,
    };
}