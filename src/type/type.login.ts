import { FormListFieldData } from "antd/es/form";

export type LoginState = {
  initialValues: Login;
  formValues: object;
  errors: FormListFieldData[];
  isLoading: boolean;
};

export type Login = {
  email: string,
  password: string,
}
