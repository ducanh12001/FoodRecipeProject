import { FormListFieldData } from "antd/es/form"

export type EmptyFieldsType = {
    email: string,
    companyType: number,
    companyName: string,
    address: string,
    name: string,
    password: string,
    confirmPassword: string,
    username: string,
    accept: boolean,    
}

export type InitialStateType = {
    initialValues: EmptyFieldsType,
    formValues: object,
    errors: FormListFieldData[],
    error: string,
    isLoading: boolean,
    clearFormValue: boolean,   
}