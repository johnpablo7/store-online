import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="max-w-container mx-auto mt-8">
        <Outlet />
      </div>
    </div>
  );
};
