import React from 'react';
import { Col, Pagination, Row, Select, Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import commonMessages from 'common/messages';


const { Option } = Select;
function PaginationComponent(props: any) {
    const { pagination, handleChangePagination, isShowSize=true,className} = props;

    const fromRecord = Math.floor(1 + (pagination.pageNumber - 1) * pagination.pageSize);
    const toRecord = pagination.totalItems > pagination.pageNumber * pagination.pageSize ? Math.floor(pagination.pageNumber * pagination.pageSize) : pagination.totalItems;
    const total = pagination.totalItems

    const handleChangePageSize =(pageSize:number) => {
      if(pageSize > pagination.totalItems && pagination.currentPage > 1 ){
        const page_number = Math.ceil(pagination.totalItems/pageSize);
        handleChangePagination(page_number,pageSize)
      }
      else {
        handleChangePagination(pagination.currentPage,pageSize)
      }
    }

    const SelectRecordShow = () => {
        return (
            <Select
                defaultValue={pagination.pageSize}
                style={{ width: 60 }}
                onChange={(value) =>handleChangePageSize(value)}
            >
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
                <Option value={30}>30</Option>
            </Select>
        );
    };

    return (
        <div className="pagination-component">
            { isShowSize ? <Row>
                <Col xs={6} className="pagination-component-range">
                    <Typography>
                      <FormattedMessage {...commonMessages.pagination} values={{ start: fromRecord, end: toRecord, total }}/>
                    </Typography>
                </Col>
                <Col xs={8}></Col>
                <Col xs={10} className="pagination-component-page-group">
                    <div style={{marginRight:'20px'}}>
                        <SelectRecordShow />
                    </div>
                    <Pagination
                        pageSize={pagination.pageSize ?? 0}
                        current={pagination.pageNumber ?? 0}
                        defaultCurrent={pagination.currentPage ?? 0}
                        total={pagination.totalItems}
                        onChange={handleChangePagination}
                    />
                </Col>
            </Row> : <Row>
            <Col xs={24} className={`pagination-component-page-group pagination-center ${className}`} >
                    <Pagination
                        pageSize={pagination.pageSize ?? 0}
                        current={pagination.pageNumber ?? 0}
                        defaultCurrent={pagination.currentPage ?? 0}
                        total={pagination.totalItems}
                        onChange={handleChangePagination}
                    />
                </Col>
              </Row>}
        </div>
    );
}

export default PaginationComponent;
