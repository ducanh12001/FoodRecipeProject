import { FormListFieldData } from "antd/es/form";

export interface ResponseDataType {
  data: []
}

export type CreateRecipeType = {
  isLoading: boolean,
  errors: FormListFieldData[],
  initialValues: object,
  formValues: object,
  clearFormField: boolean,
  formMethod?: string,
  recipes: ResponseDataType,
  news: object,
};

export type RecipeType = {
  ingredients: Array<any>,
  steps: Array<any>,
  meals: Array<any>,
  name: string,
  pictures: Array<any>,
  last_updated: string,
  _id: string,
  countries: Array<any>,
}