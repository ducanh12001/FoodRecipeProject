import { JsonPayloadLogin, JsonPayloadRequest } from "../type/type.api";

export const BASE_ACCOUNT_URL = process.env.REACT_APP_URI;
const AUTH_PATH = '/api/auth/login';
const LOGOUT_PATH = '/api/auth/logout';

export default class ApiEndpoint {
    static getLoginPath = () => AUTH_PATH;
  
    static getLogoutPath = () => LOGOUT_PATH;
  
    static getRegisterPath = () => `/api/users`;
  
    static getRefreshTokenPath = () => `/refresh`;
  
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
        withCredentials: true,
        headers: {
          Accept: contentType ? '': 'application/json',
          "Content-Type": contentType ? contentType : 'application/json',
          "Authorization": localStorage.getItem('ACCESS_TOKEN') ?? ''
        },
      };
  
      if (payload !== null) {
        const formData = new FormData();
        switch (jsonPayload.headers['Content-Type']) {
          case 'application/json':
            jsonPayload.data = payload;
            break;
          case 'multipart/form-data':
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
  
    /**
     * make login request payload
     * @param email
     * @param password
     * @param refresh
     * @param refreshToken
     * @returns {{client_secret: *, client_id: *}}
     */
    static getLoginPayload = (
      email: string,
      password: string,
      refresh: boolean = false,
      refreshToken: string | null = null,
    ) => {
      const jsonPayload: JsonPayloadLogin = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      };
      if (refresh) {
        jsonPayload.grant_type = 'refresh_token';
        jsonPayload.refresh_token = refreshToken;
      } else {
        jsonPayload.grant_type = 'password';
        jsonPayload.username = email;
        jsonPayload.password = password;
        jsonPayload.scope = '*';
      }
      return jsonPayload;
    };
  }
  
