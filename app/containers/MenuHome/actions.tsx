import { ResponseType } from 'type/type.recipe';
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

export function assignRecipesAction(recipes: ResponseType) {
    return {
        type: ASSIGN_RECIPES,
        recipes
    };
}

export function assignNewsAction(news: ResponseType) {
    return {
        type: ASSIGN_NEWS,
        news
    };
}

export function assignDinnersAction(dinners: ResponseType) {
    return {
        type: ASSIGN_DINNERS,
        dinners
    };
}

export function assignToolsAction(tools: ResponseType) {
    return {
        type: ASSIGN_TOOLS,
        tools
    };
}

export function assignBooksAction(books: ResponseType) {
    return {
        type: ASSIGN_BOOKS,
        books
    };
}