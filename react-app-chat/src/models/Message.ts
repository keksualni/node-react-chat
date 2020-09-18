import { User } from "./User";

export interface Message {
  id: number;
  sender: User;
  resolver: User;
  text: string;
}