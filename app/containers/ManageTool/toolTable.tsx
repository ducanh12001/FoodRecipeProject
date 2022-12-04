import { Button, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import commonMessages from 'common/messages';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ConfirmDelete from 'components/ConfirmDelete';
import messages from './messages';
import { ColumnsType } from 'antd/lib/table';
import PropTypes from 'prop-types';
import { 
    makeIsLoadingSelector, makeToolsSelector 
} from './selectors';
import { setIdAction } from './actions';

const stateSelector = createStructuredSelector({
    isLoading: makeIsLoadingSelector(),
    tools: makeToolsSelector(),
});

const { confirm } = Modal;

function ToolTable(props: any) {
    const { onEdit, onDelete } = props;
    const { isLoading, tools } = useSelector(stateSelector);
    const dispatch = useDispatch();
    const intl = useIntl();
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const columns: ColumnsType<any> = [
        {
            title: intl.formatMessage(commonMessages.listNumberLabel),
            dataIndex: '',
            width: '5%',
            align: 'right',
            render: (value, record, index) => (pageNumber - 1) * pageSize + index + 1,
        },
        {
            title: intl.formatMessage(commonMessages.titleCol),
            dataIndex: 'title',
            key: 'title',
            sorter: (a: any, b: any) => {
                let fa = a.title.toLowerCase(),
                    fb = b.title.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: intl.formatMessage(commonMessages.detailLabel),
            dataIndex: 'id',
            key: 'action',
            align: 'center',
            render: (_, { _id, title }: any) => (
                <div className="action-column">
                    <Button type='text' shape='circle' onClick={() => onEdit(_id)}>
                        <EditOutlined />
                    </Button>
                    <ConfirmDelete
                        disabled={false}
                        name={title}
                        onClickAccept={() => onDelete(_id)}
                        placement={'topLeft'}
                    >
                        <Button type='text' shape='circle'>
                            <DeleteOutlined />
                        </Button>
                    </ConfirmDelete>
                </div>
            )
        },
    ];

    const paginationOptions = {
        showSizeChanger: true,
        showQuickJumper: true,
        onChange: (page: number, pageSize: number) => {
            setPageNumber(page);
            setPageSize(pageSize);
        },
        pageSizeOptions: [5, 10, 20],
        total: tools?.data?.length,
        showTotal: (total: number, range: Array<number>) => (
            <FormattedMessage
                {...commonMessages.pagination}
                values={{ start: range[0], end: range[1], total }}
            />
        ),
    };

    useEffect(() => {
        dispatch(setIdAction(''));
      }, []);

    return (
        <Table
            columns={columns}
            rowKey={(record) => record._id}
            loading={isLoading}
            dataSource={tools?.data ?? []}
            pagination={paginationOptions}
            scroll={{ x: 500 }}
            locale={{
                triggerDesc: intl.formatMessage(commonMessages.descendSorting),
                triggerAsc: intl.formatMessage(commonMessages.ascendSorting),
                cancelSort: intl.formatMessage(commonMessages.noSorting)
            }}
        />
    )
}

ToolTable.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ToolTable