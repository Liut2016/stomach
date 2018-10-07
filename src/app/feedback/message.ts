export interface Message2 {
  from: string;
  email: string;
  date: number;
  subject: string;
  avatar: string;
  icon: any;
  iconClass: any;
  body: string;
  tag: string;
  type: string;
  important: boolean;
  id: number;
}
interface UserPublicInfo {
  avatar: string;
  name: string;
  role: string;
}
export interface Message {
  from: UserPublicInfo;
  date: number;
  subject: string;
  id: number;
  body: string;
  type: string;
  formerMessage?: Message;
}
