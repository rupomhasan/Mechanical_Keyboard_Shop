export type TProduct = {
  name: string;
  description: string;
  brand: string;
  productsQuantity: number;
  image: string
  price: number;
  reviews?: string[];
  isFeatured?: boolean;
  size?: string;
};
