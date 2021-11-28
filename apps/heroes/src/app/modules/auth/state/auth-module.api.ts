import { http } from '../../../utils';
import { AuthData } from './auth-module.types';

const authApi = {
  login: async (data: AuthData): Promise<string> => {
    const response = await http.post<AuthData, string>('/api/auth/login', data);
    return response.body;
  },

  register: async (data: AuthData): Promise<void> => {
    await http.post<AuthData, void>('/api/auth/register', data);
  },
};

export default authApi;
