export type RequestArgs<T> = {
  input: T;
};

export abstract class BaseController {
  public static _instance: Map<string, BaseController> = new Map();

  constructor() {
    BaseController._instance.set(this.constructor.name, this);
  }

  public get instance(): BaseController | undefined {
    return BaseController._instance.get(this.constructor.name);
  }
}
