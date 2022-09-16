import axios from "axios";
import { registration, check, login } from "./userApi";
import {
  createBrand,
  createDevice,
  createType,
  fetchBrands,
  fetchDevices,
  fetchOneDevice,
  fetchTypes,
} from "./deviceApi";

const URL = process.env.REACT_APP_API_URL ?? "http://localhost:6000/";

const host = axios.create({
  baseURL: URL,
});

const authHost = axios.create({
  baseURL: URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
};

authHost.interceptors.request.use(authInterceptor);

export {
  host,
  authHost,
  registration,
  check,
  login,
  createBrand,
  createDevice,
  createType,
  fetchBrands,
  fetchDevices,
  fetchOneDevice,
  fetchTypes,
};
