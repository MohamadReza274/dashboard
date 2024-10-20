import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar open={sidebarOpen} setOpen={(open) => setSidebarOpen(open)} />
      <Navbar onOpen={(open) => setSidebarOpen(open)} />
      <main className="md:pl-72 py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
