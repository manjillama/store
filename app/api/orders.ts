import { AxiosResponse } from "axios";
import { IOrder } from "../interface";
import { get } from "../utils/axios";

export const getOrderByUuid = (
  slug: string,
  params = {}
): Promise<AxiosResponse<IOrder>> => {
  return get(`/orders/uuid/${slug}`, params);
};
