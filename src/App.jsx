import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Analysis from './pages/Analysis';
import Monitor from './pages/Monitor';
import Settings from './pages/Settings';
import { ConfigProvider, theme as antdTheme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {  switchTheme } from '../config/theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 切换主题
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        ...switchTheme(isDarkMode),
        algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<BasicLayout onThemeChange={toggleTheme} isDarkMode={isDarkMode} />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="monitor" element={<Monitor />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;