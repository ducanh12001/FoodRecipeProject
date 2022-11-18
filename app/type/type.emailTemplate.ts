import { FormListFieldData } from 'antd';

export type Template = {
  results: Array<any>;
  pageSize: number;
  currentPage: number;
  totalItems: number;
  next: number;
  previous: number;
};
export type EmptyField = {
  title: string;
  body: string;
  subject: string;
  sender: string;
};
export type EmailTemplate = {
  keywords: string;
  formValues: object;
  initialValues: EmptyField;
  pageNumber: number;
  pageSize: number;
  templates: Template;
  errors: FormListFieldData[];
  isLoading: boolean;
  formMethod: string | null;
  initiateClean: boolean;
  id?: string;
  editedBody?: any;
};
