import {
    ASYNC_END,
    ASYNC_START,
} from 'containers/RecipeDetail/constants';

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
