export type TProduct = {
  name: string;
  description: string;
  brand: string; 
  productsQuantity: number;
  price: number;
  reviews?: string[]; 
  isFeatured?: boolean;
  size?: string;
};
