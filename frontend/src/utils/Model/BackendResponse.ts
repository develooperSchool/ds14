interface UserLoginActionPayload {
  user?: any;
  token?: string;
  role_id?: number;
}

interface UserLoginActionMeta {
  arg: any; // You can specify the type of 'arg' if it's known
  requestId: string;
  requestStatus: string;
}

export interface IUserLoginAction {
  meta: UserLoginActionMeta;
  payload: UserLoginActionPayload;
  type: string;
}
