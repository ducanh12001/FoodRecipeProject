import { FormListFieldData } from "antd/es/form";

export interface ResponseType {
  data: []
}

export type CreateRecipeType = {
  isLoading: boolean,
  errors: FormListFieldData[],
  initialValues: object,
  formValues: object,
  clearFormField: boolean,
  formMethod?: string,
  recipes: ResponseType,
  news: object,
};