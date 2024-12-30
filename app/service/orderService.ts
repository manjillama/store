import orderApi from "../api/orderApi";
import Order from "../models/Order";

export const getOrderByDocumentId = async (
  id: string,
  params = {}
): Promise<Order> => {
  const {
    data: { data },
  } = await orderApi.getOrderByDocumentId(id, params);
  return Order.from(data);
};

export const createOrder = async (order = {}): Promise<Order> => {
  const {
    data: { data },
  } = await orderApi.createOrder(order);
  return Order.from(data);
};
