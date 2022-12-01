import { Button, Image, Modal, Table } from 'antd';
import React, { useEffect } from 'react'
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import commonMessages from 'common/messages';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ConfirmDelete from 'components/ConfirmDelete';
import messages from './messages';
import { ColumnsType } from 'antd/lib/table';
import PropTypes from 'prop-types';
import { makeIsLoadingSelector, makeBooksSelector } from './selectors';
import { setIdAction } from './actions';

const stateSelector = createStructuredSelector({
    books: makeBooksSelector(),
    isLoading: makeIsLoadingSelector(),
});

const { confirm } = Modal;

function BookTable(props: any) {
    const { onEdit, onDelete } = props;
    const { books, isLoading } = useSelector(stateSelector);
    const dispatch = useDispatch();
    const intl = useIntl();

    const columns: ColumnsType<any> = [
        {
            title: intl.formatMessage(commonMessages.listNumberLabel),
            dataIndex: '',
            width: '5%',
            align: 'right',
            render: (value, record, index) => index
        },
        {
            title: intl.formatMessage(messages.titleCol),
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: intl.formatMessage(messages.detailLabel),
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

    useEffect(() => {
        dispatch(setIdAction(''));
      }, []);

    return (
        <Table
            columns={columns}
            rowKey={(record) => record._id}
            loading={isLoading}
            dataSource={books?.data ?? []}
            scroll={{ x: 500 }}
            locale={{
                triggerDesc: intl.formatMessage(commonMessages.descendSorting),
                triggerAsc: intl.formatMessage(commonMessages.ascendSorting),
                cancelSort: intl.formatMessage(commonMessages.noSorting)
            }}
        />
    )
}

BookTable.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default BookTable