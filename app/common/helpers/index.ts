interface QueryObj {
  PageNumber: number;
  PageSize: number;
  Keywords: string | null;
  SortBy: string | null;
  SortDirection: string | null;
  Filters: Map<string, any> | null;
}

const buildQueryString = (
  keywords: string,
  pageNumber: number,
  pageSize: number,
  sortBy: string | null = null,
  sortDirection: string | null = null,
  filters: Map<string, any> | null = null,
) => {
  const queryObj: QueryObj = {
    PageNumber: pageNumber > 0 ? pageNumber : 1,
    PageSize: pageSize > 0 ? pageSize : 10,
    Keywords: null,
    SortBy: null,
    SortDirection: null
  };
  if (keywords && keywords.trim().length > 0) {
    queryObj.Keywords = keywords;
  }
  if (sortBy && sortBy.trim().length > 0) {
    queryObj.SortBy = sortBy;
  }
  if (sortDirection && sortDirection.trim().length > 0) {
    queryObj.SortDirection = convertAntdSortDirection(sortDirection);
  } else {
    queryObj.SortBy = '';
    queryObj.SortDirection = '';
  }

  let queryString = Object.keys(queryObj)
    .map((key) => `${key}=${queryObj[key]}`)
    .join('&');

  if (filters && filters.size > 0) {
    const filterPairs = Array<string>();
    filters.forEach((key, value) => filterPairs.push(`${value}=${key}`));
    const filterString = filterPairs.join('&');
    queryString = `${queryString}&${filterString}`;
  }

  return queryString;
};

const convertAntdSortDirection = (direction: string) => {
  return direction === "descend" ? "desc" : direction === "ascend" ? "asc" : direction;
}

export { buildQueryString };


