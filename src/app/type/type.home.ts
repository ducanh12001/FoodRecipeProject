import { FormListFieldData } from 'antd/es/form';

export type HomeSingle = {
  contributors: Contributor | [];
  isLoading: boolean;
  errors: FormListFieldData[];
};
export type Contributor = {
  data: object;
};
