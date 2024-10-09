import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import FormInput from "./FormInput";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { addUser, logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

export type TFormInput = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const onSubmit = async (data: TFormInput) => {
    const toastId = toast.loading("Logging In...");

    try {
      const res = await login(data).unwrap();

      const user = verifyToken(res.data);
      console.log("res => ", res);
      dispatch(addUser({ user, token: res.data }));

      if (res.error) {
        toast.error(res?.error?.data?.message);
        dispatch(logout());
      }

      navigate("/");
      toast.success("Logged In", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-base-200 rounded-2xl p-10 ">
      <p className=" text-center text-3xl font-bold font-mono mb-4">Login</p>
      <Form onSubmit={onSubmit}>
        <FormInput type="email" name="email" label="Email : " />
        <FormInput type="password" name="password" label="Password : " />

        <input
          className="w-full btn btn-sm text-lg font-mono text-white bg-[#1e88e5] hover:bg-[#0c71c9]"
          type="submit"
        />
      </Form>
      <p className="text-center mt-3 ">
        New?
        <Link to="/register" className="underline text-lg underline-offset-4">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
