import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.215.176.20:3000",
  responseType: "json",
});

export const APILogin = (userInfo: any) => {
	return axiosInstance.post(`${"/api/auth/login"}`, userInfo);
}