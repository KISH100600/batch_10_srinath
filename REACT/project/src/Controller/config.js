import axios from "axios";

export const BaseUrl = "http://13.233.39.109:8080";

export const backend = axios.create({
  baseURL: BaseUrl,
});

export const setToken = (token) => {
  backend.defaults.headers["x-auth-token"] = token;
};
