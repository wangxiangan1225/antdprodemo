import React, { useState } from 'react';
import { ProTable } from '@ant-design/pro-components';
import { Button, Space, Tag, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Users = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      copyable: true,
      fixed: 'left',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      valueEnum: {
        0: { text: '禁用', status: 'Error' },
        1: { text: '正常', status: 'Success' },
      },
    },
    {
      title: '角色',
      dataIndex: 'role',
      width: 120,
      valueEnum: {
        admin: { text: '管理员', status: 'Success' },
        user: { text: '普通用户', status: 'Default' },
      },
    },
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 120,
      render: () => [
        <a key="edit">编辑</a>,
        <a key="delete">删除</a>,
      ],
    },
  ];

  const dataSource = [
    {
      id: 1,
      username: 'admin',
      name: '管理员',
      email: 'admin@example.com',
      status: 1,
      role: 'admin',
    },
    {
      id: 2,
      username: 'user1',
      name: '张三',
      email: 'user1@example.com',
      status: 1,
      role: 'user',
    },
  ];

  const handlePageChange = (page, size) => {
    setCurrent(page);
    setPageSize(size);
  };

  return (
    <div style={{ 
      height: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        flex: 1,
        borderRadius: '8px',
        overflow: 'hidden',
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <ProTable
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          search={{
            labelWidth: 120,
          }}
          options={false}
          style={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
          scroll={{ x: 'max-content' }}
          pagination={false}
          cardProps={{
            bodyStyle: { 
              padding: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }
          }}
        />
      </div>
      <div style={{ 
        padding: '8px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pagination
          current={current}
          pageSize={pageSize}
          total={dataSource.length}
          showQuickJumper
          showSizeChanger
          showTotal={(total) => `共 ${total} 条`}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Users; 