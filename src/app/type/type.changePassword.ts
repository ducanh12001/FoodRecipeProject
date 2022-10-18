import { FieldData } from "rc-field-form/lib/interface";

export type InitialStateType = {
    code: string,
    initialValues: {
      newPass: string,
      oldPass: string
    },
    formValues: object,
    isLoading: boolean,
    errors: FieldData[],
    clearFormValue: boolean,    
}
