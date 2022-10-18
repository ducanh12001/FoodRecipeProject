import { FormListFieldData } from 'antd/es/form';

export type ForgotPassword = {
  initialValues: { email: string };
  formValues: {email: string};
  isLoading: false;
  errors: FormListFieldData[];
};
