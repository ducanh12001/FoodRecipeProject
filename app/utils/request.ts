import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { logoutAction } from 'containers/App/actions';
import { SHOW_SNACK_MESSAGE } from 'containers/SnackMessage/constants';
import { getItem } from 'hooks/useCookie';
import { v4 as uuidv4 } from 'uuid';
import { store } from 'store';
import { User } from 'type/type.user';
import { StatusCodesList } from 'utils/constants';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (
      err.response.status === 401 &&
      getItem('ExpiresIn')
    ) {
      // eslint-disable-next-line no-underscore-dangle
      if (!originalConfig._retry) {
        // eslint-disable-next-line no-underscore-dangle
        originalConfig._retry = true;
        try {
          await client.post('/refresh-token', {},);
          return client(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
      return {
        ...originalConfig,
        cancelToken: new axios.CancelToken((cancel) =>
          cancel('Cancel repeated request'),
        ),
      };
    }
    if (      
      err.response.status === 401 &&
      !getItem('ExpiresIn')
    ) {
      store.dispatch(logoutAction());
    }

    return Promise.reject(err);
  },
);

/**
 * Request Wrapper with default success/error actions
 */
interface TypeError {}
const request = async (options: any) => {
  const onSuccess = (response: AxiosResponse<any>) => response.data;
  const onError = (error: any) => {
    if (error.response?.data) {
      // Error codes Array
      const errorCodesArray = [
        StatusCodesList.InvalidRefreshToken,
        StatusCodesList.RefreshTokenExpired,
        StatusCodesList.TokenExpired,
      ];
      
      if (errorCodesArray.includes(error.response.data.code)) {
        return store.dispatch({
          type: SHOW_SNACK_MESSAGE,
          snack: {
            type: 'error',
            message: error.response.data.message,
            id: uuidv4(),
          },
        });
      }
    }

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
