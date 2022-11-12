import { RecipeType } from "type/type.recipe";
import { ASSIGN_RECIPES, ASYNC_END, ASYNC_START, QUERY_RECIPES } from "./constants";

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

export function assignRecipesAction(recipes: RecipeType) {
    return {
        type: ASSIGN_RECIPES,
        recipes
    };
}