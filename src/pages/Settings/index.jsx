import React from 'react';
import { Card, Form, Input, Switch, Select, Button, Divider, message, Space, Row, Col } from 'antd';
import { SaveOutlined, ReloadOutlined } from '@ant-design/icons';

const { Option } = Select;

const Settings = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('设置保存:', values);
    message.success('设置保存成功');
  };

  const handleReset = () => {
    form.resetFields();
    message.info('已重置所有设置');
  };

  return (
    <div style={{ padding: '24px' }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          systemName: '后台管理系统',
          systemLogo: 'https://example.com/logo.png',
          theme: 'light',
          language: 'zh_CN',
          enableNotification: true,
          enableAudit: true,
          sessionTimeout: 30,
          passwordExpireDays: 90,
          enableTwoFactor: false,
          smtpServer: 'smtp.example.com',
          smtpPort: 465,
          smtpUser: 'admin@example.com',
          backupFrequency: 'daily',
          backupTime: '02:00',
          retentionDays: 30,
        }}
      >
        {/* 基本设置 */}
        <Card title="基本设置" style={{ marginBottom: 24 }}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="系统名称"
                name="systemName"
                rules={[{ required: true, message: '请输入系统名称' }]}
              >
                <Input placeholder="请输入系统名称" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="系统Logo"
                name="systemLogo"
                rules={[{ required: true, message: '请输入系统Logo地址' }]}
              >
                <Input placeholder="请输入系统Logo地址" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="主题设置" name="theme">
                <Select>
                  <Option value="light">浅色主题</Option>
                  <Option value="dark">深色主题</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="系统语言" name="language">
                <Select>
                  <Option value="zh_CN">简体中文</Option>
                  <Option value="en_US">English</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* 安全设置 */}
        <Card title="安全设置" style={{ marginBottom: 24 }}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="启用通知" name="enableNotification" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="启用审计" name="enableAudit" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="会话超时时间(分钟)" name="sessionTimeout">
                <Input type="number" min={5} max={120} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="密码过期时间(天)" name="passwordExpireDays">
                <Input type="number" min={30} max={365} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="启用双因素认证" name="enableTwoFactor" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Card>

        {/* 邮件设置 */}
        <Card title="邮件设置" style={{ marginBottom: 24 }}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="SMTP服务器" name="smtpServer">
                <Input placeholder="请输入SMTP服务器地址" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="SMTP端口" name="smtpPort">
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="SMTP用户名" name="smtpUser">
                <Input placeholder="请输入SMTP用户名" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="SMTP密码" name="smtpPassword">
                <Input.Password placeholder="请输入SMTP密码" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* 备份设置 */}
        <Card title="备份设置" style={{ marginBottom: 24 }}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="备份频率" name="backupFrequency">
                <Select>
                  <Option value="daily">每天</Option>
                  <Option value="weekly">每周</Option>
                  <Option value="monthly">每月</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="备份时间" name="backupTime">
                <Input type="time" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="保留天数" name="retentionDays">
            <Input type="number" min={1} max={365} />
          </Form.Item>
        </Card>

        {/* 操作按钮 */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Space>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              保存设置
            </Button>
            <Button onClick={handleReset} icon={<ReloadOutlined />}>
              重置
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default Settings; 