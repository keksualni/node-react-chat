import { User } from './User';

export interface Chat {
  id: number;
  name: string;
  members: User[];
}