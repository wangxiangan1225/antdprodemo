import React from 'react';
import { Card, Row, Col, Statistic, Table, Progress, List, Avatar, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, UserOutlined, ShoppingCartOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons';
import { Line, Pie, Column } from '@ant-design/plots';

const Dashboard = () => {
  // 销售趋势数据
  const salesData = [
    { date: '2024-01', value: 3500 },
    { date: '2024-02', value: 4200 },
    { date: '2024-03', value: 3800 },
    { date: '2024-04', value: 5100 },
    { date: '2024-05', value: 4800 },
    { date: '2024-06', value: 6000 },
  ];

  // 用户分布数据
  const userDistributionData = [
    { type: '新用户', value: 40 },
    { type: '活跃用户', value: 35 },
    { type: '沉睡用户', value: 25 },
  ];

  // 产品销量数据
  const productData = [
    { product: '产品A', sales: 1200 },
    { product: '产品B', sales: 980 },
    { product: '产品C', sales: 850 },
    { product: '产品D', sales: 720 },
    { product: '产品E', sales: 650 },
  ];

  // 最近活动数据
  const recentActivities = [
    { id: 1, user: '张三', action: '购买了产品A', time: '10分钟前', status: 'success' },
    { id: 2, user: '李四', action: '提交了退款申请', time: '30分钟前', status: 'warning' },
    { id: 3, user: '王五', action: '完成了订单', time: '1小时前', status: 'success' },
    { id: 4, user: '赵六', action: '发表了评论', time: '2小时前', status: 'default' },
  ];

  // 销售趋势图配置
  const lineConfig = {
    data: salesData,
    xField: 'date',
    yField: 'value',
    smooth: true,
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  // 用户分布图配置
  const pieConfig = {
    data: userDistributionData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'element-active' }],
  };

  // 产品销量图配置
  const columnConfig = {
    data: productData,
    xField: 'product',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      sales: {
        alias: '销量',
      },
    },
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* 统计卡片 */}
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="总销售额"
              value={112893}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix="¥"
              suffix={<ArrowUpOutlined />}
            />
            <div style={{ marginTop: 8 }}>
              <span style={{ color: '#3f8600' }}>12% 增长</span>
              <span style={{ marginLeft: 8, color: '#999' }}>较上周</span>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="访问量"
              value={8846}
              valueStyle={{ color: '#cf1322' }}
              prefix={<UserOutlined />}
              suffix={<ArrowDownOutlined />}
            />
            <div style={{ marginTop: 8 }}>
              <span style={{ color: '#cf1322' }}>8% 下降</span>
              <span style={{ marginLeft: 8, color: '#999' }}>较上周</span>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="订单数"
              value={1234}
              valueStyle={{ color: '#1890ff' }}
              prefix={<ShoppingCartOutlined />}
            />
            <div style={{ marginTop: 8 }}>
              <span style={{ color: '#1890ff' }}>23% 增长</span>
              <span style={{ marginLeft: 8, color: '#999' }}>较上周</span>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="新增用户"
              value={567}
              valueStyle={{ color: '#722ed1' }}
              prefix={<TeamOutlined />}
            />
            <div style={{ marginTop: 8 }}>
              <span style={{ color: '#722ed1' }}>15% 增长</span>
              <span style={{ marginLeft: 8, color: '#999' }}>较上周</span>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 图表区域 */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={16}>
          <Card title="销售趋势">
            <Line {...lineConfig} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="用户分布">
            <Pie {...pieConfig} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={12}>
          <Card title="产品销量排行">
            <Column {...columnConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="最近活动">
            <List
              itemLayout="horizontal"
              dataSource={recentActivities}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={item.user}
                    description={item.action}
                  />
                  <div>
                    <Tag color={
                      item.status === 'success' ? 'green' :
                      item.status === 'warning' ? 'orange' : 'default'
                    }>
                      {item.time}
                    </Tag>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* 进度展示 */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={8}>
          <Card title="销售目标完成度">
            <Progress type="circle" percent={75} />
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <div>目标：¥100,000</div>
              <div>当前：¥75,000</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="用户增长目标">
            <Progress type="circle" percent={60} status="active" />
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <div>目标：1,000</div>
              <div>当前：600</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="订单完成率">
            <Progress type="circle" percent={90} status="success" />
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <div>目标：95%</div>
              <div>当前：90%</div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 