export type TProduct = {
  name: string;
  description: string;
  brand: string; 
  productsQuantity: number;
  price: number;
  isFeatured?: boolean;
  size?: string;
};