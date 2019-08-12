#### 这里写各种配置，

// 当前宿主平台 兼容多平台应该通过一定特定函数来取得
export const HOST_PLATFORM: string = 'WEB';

export const NODE_ENV: string = process.env.VUE_APP_ENV || 'production';

// 是否强制所有请求访问本地MOCK，每个请求也可以单独控制是否请求MOCK
export const AJAX_LOCALLY_ENABLE: boolean = false;

// 是否开启监控
export const MONITOR_ENABLE: boolean = true;

// 路由默认配置，路由表并不从此引入
export const ROUTER_DEFAULT_CONFIG: any = {
  waitForData: true,
  transitionOnLoad: true,
};

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG: any = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
};

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG: any = {
  strict: process.env.VUE_APP_ENV !== 'production',
};

// API 默认配置
export const API_DEFAULT_CONFIG: any = {
  mockBaseURL: 'mockURL',
  // mock: false && process.env.NODE_ENV !== 'production',
  mock: false && process.env.NODE_ENV !== 'production',
  baseURL: 'baseURL',
  debug: false,
  sep: '/',
};

// CONST 默认配置
export const CONST_DEFAULT_CONFIG: any = {
  sep: '/',
};

// 业务相关配置

// 开发配置
export const CONSOLE_REQUEST_ENABLE: boolean = false; // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE: boolean = false; // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE: boolean = false; // 监控记录打印

