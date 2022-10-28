import { FormListFieldData } from "antd/es/form"

export type EmptyFieldsType = {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

export type InitialStateType = {
    initialValues: EmptyFieldsType,
    formValues: object,
    errors: FormListFieldData[],
    error: string,
    isLoading: boolean,
    clearFormValue: boolean,   
}