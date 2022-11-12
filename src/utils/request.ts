import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { logoutAction } from '../containers/App/actions';
import { SHOW_SNACK_MESSAGE } from '../containers/SnackMessage/constants';
import { getItem } from '../hooks/useCookie';
import { v4 as uuidv4 } from 'uuid';
import { store } from '../store';
import { User } from '../type/type.user';
import { StatusCodesList } from './constants';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Wrapper with default success/error actions
 */
interface TypeError {}
const request = async (options: any) => {
  const onSuccess = (response: AxiosResponse<any>) => response.data;
  const onError = (error: any) => {
    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default request;
