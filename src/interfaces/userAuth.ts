export interface ControlProp {
  type: string;
  config: {};
  value: string;
}

export type Controls = {
  [key: string]: ControlProp;
};
