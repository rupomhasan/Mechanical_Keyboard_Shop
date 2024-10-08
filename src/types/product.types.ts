import { TBrand } from "./brand.types";

type TDimensions = {
  length: number;
  width: number;
  height: number;
};

export type TFeatures = {
  size?: string;
  keys?: number;
  SwitchLifecycle?: string;
  Switch?: string;
  mode?: string;
  battery?: string;
  lighting?: string;
  weight?: string;
};

export type TProducts = {
  _id?: string
  name: string;
  description: string;
  image?: string;
  brand: TBrand | string,
  type: string,
  status: string,
  productsQuantity: number;
  availableQuantity?: number;
  price: number;
  specialPrice?: number;
  discount?: number;
  sku?: string;
  category?: string;
  reviews?: string
  tags?: string[];
  connectivity: string;
  dimensions: TDimensions;
  averageRating?: number;
  numberOfReviews?: number;
  features?: TFeatures;
  slug?: string,
  isDeleted?: boolean,
};