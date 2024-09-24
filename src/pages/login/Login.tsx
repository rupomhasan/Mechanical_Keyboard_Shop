import { IoArrowUndoSharp } from "react-icons/io5";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie/Animation - 1726513647138.json";
import LoginForm from "../../components/form/LoginForm";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="max-w-screen-lg m-2 md:mx-auto ">
      <div className="md:flex  justify-center items-center h-[90vh] ">
        <div className="w-fit">
          <Link to="/">
            <button className="btn btn-sm  px-4 md:ml-5 text-white bg-[#1e88e5] font-mono text-lg hover:bg-[#0c71c9]">
              <IoArrowUndoSharp />
              BackToHome
            </button>
          </Link>
          <Lottie animationData={loginLottie} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
