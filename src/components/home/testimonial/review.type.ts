import { TUser } from "../../../redux/features/auth/authSlice";
import { TProduct } from "../../../types/product.types";

export type TReview = {
  user: TUser;
  rating: number;
  product: TProduct;
  comment: string;
  isDeleted?: boolean;
  updatedAt: Date;
};
