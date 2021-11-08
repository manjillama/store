import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER,
});

export function get(url: string, params = {}): Promise<AxiosResponse> {
  return instance.get(url, {
    params,
    headers: {},
  });
}

export function post(url: string, body: any): Promise<AxiosResponse> {
  return instance.post(url, body, {
    headers: {},
  });
}

export function patch(url: string, body: any): Promise<AxiosResponse> {
  return instance.patch(url, body, {
    headers: {},
  });
}

export function put(url: string, body: any): Promise<AxiosResponse> {
  return instance.put(url, body, {
    headers: {},
  });
}

export function del(url: string): Promise<AxiosResponse> {
  return instance.delete(url, {
    headers: {},
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { get, post, patch, del };
