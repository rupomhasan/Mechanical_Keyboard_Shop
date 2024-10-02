import { TUser } from "../../../redux/features/auth/authSlice";
import { TProducts } from "../../../types/product.types";

export type TReview = {
  user: TUser;
  rating: number;
  product: TProducts;
  comment: string;
  isDeleted?: boolean;
  updatedAt: Date;
};
