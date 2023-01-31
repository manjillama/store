import { AxiosResponse } from "axios";
import qs from "qs";
import { IOrder, IProduct } from "../interface";
import { get, post } from "../utils/axios";

export const getProductBySlug = (
  slug: string,
  params = {}
): Promise<AxiosResponse<IProduct>> => {
  return get(`/products/slug/${slug}`, params);
};

export const getProducts = (
  params = {},
  urlSuffix = ""
): Promise<AxiosResponse<IProduct[]>> => {
  return get(`/products${urlSuffix}`, params);
};

export const searchProducts = (q: string) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: q },
        { "collections.name_contains": q },
        { "brand.name_contains": q },
      ],
    },
  });
  return get(`/products?${query}`);
};

export const createOrder = (params = {}): Promise<AxiosResponse<IOrder>> => {
  return post(`/orders`, params);
};
