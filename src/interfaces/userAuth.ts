export interface ControlProp {
  type: string;
  config: {};
  value: string;
}

export type Controls = {
  [key: string]: ControlProp;
};

interface AuthControls {
  [key: string]: ControlProp;
  Email: ControlProp;
  Password: ControlProp;
}

export interface SignInControls extends AuthControls {}

export interface SignUpControls extends AuthControls {
  Name: ControlProp;
}
