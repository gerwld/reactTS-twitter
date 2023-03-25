import { LoadingStatus, PendingStatus } from "../types";

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tweet {
  _id: string;
  text: string;
  images?: [];
  createdAt: string;
  user: User;
}

export interface PostsState {
  currentPostText: string
  maxLength: number;
  posts: any;
  LoadingStatus: LoadingStatus;
  PostPendingStatus: PendingStatus;
}

export interface SidebarState {
  topics: any[],
  LoadingState: LoadingStatus;
}

export interface TweetState {
  data?: any[],
  LoadingState: LoadingStatus
}


export interface User {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
  location?: string;
  about?: string;
  website?: string;
}

export interface UserState {
  data: User | undefined;
  status: LoadingStatus;
}
