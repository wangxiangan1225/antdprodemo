import React, { useState } from 'react';
import { Layout, Menu, theme, Switch } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  BarChartOutlined,
  MonitorOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const BasicLayout = ({ onThemeChange, isDarkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: '仪表盘',
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: '用户管理',
    },
    {
      key: 'analysis',
      icon: <BarChartOutlined />,
      label: '数据分析',
    },
    {
      key: 'monitor',
      icon: <MonitorOutlined />,
      label: '系统监控',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
  };

  return (
    <Layout style={{ minHeight: '100vh',width: '100%' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu
          theme="dark"
          defaultSelectedKeys={['dashboard']}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ height: '100vh',width: '100%',overflow: 'hidden' }}>
        <Header style={{ padding: 0, background: colorBgContainer }} >
            <div style={{ width: '100%',  padding:20, height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 'bold' }}>
                    用户名
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <Switch
                        checkedChildren={<BulbOutlined />}
                        unCheckedChildren={<BulbOutlined />}
                        checked={isDarkMode}
                        onChange={onThemeChange}
                    />
                    <div style={{ fontSize: 16, fontWeight: 'bold' }}>
                        退出
                    </div>
                </div>
            </div>
        </Header>
        <Content style={{  width: '100%', height: '100%', overflow: 'auto', padding:20 }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout; 