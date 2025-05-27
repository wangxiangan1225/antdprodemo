import React from 'react';
import { Card, Row, Col, Progress, Statistic, Table, Tag, Alert, Timeline } from 'antd';
import { Line, Gauge } from '@ant-design/plots';
import { 
  CheckCircleOutlined, 
  WarningOutlined, 
  CloseCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined
} from '@ant-design/icons';

const Monitor = () => {
  // CPU 使用率数据
  const cpuData = [
    { time: '00:00', value: 35 },
    { time: '01:00', value: 28 },
    { time: '02:00', value: 25 },
    { time: '03:00', value: 30 },
    { time: '04:00', value: 32 },
    { time: '05:00', value: 40 },
    { time: '06:00', value: 45 },
    { time: '07:00', value: 50 },
    { time: '08:00', value: 65 },
    { time: '09:00', value: 70 },
    { time: '10:00', value: 75 },
    { time: '11:00', value: 80 },
  ];

  // 系统告警数据
  const alerts = [
    { id: 1, level: 'error', message: '数据库连接异常', time: '10分钟前' },
    { id: 2, level: 'warning', message: 'CPU使用率超过80%', time: '30分钟前' },
    { id: 3, level: 'info', message: '系统更新完成', time: '1小时前' },
  ];

  // 服务状态数据
  const services = [
    { name: 'Web服务', status: 'running', uptime: '30天', cpu: 45, memory: 60 },
    { name: '数据库服务', status: 'running', uptime: '30天', cpu: 35, memory: 70 },
    { name: '缓存服务', status: 'warning', uptime: '15天', cpu: 55, memory: 80 },
    { name: '消息队列', status: 'error', uptime: '2天', cpu: 65, memory: 75 },
  ];

  // 系统事件时间线
  const events = [
    { time: '2024-01-01 10:00', content: '系统启动', status: 'success' },
    { time: '2024-01-01 10:05', content: '数据库连接成功', status: 'success' },
    { time: '2024-01-01 10:10', content: '缓存服务异常', status: 'error' },
    { time: '2024-01-01 10:15', content: '缓存服务恢复', status: 'success' },
  ];

  // CPU 使用率图表配置
  const lineConfig = {
    data: cpuData,
    xField: 'time',
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

  // 服务状态表格列定义
  const columns = [
    {
      title: '服务名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const statusMap = {
          running: { color: 'success', text: '运行中' },
          warning: { color: 'warning', text: '警告' },
          error: { color: 'error', text: '错误' },
        };
        const { color, text } = statusMap[status];
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: '运行时间',
      dataIndex: 'uptime',
      key: 'uptime',
    },
    {
      title: 'CPU使用率',
      dataIndex: 'cpu',
      key: 'cpu',
      render: (value) => <Progress percent={value} size="small" />,
    },
    {
      title: '内存使用率',
      dataIndex: 'memory',
      key: 'memory',
      render: (value) => <Progress percent={value} size="small" />,
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* 系统状态概览 */}
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="系统运行时间"
              value="30天"
              valueStyle={{ color: '#3f8600' }}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="CPU使用率"
              value={75}
              suffix="%"
              valueStyle={{ color: '#cf1322' }}
              prefix={<WarningOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="内存使用率"
              value={65}
              suffix="%"
              valueStyle={{ color: '#1890ff' }}
              prefix={<SyncOutlined spin />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="磁盘使用率"
              value={45}
              suffix="%"
              valueStyle={{ color: '#722ed1' }}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* 告警信息 */}
      <Card style={{ marginTop: '16px' }}>
        <Alert
          message="系统告警"
          description={
            <div>
              {alerts.map(alert => (
                <div key={alert.id} style={{ marginBottom: '8px' }}>
                  <Tag color={
                    alert.level === 'error' ? 'red' :
                    alert.level === 'warning' ? 'orange' : 'blue'
                  }>
                    {alert.level.toUpperCase()}
                  </Tag>
                  {alert.message}
                  <span style={{ marginLeft: '8px', color: '#999' }}>
                    {alert.time}
                  </span>
                </div>
              ))}
            </div>
          }
          type="warning"
          showIcon
        />
      </Card>

      {/* 监控图表 */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={16}>
          <Card title="CPU使用率趋势">
            <Line {...lineConfig} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="系统负载">
            <Gauge
              percent={0.75}
              range={{
                color: ['l(0) 0:#52c41a 0.5:#faad14 1:#f5222d'],
              }}
              indicator={{
                pointer: {
                  style: {
                    stroke: '#D0D0D0',
                  },
                },
                pin: {
                  style: {
                    stroke: '#D0D0D0',
                  },
                },
              }}
              statistic={{
                title: {
                  style: {
                    color: '#363636',
                  },
                  formatter: () => '系统负载',
                },
                content: {
                  style: {
                    color: '#363636',
                  },
                  formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                },
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* 服务状态 */}
      <Card title="服务状态" style={{ marginTop: '16px' }}>
        <Table
          columns={columns}
          dataSource={services}
          pagination={false}
        />
      </Card>

      {/* 系统事件时间线 */}
      <Card title="系统事件" style={{ marginTop: '16px' }}>
        <Timeline>
          {events.map((event, index) => (
            <Timeline.Item
              key={index}
              color={
                event.status === 'success' ? 'green' :
                event.status === 'error' ? 'red' : 'blue'
              }
            >
              <p>{event.time}</p>
              <p>{event.content}</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </Card>
    </div>
  );
};

export default Monitor; 