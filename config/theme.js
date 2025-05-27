// 主题配置
export const theme = {
  token: {
    // 主题色
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1890ff',

    // 字体
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,

    // 圆角
    borderRadius: 4,
    borderRadiusLG: 8,
    borderRadiusSM: 2,

    // 间距
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    margin: 16,
    marginLG: 24,
    marginSM: 12,

    // 阴影
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    boxShadowSecondary: '0 6px 16px rgba(0, 0, 0, 0.12)',
    boxShadowTertiary: '0 8px 24px rgba(0, 0, 0, 0.12)',

    // 动画
    motionDurationFast: '0.1s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',

    // 组件样式
    components: {
      // 按钮
      Button: {
        borderRadius: 4,
        controlHeight: 32,
        controlHeightLG: 40,
        controlHeightSM: 24,
        paddingInline: 16,
        paddingInlineLG: 24,
        paddingInlineSM: 8,
      },
      // 卡片
      Card: {
        borderRadiusLG: 8,
        paddingLG: 24,
      },
      // 表格
      Table: {
        borderRadiusLG: 8,
        headerBg: '#fafafa',
        headerColor: 'rgba(0, 0, 0, 0.88)',
        rowHoverBg: '#fafafa',
      },
      // 表单
      Form: {
        itemMarginBottom: 24,
        verticalLabelPadding: '0 0 8px',
      },
      // 输入框
      Input: {
        borderRadius: 4,
        controlHeight: 32,
        controlHeightLG: 40,
        controlHeightSM: 24,
        paddingInline: 12,
        paddingInlineLG: 16,
        paddingInlineSM: 8,
      },
      // 选择器
      Select: {
        borderRadius: 4,
        controlHeight: 32,
        controlHeightLG: 40,
        controlHeightSM: 24,
      },
      // 菜单
      Menu: {
        itemHeight: 40,
        itemHoverBg: 'rgba(0, 0, 0, 0.04)',
        itemSelectedBg: '#e6f7ff',
        itemSelectedColor: '#1890ff',
      },
    },
  },
};

// 暗色主题配置
export const darkTheme = {
  token: {
    ...theme.token,
    // 暗色主题特定配置
    colorBgContainer: '#141414',
    colorBgElevated: '#1f1f1f',
    colorBgLayout: '#000000',
    colorText: 'rgba(255, 255, 255, 0.85)',
    colorTextSecondary: 'rgba(255, 255, 255, 0.45)',
    colorBorder: '#303030',
    colorBorderSecondary: '#303030',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.45)',
    boxShadowSecondary: '0 6px 16px rgba(0, 0, 0, 0.42)',
    boxShadowTertiary: '0 8px 24px rgba(0, 0, 0, 0.42)',
  },
};

// 主题切换函数
export const switchTheme = (isDark) => {
  return isDark ? darkTheme : theme;
};

// 主题色生成函数
export const generateTheme = (primaryColor) => {
  return {
    ...theme,
    token: {
      ...theme.token,
      colorPrimary: primaryColor,
    },
  };
};

// 导出主题配置
export default theme; 