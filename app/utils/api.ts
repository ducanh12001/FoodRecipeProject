import { JsonPayloadLogin, JsonPayloadRequest } from 'type/type.api';

export const BASE_ACCOUNT_URL = process.env.REACT_APP_API_URL;
const AUTH_PATH = '/api/auth/login';
const LOGOUT_PATH = '/api/auth/logout';
const PROFILE_PATH = '/api/users';

export default class ApiEndpoint {
  static getLoginPath = () => AUTH_PATH;

  static getLogoutPath = () => LOGOUT_PATH;

  static getRegisterPath = () => '/api/auth/register';

  static getProfilePath = () => PROFILE_PATH;

  /**
   * Make API payload
   * @param url
   * @param method
   * @param payload
   * @param contentType
   * @returns {{headers: {}, method: *}}
   */
  static makeApiPayload = (
    url: string,
    method: string,
    payload?: any | null,
    contentType?: any | null,
  ) => {

    const jsonPayload: JsonPayloadRequest = {
      baseURL: BASE_ACCOUNT_URL ?? '',
      url,
      method,
      headers: {
        Accept: contentType ? '': 'application/json',
        "Content-Type": contentType ? contentType : 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('ACCESS_TOKEN') ?? ''}`
      },
    };

    if (payload !== null) {
      const formData = new FormData();
      switch (jsonPayload.headers['Content-Type']) {
        case 'application/json':
          jsonPayload.data = payload;
          break;
        case 'multipart/form-data':
          // eslint-disable-next-line no-restricted-syntax
          for (const key of Object.keys(payload)) {
            formData.append(key, payload[key]);
          }
          jsonPayload.data = formData;
          break;
        default:
          jsonPayload.data = null;
      }
    }
    return jsonPayload;
  };
}
