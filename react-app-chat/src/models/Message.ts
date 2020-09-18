import { User } from "./User";

export interface Message {
  id: string;
  sender: User;
  resolver: User;
  text: string;
}