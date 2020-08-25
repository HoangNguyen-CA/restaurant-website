export interface Action{
    type: string;
}

export interface UserState{
    user: Object | null;
}

export interface UserAction extends Action{
    payload: any;
}