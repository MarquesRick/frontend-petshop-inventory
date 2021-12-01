import ILogin from '../types/Login';
import { BASE_URL } from '../api/requests';
import axios from 'axios';
import { IUser } from '../types/Users';

interface IUserService {
  getLogin(): Promise<string>;
  getUser(email: string): Promise<IUser>;
}

export class UserService implements IUserService {
  async getUser(email: string): Promise<IUser> {
    const api = await axios
      .get<IUser>(`${BASE_URL}/user?email=${email}`)
      .then(response => response.data);

    console.log(api);

    return api;
  }
  async getLogin(): Promise<string> {
    return 'success';
  }
}
