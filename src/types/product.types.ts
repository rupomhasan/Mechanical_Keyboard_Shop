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
  SwitchColor?: string;
  mode?: string;
  battery?: string;
  lighting?: string;
  weight?: string;
};

export type TProducts = {
  _id: string
  name: string;
  description: string;
  image?: string;
  brand: TBrand,
  type: string,
  status: string,
  productsQuantity: number;
  availableQuantity?: number;
  price: number;
  discount?: number;
  sku: string;
  category: string;
  reviews: string
  tags: string[];
  connectivity: string;
  dimensions: TDimensions;
  weight: number;
  averageRating: number;
  numberOfReviews: number;
  isFeatured?: boolean;
  features?: TFeatures;
  slug?: string,
  isDeleted?: boolean,
};