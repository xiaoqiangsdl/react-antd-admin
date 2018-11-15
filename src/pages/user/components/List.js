import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar } from 'antd'
import { DropOption } from 'components'
import Link from 'umi/link'
import styles from './List.less'

const { confirm } = Modal

class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '您确定要删除这条记录吗?',
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, ...tableProps } = this.props

    const columns = [
      {
        title: '表头项',
        dataIndex: 'avatar',
        key: 'avatar',
        width: 72,
        fixed: 'left',
        render: text => <Avatar style={{ marginLeft: 8 }} src={text} />,
      },
      {
        title: '表头项',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: '表头项',
        dataIndex: 'nickName',
        key: 'nickName',
      },
      {
        title: '表头项',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '表头项',
        dataIndex: 'isMale',
        key: 'isMale',
        render: text => <span>{text ? 'Male' : 'Female'}</span>,
      },
      {
        title: '表头项',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '表头项',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '表头项',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '表头项',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '表头项',
        key: 'operation',
        fixed: 'right',
        render: (text, record) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: `Update` },
                { key: '2', name: `Delete` },
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => `Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
