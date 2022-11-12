export type SearchRequest = {
    pageSize: number,
    pageNumber: number,
    filters: Record<string, any>,
    sorters: Record<string, any>
}

export type SearchResponse = {
    items: Array<any> | [],
    pageSize: number,
    currentPage: number,
    totalItems: number,
    next: number,
    previous: number,
}