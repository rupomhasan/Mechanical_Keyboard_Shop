import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import Form from "./Form";

import { useCreateUserMutation } from "../../redux/features/userApi";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
import { addUser } from "../../redux/features/auth/authSlice";
type TSignUP = {
  name: string;
  email: string;
  password: string;
  file: File | null;
};
const RegisterForm = () => {
  const [registerCustomer] = useCreateUserMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (data: TSignUP) => {
    const toastId = toast.loading("Sign In...");

    try {
      const res = await registerCustomer(data).unwrap();
      console.log(res);

      dispatch(addUser({ user: res.data.result, token: res.data.accessToken }));
      navigate("/");
      toast.success("Logged In", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-base-200 rounded-2xl p-10 md:mr-5">
      <p className=" text-center text-3xl font-bold font-mono mb-4">
        Register Now
      </p>
      <Form onSubmit={handleRegister}>
        <FormInput type="text" name="name" label="Name : " />
        <FormInput type="email" name="email" label="Email : " />
        <FormInput type="password" name="password" label="Password : " />
        <FormInput type="file" name="file" label="Photo Url : " />
        <input
          className="w-full btn btn-sm text-lg font-mono text-white bg-[#1e88e5] hover:bg-[#0c71c9]"
          type="submit"
        />
      </Form>
      <p className="text-center mt-3 ">
        Already have account?
        <Link to="/login" className="underline text-lg underline-offset-4">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
