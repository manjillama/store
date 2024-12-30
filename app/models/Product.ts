import { IProduct } from "../api/productApi";

export default class Product {
  private _id: string = "";
  private _name: string = "";
  private _price: number = 0;
  private _comparePrice: number = 0;
  private _slug: string = "";
  private _brand: string = "";
  private _description: string = "";
  private _isFeatured: boolean = false;
  private _sizes: {
    size: string;
    stock: number;
  }[] = [];
  private _stock: number = 0;
  private _images: string[] = [];
  private _collections: {
    name: string;
    slug: string;
  }[] = [];

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }

  public get comparePrice(): number {
    return this._comparePrice;
  }
  public set comparePrice(value: number) {
    this._comparePrice = value;
  }

  public get slug(): string {
    return this._slug;
  }
  public set slug(value: string) {
    this._slug = value;
  }

  public get brand(): string {
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get isFeatured(): boolean {
    return this._isFeatured;
  }
  public set isFeatured(value: boolean) {
    this._isFeatured = value;
  }

  public get sizes(): { size: string; stock: number }[] {
    return this._sizes;
  }
  public set sizes(value: { size: string; stock: number }[]) {
    this._sizes = value;
  }

  public get stock(): number {
    return this._stock;
  }
  public set stock(value: number) {
    this._stock = value;
  }

  public get images(): string[] {
    return this._images;
  }
  public set images(value: string[]) {
    this._images = value;
  }

  public get collections(): { name: string; slug: string }[] {
    return this._collections;
  }
  public set collections(value: { name: string; slug: string }[]) {
    this._collections = value;
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      price: this._price,
      comparePrice: this._comparePrice,
      slug: this._slug,
      brand: this._brand,
      description: this._description,
      isFeatured: this._isFeatured,
      stock: this._stock,
      images: this._images,
      collections: this._collections,
      sizes: this._sizes,
    };
  }

  static from(product: IProduct) {
    const newProduct = new Product();
    newProduct.id = product.documentId;
    newProduct.name = product.name;
    newProduct.price = product.price;
    newProduct.comparePrice = product.comparePrice;
    newProduct.slug = product.slug;
    newProduct.brand = product.brand.name;
    newProduct.description = product.description;
    newProduct.isFeatured = product.isFeatured;
    newProduct.stock = product.stock;
    newProduct.images = product.images.map((image) => image.url);
    newProduct.collections = product.collections.map((collection) => ({
      name: collection.name,
      slug: collection.slug,
    }));
    newProduct.sizes = product.sizes;
    return newProduct;
  }
}
