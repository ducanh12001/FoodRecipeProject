import { Descriptions } from 'antd'
import React from 'react'

function PersonInfo({user}:any) {

    return (
        <div className="all-container">
            <Descriptions labelStyle={{ fontWeight: 700 }} column={1}>
                <Descriptions.Item label="Tên đầy đủ">1{user?.name || ''}</Descriptions.Item>
                <Descriptions.Item label="Email">1{user?.email || ''}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default PersonInfo