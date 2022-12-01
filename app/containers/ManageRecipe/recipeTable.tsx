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
import { makeIsLoadingSelector, makeRecipesSelector } from './selectors';
import { setIdAction } from './actions';

const stateSelector = createStructuredSelector({
    recipes: makeRecipesSelector(),
    isLoading: makeIsLoadingSelector(),
});

const { confirm } = Modal;

function RecipeTable(props: any) {
    const { onEdit, onDelete } = props;
    const { recipes, isLoading } = useSelector(stateSelector);
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
            title: intl.formatMessage(messages.pictureCol),
            dataIndex: 'pictures',
            key: 'pictures',
            align: 'center',
            render: (value, record, index) => {
                return (<>
                    {value && value[0] ? <Image src={value[0]} /> : <></>}
                </>)
            }
        },
        {
            title: intl.formatMessage(messages.nameCol),
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: intl.formatMessage(messages.detailLabel),
            dataIndex: 'id',
            key: 'action',
            align: 'center',
            render: (_, { _id, name }: any) => (
                <div className="action-column">
                    <Button type='text' shape='circle' onClick={() => onEdit(_id)}>
                        <EditOutlined />
                    </Button>
                    <ConfirmDelete
                        disabled={false}
                        name={name}
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
            dataSource={recipes?.data ?? []}
            scroll={{ x: 500 }}
            locale={{
                triggerDesc: intl.formatMessage(commonMessages.descendSorting),
                triggerAsc: intl.formatMessage(commonMessages.ascendSorting),
                cancelSort: intl.formatMessage(commonMessages.noSorting)
            }}
        />
    )
}

RecipeTable.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default RecipeTable