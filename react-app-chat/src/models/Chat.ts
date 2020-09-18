import { Message } from './Message';
import { User } from './User';

export interface Chat {
  id: number;
  name: string;
  members: User[];
  messages: Message[];
}