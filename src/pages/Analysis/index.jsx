import React from 'react';
import { Card, Row, Col, Table, DatePicker, Select, Space, Button, Tabs } from 'antd';
import { DownloadOutlined, ReloadOutlined } from '@ant-design/icons';
import { Line, Area, Radar, Heatmap } from '@ant-design/plots';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const Analysis = () => {
  // 销售趋势数据
  const salesTrendData = [
    { date: '2024-01', value: 3500, type: '线上' },
    { date: '2024-01', value: 2800, type: '线下' },
    { date: '2024-02', value: 4200, type: '线上' },
    { date: '2024-02', value: 3200, type: '线下' },
    { date: '2024-03', value: 3800, type: '线上' },
    { date: '2024-03', value: 2900, type: '线下' },
    { date: '2024-04', value: 5100, type: '线上' },
    { date: '2024-04', value: 4100, type: '线下' },
    { date: '2024-05', value: 4800, type: '线上' },
    { date: '2024-05', value: 3800, type: '线下' },
    { date: '2024-06', value: 6000, type: '线上' },
    { date: '2024-06', value: 4800, type: '线下' },
  ];

  // 用户行为数据
  const userBehaviorData = [
    { type: '访问', value: 85 },
    { type: '注册', value: 65 },
    { type: '下单', value: 45 },
    { type: '支付', value: 35 },
    { type: '复购', value: 25 },
  ];

  // 地区销售数据
  const regionData = [
    { region: '华东', sales: 3500, target: 3000 },
    { region: '华北', sales: 2800, target: 2500 },
    { region: '华南', sales: 4200, target: 4000 },
    { region: '西南', sales: 1800, target: 2000 },
    { region: '西北', sales: 1200, target: 1500 },
  ];

  // 热力图数据
  const heatmapData = [
    { date: '周一', hour: '0', value: 10 },
    { date: '周一', hour: '1', value: 5 },
    { date: '周一', hour: '2', value: 3 },
    { date: '周二', hour: '0', value: 8 },
    { date: '周二', hour: '1', value: 6 },
    { date: '周二', hour: '2', value: 4 },
    // ... 更多数据
  ];

  // 表格列定义
  const columns = [
    {
      title: '地区',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: '销售额',
      dataIndex: 'sales',
      key: 'sales',
      sorter: (a, b) => a.sales - b.sales,
    },
    {
      title: '目标',
      dataIndex: 'target',
      key: 'target',
    },
    {
      title: '完成率',
      key: 'completion',
      render: (_, record) => `${((record.sales / record.target) * 100).toFixed(1)}%`,
    },
  ];

  // 销售趋势图配置
  const areaConfig = {
    data: salesTrendData,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
  };

  // 用户行为图配置
  const radarConfig = {
    data: userBehaviorData,
    xField: 'type',
    yField: 'value',
    meta: {
      value: {
        alias: '转化率',
        min: 0,
        max: 100,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    point: {
      size: 2,
    },
    area: {},
  };

  // 热力图配置
  const heatmapConfig = {
    data: heatmapData,
    xField: 'hour',
    yField: 'date',
    colorField: 'value',
    shape: 'square',
    color: ['#BAE7FF', '#1890FF', '#0050B3'],
    label: {
      offset: -2,
      style: {
        fill: '#fff',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, 0.45)',
      },
    },
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* 顶部操作栏 */}
      <Card style={{ marginBottom: '16px' }}>
        <Space>
          <RangePicker />
          <Select defaultValue="all" style={{ width: 120 }}>
            <Select.Option value="all">全部渠道</Select.Option>
            <Select.Option value="online">线上渠道</Select.Option>
            <Select.Option value="offline">线下渠道</Select.Option>
          </Select>
          <Button type="primary" icon={<ReloadOutlined />}>
            刷新
          </Button>
          <Button icon={<DownloadOutlined />}>
            导出
          </Button>
        </Space>
      </Card>

      {/* 主要内容区域 */}
      <Tabs defaultActiveKey="1">
        <TabPane tab="销售分析" key="1">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="销售趋势">
                <Area {...areaConfig} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="地区销售情况">
                <Table
                  columns={columns}
                  dataSource={regionData}
                  pagination={false}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="用户行为分析">
                <Radar {...radarConfig} />
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="用户分析" key="2">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="用户活跃度热力图">
                <Heatmap {...heatmapConfig} />
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="产品分析" key="3">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="产品分析">
                <p>产品分析内容</p>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Analysis; 