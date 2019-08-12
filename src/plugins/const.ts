// import _pick from 'lodash/pick';
// import _assign from 'lodash/assign';
// import _isEmpty from 'lodash/isEmpty';

// import {assert} from 'utils/tool';
import {CONST_DEFAULT_CONFIG} from '@/config';
import CONST_CONFIG from 'service/const';

class MakeConst {
  public const: any;

  constructor(options: any) {
    this.const = {};
    this.constBuilder(options);
  }


  public constBuilder(
    sep = '/',
    config = [],
  ) {
    Object.keys(config).map((namespace: any) => {
      this._constSingleBuilder({namespace, sep, config: config[namespace]});
    });
  }

  public _constSingleBuilder(
    namespace: any,
    sep = '/',
    config: any = {},
  ) {
    config.forEach((cst: any) => {
      const {name, value} = cst;
      const constName = `${namespace.toUpperCase()}${sep}${name}`;
      Object.defineProperty(this.const, constName, {value});
    });

  }
}

export default new MakeConst({
  config: CONST_CONFIG,
  ...CONST_DEFAULT_CONFIG,
}).const;
