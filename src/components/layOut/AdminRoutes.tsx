import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { ReactNode } from "react";

const AdminRoutes = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(useCurrentUser);

  if (user?.role !== "Admin") {
    return (
      <div>
        <p className="text-xl font-serif text-center  font-bold  text-red-600">
          You are not authorized to access this route
        </p>
      </div>
    );
  }

  return children;
};

export default AdminRoutes;
