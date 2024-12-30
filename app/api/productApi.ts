import { AxiosResponse } from "axios";
import qs from "qs";
import { get } from "../utils/axios";

export interface IProduct {
  documentId: string;
  name: string;
  price: number;
  comparePrice: number;
  description: string;
  slug: string;
  isFeatured: boolean;
  stock: number;
  images: { url: string; caption: string; alternativeText: string }[];
  brand: {
    name: string;
  };
  sizes: {
    size: string;
    stock: number;
  }[];
  collections: {
    id: number;
    name: string;
    slug: string;
  }[];
}

const getProductBySlug = (
  slug: string,
  params = {}
): Promise<AxiosResponse<{ data: IProduct }>> => {
  return get(`/products/slug/${slug}?populate=*`, params);
};

const getProducts = (
  params = {},
  urlSuffix = ""
): Promise<AxiosResponse<{ data: IProduct[] }>> => {
  params = { ...params, populate: "*" };
  return get(`/products${urlSuffix}`, params);
};

const searchProducts = (searchTerm: string) => {
  // const query = qs.stringify({
  //   _where: {
  //     _or: [
  //       { name_contains: q },
  //       { "collections.name_contains": q },
  //       { "brand.name_contains": q },
  //     ],
  //   },
  // });
  const query = qs.stringify({
    filters: {
      $or: [
        {
          name: {
            $containsi: searchTerm,
          },
        },
        {
          brand: {
            name: {
              $containsi: searchTerm,
            },
          },
        },
        {
          collections: {
            name: {
              $containsi: searchTerm,
            },
          },
        },
      ],
    },
  });
  console.log("Query", query);
  return get(`/products?${query}&populate=*`);
};

export default {
  getProductBySlug,
  getProducts,
  searchProducts,
};
