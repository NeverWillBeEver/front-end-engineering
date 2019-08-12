import axios from './axios';
import {isArray, isObject, isFormData, assert} from '@/utils';

import {API_DEFAULT_CONFIG} from '@/config';
import API_CONFIG from 'service/api';

class MakeApi {
  public api: any;

  constructor(options: any) {
    this.api = {};
    this.apiBuilder(options);
  }

  public apiBuilder(
    {
      sep = '|',
      config = {},
      mock = false,
      debug = false,
      mockBaseURL = '',
    }: {
      sep: string,
      config: any,
      mock: boolean,
      debug: boolean,
      mockBaseURL: string,
    }) {
    Object.keys(config).map((namespace: string) => {
      this._apiSingleBuilder({
        namespace,
        mockBaseURL,
        mock,
        sep,
        debug,
        config: config[namespace],
      });
    });
  }

  public _apiSingleBuilder(
    {
      namespace = '',
      sep = '|',
      config = [],
      debug = false,
      mockBaseURL = '',
      mock = false,
    }) {
    config.forEach((api: any) => {
      const {name, id, desc, params, method, path, mock: _mock, mockPath} = api;
      const apiName = `${namespace}${sep}${name}`;
      const regExp: RegExp = /^\//;
      let baseURL: string = API_DEFAULT_CONFIG.baseURL;
      let url = path;
      if (regExp.test(path)) {
        url = path;
        baseURL = '';
        if (mock && _mock) {
          url = `${api.id}${api.path}`;
          baseURL = API_DEFAULT_CONFIG.mockBaseURL;
        }
      } else {
        if (mock && _mock) {
          url = `${api.id}${sep}${api.path}`;
          baseURL = API_DEFAULT_CONFIG.mockBaseURL;
        }
      }
      if (debug) {
        assert(name, `${url} :接口name属性不能为空`);
        assert(url.indexOf('/') === 0, `${url} :接口路径path，首字符应为/`);
      }

      Object.defineProperty(this.api, apiName, {
        value(outerParams: any = {}, outerOptions: any) {
          let _data = Object.assign({}, params, outerParams);
          if (isArray(outerParams)) {
            _data = outerParams;
          }
          if (isFormData(outerParams)) {
            _data = outerParams;
          }
          const axiosConfig = _normalize(Object.assign({
            url,
            id,
            desc,
            baseURL,
            method,
            _mock,
          }, outerOptions), _data);
          return axios(axiosConfig);
        },
      });
      console.log('this.api: ' , this.api);
    });
  }
}

interface AxiosRequestConfig {
  url: string;
  method: string;
  baseURL: string;
  params?: any;
  data?: any;
}

/**
 * 标准化axios config 参数`
 * @param options 接口请求基本配置 {Object}
 * @param data
 * @private
 */
function _normalize(options: AxiosRequestConfig, data: any): AxiosRequestConfig {
  if (isObject(data)) {
    Object.keys(data).forEach((item: any) => {
      if (options.url.search(`:${item}`) > -1) {
        options.url = options.url.replace(`:${item}`, data[item]);
        delete data[item];
      }
    });
  }
  const method = options.method.toLowerCase();
  if (method === 'post' || method === 'patch' || method === 'put') {
    options.data = data;
  } else {
    options.params = data;
  }
  return options;
}

export default new MakeApi({
  config: API_CONFIG,
  ...API_DEFAULT_CONFIG,
}).api;

// 标准化调用 api :  this.$api[path/name]({outputParams}, {outputOptions})
