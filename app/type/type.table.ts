import { FilterValue, TablePaginationConfig } from 'antd/lib/table/interface';
import React from 'react';

export interface DataType {
  index: string;
  key: React.Key;
  title: string;
  dataIndex: string;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}
