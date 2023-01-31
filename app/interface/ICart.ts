import { IProduct } from "./IProduct";

export interface ICartItem {
  size?: string;
  quantity: number;
  quantities?: number;
  price: number;
  totalPrice: number;
  product: IProduct;
}

export interface ICart {
  expiry: Date | number;
  items: ICartItem[];
}
