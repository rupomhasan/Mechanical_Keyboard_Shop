import { Outlet } from "react-router-dom";
import MainLayout from "./components/layOut/MainLayout";

function App() {
  return (
    <div className="" >
      <MainLayout />
      <Outlet />
    </div>
  );
}

export default App;
