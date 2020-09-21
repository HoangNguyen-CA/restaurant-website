import { ShorthandPropertyAssignment } from 'typescript';

export interface Action {
  type: string;
  payload: any;
}

export interface CartItem {
  name?: string;
  id: string;
  meat: string;
  rice: string;
  beans: string;
  sides: string[];
}
