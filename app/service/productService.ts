import productApi from "../api/productApi";
import Product from "../models/Product";

export const getProducts = async (
  params = {},
  urlSuffix = ""
): Promise<Product[]> => {
  const {
    data: { data },
  } = await productApi.getProducts(params, urlSuffix);
  return data.map((product: any) => Product.from(product));
};

export const getProductBySlug = async (
  slug: string,
  params = {}
): Promise<Product> => {
  const {
    data: { data },
  } = await productApi.getProductBySlug(slug, params);
  return Product.from(data);
};

export const searchProducts = async (
  searchTerm: string
): Promise<Product[]> => {
  const {
    data: { data },
  } = await productApi.searchProducts(searchTerm);
  return data.map((product: any) => Product.from(product));
};
