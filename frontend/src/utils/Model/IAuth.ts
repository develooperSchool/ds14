import { IUser } from "../../components/User/Model/Iuser";

export interface IFormWrapper {
  title: string;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  login: IUser;
  changeInputEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
