export interface Action{
    type: string;
}

export interface UserState{
    user: Object;
}

export interface UserAction extends Action{
    payload: any;
}