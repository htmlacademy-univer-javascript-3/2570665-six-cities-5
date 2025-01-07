import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../consts/api';
import { getToken } from './token-helpers';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (
        error &&
          (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK')
      ) {
        toast.error(
          'Сервер недоступен',
          {
            toastId: 'server-unreachable',
          },
        );
      } else {
        throw error;
      }
    },
  );

  return api;
};
