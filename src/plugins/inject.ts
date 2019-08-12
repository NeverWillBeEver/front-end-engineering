import axios from './axios';
import api from './api';
import consts from './const';
import bridge from './bridge';

export default {
  install: (vue: any, options: any) => {
    vue.prototype.$api = api;
    vue.prototype.$axios = axios;
    vue.prototype.$const = consts;
    vue.prototype.$register = bridge.registerHandler;
    vue.prototype.$call = bridge.callHandler;
    // vue.prototype.$cookie = cookie;
  }
};
