import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const accessToken = localStorage.getItem("accessToken");

    if ((error.response && error.response.status !== 401) || !accessToken) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    const { data } = await api.patch("/token/refresh");

    localStorage.setItem("accessToken", data.token);

    return api(originalRequest);
  }
);
