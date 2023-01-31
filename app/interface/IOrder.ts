import { ICartItem } from ".";

export interface IOrder {
  id: string;
  uuid: string;
  email: string;
  fullname: string;
  phoneNumber: string;
  totalPrice: number;
  city: string;
  address: string;
  street?: string;
  status: "Processing" | "Delivered" | "Cancelled";
  order: ICartItem[];
}
