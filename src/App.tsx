import { Outlet } from "react-router-dom";
import MainLayout from "./components/layOut/MainLayout";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto" >
      <MainLayout />
      <Outlet />
    </div>
  );
}

export default App;
