import { AxiosResponse } from "axios";
import { get, post } from "../utils/axios";
import { IProduct } from "./productApi";

export interface IOrder {
  documentId: string;
  email: string;
  fullname: string;
  phoneNumber: string;
  totalPrice: number;
  city: string;
  address: string;
  street: string;
  orderStatus: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  orderItems: {
    size?: string;
    quantity: number;
    quantities?: number;
    price: number;
    totalPrice: number;
    product: IProduct;
  }[];
}

const getOrderByDocumentId = (
  id: string,
  params = {}
): Promise<
  AxiosResponse<{
    data: IOrder;
  }>
> => {
  return get(
    `/orders/${id}?populate[orderItems][populate][product][populate][0]=images&populate[orderItems][populate][product][populate][1]=brand&populate[orderItems][populate][product][populate][2]=collections`,
    params
  );
};

const createOrder = (body = {}): Promise<AxiosResponse<{ data: IOrder }>> => {
  return post(`/orders`, {
    data: body,
  });
};

export default {
  getOrderByDocumentId,
  createOrder,
};
