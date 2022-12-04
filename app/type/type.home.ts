import { FormListFieldData } from 'antd/es/form';
import { ResponseDataType } from './type.recipe';

export type HomeInitialState = {
  isLoading: boolean,
  errors: FormListFieldData[],
  initialValues: object,
  formValues: object,
  clearFormField: boolean,
  formMethod?: string,
  pageNumber: number,
  pageSize: number,
  recipes: ResponseDataType,
  news: object,
};

