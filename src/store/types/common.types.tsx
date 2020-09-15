import { ShorthandPropertyAssignment } from 'typescript';

export interface Action {
  type: string;
  payload: any;
}

export interface CartItem {
  id: string;
  meat: string;
  rice: string;
  beans: string;
  sides: string[];
}
