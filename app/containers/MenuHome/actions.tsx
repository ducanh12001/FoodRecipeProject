import { ResponseDataType } from 'type/type.recipe';
import {
    ASYNC_END,
    ASYNC_START,
    QUERY_RECIPES,
    QUERY_NEWS,
    ASSIGN_RECIPES,
    ASSIGN_NEWS,
    QUERY_BOOKS,
    QUERY_TOOLS,
    QUERY_DINNERS,
    ASSIGN_DINNERS,
    ASSIGN_TOOLS,
    ASSIGN_BOOKS,
    GET_RECIPE_BY_ID,
    GET_NEWS_BY_ID,
    GET_TOOL_BY_ID,
    SET_ID,
    ASSIGN_RECIPE_BY_ID,
    ASSIGN_NEW_BY_ID,
    ASSIGN_TOOL_BY_ID,
    ASSIGN_DINNER_BY_ID,
    GET_DINNER_BY_ID,
} from './constants';

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

export function queryDinnersAction() {
    return {
        type: QUERY_DINNERS,
    };
}

export function queryToolsAction() {
    return {
        type: QUERY_TOOLS,
    };
}

export function queryBooksAction() {
    return {
        type: QUERY_BOOKS,
    };
}

export function assignRecipesAction(recipes: ResponseDataType) {
    return {
        type: ASSIGN_RECIPES,
        recipes
    };
}

export function assignNewsAction(news: ResponseDataType) {
    return {
        type: ASSIGN_NEWS,
        news
    };
}

export function assignDinnersAction(dinners: ResponseDataType) {
    return {
        type: ASSIGN_DINNERS,
        dinners
    };
}

export function assignToolsAction(tools: ResponseDataType) {
    return {
        type: ASSIGN_TOOLS,
        tools
    };
}

export function assignBooksAction(books: ResponseDataType) {
    return {
        type: ASSIGN_BOOKS,
        books
    };
}

export function getRecipeByIdAction(id: string) {
    return {
        type: GET_RECIPE_BY_ID,
        id
    };
}

export function getNewByIdAction(id: string) {
    return {
        type: GET_NEWS_BY_ID,
        id
    };
}

export function getToolByIdAction(id: string) {
    return {
        type: GET_TOOL_BY_ID,
        id
    };
}

export function getDinnerByIdAction(id: string) {
    return {
        type: GET_DINNER_BY_ID,
        id
    };
}

export function assignRecipeByIdAction(recipeById: object) {
    return {
        type: ASSIGN_RECIPE_BY_ID,
        recipeById,
    };
}

export function assignNewsByIdAction(newById: object) {
    return {
        type: ASSIGN_NEW_BY_ID,
        newById,
    };
}

export function assignToolByIdAction(toolById: object) {
    return {
        type: ASSIGN_TOOL_BY_ID,
        toolById,
    };
}

export function assignDinnerByIdAction(dinnerById: object) {
    return {
        type: ASSIGN_DINNER_BY_ID,
        dinnerById,
    };
}

export function setIdAction(id: string) {
    return {
        type: SET_ID,
        id,
    };
}

