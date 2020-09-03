export interface ControlProp {
  type: string;
  config: {};
  value: string;
}

interface Controls {
  Email: ControlProp;
  Password: ControlProp;
}

export interface SignInControls extends Controls {}

export interface SignUpControls extends Controls {
  Name: ControlProp;
}

export type AnyControls = SignInControls | SignUpControls;
