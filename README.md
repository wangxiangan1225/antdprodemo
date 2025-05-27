# Ant Design Pro 后台管理系统

基于 Ant Design Pro 和 React 开发的现代化后台管理系统，提供丰富的组件和功能，帮助快速构建企业级中后台产品。

![仪表盘预览](./public/dashboard.png)
![数据分析预览](./public/analysis.png)

## 功能特性

### 1. 仪表盘
- 数据统计卡片
- 销售趋势图表
- 用户分布分析
- 产品销量排行
- 最近活动列表
- 目标完成进度

### 2. 用户管理
- 用户列表展示
- 用户信息编辑
- 用户状态管理
- 分页和搜索功能
- 数据导出功能

### 3. 数据分析
- 销售趋势分析
- 用户行为分析
- 地区销售情况
- 用户活跃度热力图
- 多维度数据筛选

### 4. 系统监控
- 系统运行状态
- CPU/内存使用率
- 服务状态监控
- 系统告警信息
- 系统事件时间线

### 5. 系统设置
- 基本设置（系统名称、Logo、主题等）
- 安全设置（会话超时、密码策略等）
- 邮件设置（SMTP配置）
- 备份设置（备份策略、保留策略）

## 技术栈

- **前端框架**：React 18
- **UI 框架**：Ant Design 5.x
- **图表库**：@ant-design/plots
- **路由**：React Router 6
- **构建工具**：Vite
- **包管理器**：Yarn

## 开发环境要求

- Node.js >= 16.0.0
- Yarn >= 1.22.0

## 快速开始

1. 克隆项目
```bash
git clone [项目地址]
cd antproDemo
```

2. 安装依赖
```bash
yarn install
```

3. 启动开发服务器
```bash
yarn dev
```

4. 构建生产版本
```bash
yarn build
```

## 项目结构

```
antproDemo/
├── src/
│   ├── components/     # 公共组件
│   ├── layouts/        # 布局组件
│   ├── pages/         # 页面组件
│   │   ├── Dashboard/ # 仪表盘
│   │   ├── Users/     # 用户管理
│   │   ├── Analysis/  # 数据分析
│   │   ├── Monitor/   # 系统监控
│   │   └── Settings/  # 系统设置
│   ├── utils/         # 工具函数
│   ├── App.jsx        # 应用入口
│   └── main.jsx       # 主入口文件
├── public/            # 静态资源
├── config/            # 配置文件
├── package.json       # 项目配置
└── README.md         # 项目说明
```

## 开发指南

### 添加新页面
1. 在 `src/pages` 目录下创建新的页面组件
2. 在 `src/App.jsx` 中添加路由配置
3. 在 `src/layouts/BasicLayout.jsx` 中添加菜单项

### 使用图表组件
项目使用 @ant-design/plots 图表库，支持多种图表类型：
- 折线图（Line）
- 柱状图（Column）
- 饼图（Pie）
- 面积图（Area）
- 雷达图（Radar）
- 热力图（Heatmap）
- 仪表盘（Gauge）

### 主题定制
可以通过修改 `config/theme.js` 文件来自定义主题：
- 主色调
- 字体
- 圆角
- 间距
- 其他样式变量

## 性能优化

1. 路由懒加载
```jsx
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
```

2. 组件按需加载
```jsx
import { Button } from 'antd';
```

3. 图片优化
- 使用 webp 格式
- 图片懒加载
- 适当的图片压缩

4. 缓存策略
- 合理使用 localStorage
- 配置适当的缓存头
- 使用 Service Worker

## 常见问题

### 1. 开发环境问题
Q: 启动项目时报错 "Module not found"
A: 检查依赖是否正确安装，尝试删除 node_modules 后重新安装

Q: 热更新不生效
A: 检查 vite.config.js 配置，确保 HMR 配置正确

### 2. 构建问题
Q: 构建后页面空白
A: 检查路由配置和资源路径是否正确

Q: 构建文件过大
A: 使用代码分割和懒加载优化

### 3. 部署问题
Q: 刷新页面 404
A: 配置服务器支持 HTML5 History 模式

Q: 静态资源加载失败
A: 检查 publicPath 配置和资源路径

## 更新日志

### v1.0.0 (2024-03-xx)
- 初始版本发布
- 实现基础功能模块
- 完成核心页面开发

### v1.1.0 (计划中)
- 添加更多图表类型
- 优化页面性能
- 增加数据导出功能
- 完善错误处理

## 部署说明

1. 构建项目
```bash
yarn build
```

2. 部署 dist 目录到 Web 服务器

3. 配置服务器
- 支持 HTML5 History 模式
- 配置适当的缓存策略
- 启用 Gzip 压缩

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交变更
4. 推送到分支
5. 创建 Pull Request

### 代码规范
- 使用 ESLint 进行代码检查
- 遵循 React 最佳实践
- 保持代码简洁清晰
- 添加必要的注释

### 提交规范
```
feat: 新功能
fix: 修复问题
docs: 文档修改
style: 代码格式修改
refactor: 代码重构
test: 测试用例修改
chore: 其他修改
```

## 许可证

MIT License

## 联系方式

- 项目地址：[GitHub 仓库地址]
- 问题反馈：[Issues 页面]
- 邮件联系：[邮箱地址]

## 致谢

感谢所有为本项目做出贡献的开发者！
