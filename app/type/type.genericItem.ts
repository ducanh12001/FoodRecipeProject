import { FormListFieldData } from "antd/es/form"

export type EmptyFormFieldType = {
    name: string,
    description: string,
    results?: Array<any>
}

export type InitialStateType = {
    initialValues: EmptyFormFieldType,
    formValues: object,
    areas: GenericItemsType,
    pageNumber: number,
    pageSize: number,
    errors: FormListFieldData[],
    isLoading: false,
    initiateClean: false,
    formMethod?: string,
    id?: string,    
}

export type GenericItemsType = {
    items: Array<any> | [],
    pageSize: number,
    currentPage: number,
    totalItems: number,
    next: number,
    previous: number,
}