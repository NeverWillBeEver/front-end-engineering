import Data from "service/data/index";

class MakeData {
  public data: {
    customKey: string;
    customData: any
  };

  constructor(data: any) {
    this.initial(data);
  }

  public initial(data: any) {

    const copy: Data = Object.assign({}, data);

    this.custom(copy);
    this.data.customData = this.custom1(copy);
  }

  public custom(data: any) {
    this.data = {
      customKey: data.customKey,
      customData: data.customData,
    };
  }

  public custom1(data: any) {
    const info: any = { };
    info.key1= data.custom1;
    info.key2= data.custom2;
    info.key3= data.custom3;
    return info;
  }
}

export default MakeData;
