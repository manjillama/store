import Product from "../models/Product";

export interface ICartItem {
  size?: string;
  quantity: number;
  quantities?: number;
  price: number;
  totalPrice: number;
  product: Product;
}

export interface ICart {
  expiry: Date | number;
  items: ICartItem[];
}
