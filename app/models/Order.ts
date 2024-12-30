import { IOrder } from "../api/orderApi";
import Product from "./Product";

export default class Order {
  private _id: string = "";
  private _email: string = "";
  private _fullname: string = "";
  private _phoneNumber: string = "";
  private _totalPrice: number = 0;
  private _city: string = "";
  private _address: string = "";
  private _street: string = "";
  private _orderStatus: "Processing" | "Shipped" | "Delivered" | "Cancelled" =
    "Processing";
  private _orderItems: {
    size: string;
    quantities: number;
    price: number;
    totalPrice: number;
    product: Product;
  }[] = [];

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get fullname(): string {
    return this._fullname;
  }

  public set fullname(value: string) {
    this._fullname = value;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  public get totalPrice(): number {
    return this._totalPrice;
  }

  public set totalPrice(value: number) {
    this._totalPrice = value;
  }

  public get city(): string {
    return this._city;
  }

  public set city(value: string) {
    this._city = value;
  }

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }

  public get street(): string {
    return this._street;
  }

  public set street(value: string) {
    this._street = value;
  }

  public get orderStatus():
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled" {
    return this._orderStatus;
  }

  public set orderStatus(
    value: "Processing" | "Shipped" | "Delivered" | "Cancelled"
  ) {
    this._orderStatus = value;
  }

  public get orderItems() {
    return this._orderItems;
  }

  public set orderItems(
    value: {
      size: string;
      quantities: number;
      price: number;
      totalPrice: number;
      product: Product;
    }[]
  ) {
    this._orderItems = value;
  }

  toJSON() {
    return {
      id: this._id,
      email: this._email,
      fullname: this._fullname,
      phoneNumber: this._phoneNumber,
      totalPrice: this._totalPrice,
      city: this._city,
      address: this._address,
      street: this._street,
      orderStatus: this.orderStatus,
      orderItems: this._orderItems,
    };
  }

  static from(order: IOrder) {
    const newOrder = new Order();
    newOrder.id = order.documentId;
    newOrder.email = order.email;
    newOrder.fullname = order.fullname;
    newOrder.phoneNumber = order.phoneNumber;
    newOrder.totalPrice = order.totalPrice;
    newOrder.city = order.city;
    newOrder.address = order.address;
    newOrder.street = order.street;
    newOrder.orderStatus = order.orderStatus;
    newOrder.orderItems = order.orderItems.map((item) => ({
      size: item.size || "",
      quantities: item.quantities || 0,
      price: item.price,
      totalPrice: item.totalPrice,
      product: Product.from(item.product),
    }));

    return newOrder;
  }
}
