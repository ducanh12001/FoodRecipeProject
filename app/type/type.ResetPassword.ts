import { FieldData } from "rc-field-form/lib/interface";

export type InitialStateType = {
    code: string,
    initialValues: {
      password: string,
      oldPassword: string
    },
    formValues: object,
    isLoading: boolean,
    errors: FieldData[],
    clearFormValue: boolean,    
}