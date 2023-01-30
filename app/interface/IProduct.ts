type imageFormatType = {
  url: string;
};
export type productImageType = {
  id: number;
  caption: string;
  url: string;
  ext: string;
  formats: {
    large: imageFormatType;
    medium: imageFormatType;
    small: imageFormatType;
    thumbnail: imageFormatType;
  };
};
export interface IProduct {
  name: string;
  price: number;
  comparePrice: number;
  slug: string;
  id: number;
  brand: {
    name: string;
  };
  description: string;
  isFeatured: boolean;
  sizes: {
    size: string;
    stock: number;
  }[];
  stock: number;
  images: productImageType[];
  collections: {
    id: number;
    name: string;
    slug: string;
  }[];
}
