import { FormListFieldData } from "antd/es/form"
import { Rule } from "antd/lib/form"
import { MessageDescriptor } from "react-intl"

export type EmptyFieldType = {
    username: string,
    email: string,
    name: string,
    status: string,
}

export type InitialStateType = {
    initialValues: EmptyFieldType,
    formValues: object,
    keywords: string,
    username: string,
    email: string,
    name: string,
    password: string,
    status: string,
    confirmPassword: string,
    pageNumber: number,
    clearFormField: boolean,
    pageSize: number,
    limit: number,
    users: User,
    errors: FormListFieldData[],
    isLoading: boolean,
    formMethod?: string,
    id?: string,
    
}

export type SelectInputWrapperProps = {
    name?: string | number | (string | number)[];
    value?: string | number;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    children?: React.ReactNode;
    rules?: Rule[];
    label?: any;
    id?: string;
    classname?: string;
    changeHandler?: (...arg: any[]) => any;
  }

export type User = {
    results: Array<any> | [],
    pageSize: number,
    currentPage: number,
    totalItems: number,
    next: number,
    previous: number,
}