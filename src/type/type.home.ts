import { FormListFieldData } from 'antd/es/form';

export type HomeSingle = {
  isLoading: boolean,
  errors: FormListFieldData[],
  initialValues: object,
  formValues: object,
  clearFormField: boolean,
  formMethod?: string,
  recipes: object,
  news: object,
};

