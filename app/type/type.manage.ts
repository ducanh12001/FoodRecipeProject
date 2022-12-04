import { ResponseDataType } from "./type.recipe";
import { TableParams } from "./type.table";

export type InitialStateType = {
    initialValues: {};
    tableParams: TableParams;
    formValues: object;
    clearFormField: boolean;
    errors: [];
    isLoading: boolean;
    formMethod?: string;
    id?: string;
    recipes: ResponseDataType;
    dinners: ResponseDataType;
    news: ResponseDataType;
    tools: ResponseDataType;
    books: ResponseDataType;
}