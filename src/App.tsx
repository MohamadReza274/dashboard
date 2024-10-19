import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div>
        <Sidebar open={sidebarOpen} setOpen={(open) => setSidebarOpen(open)} />
        <Navbar onOpen={(open) => setSidebarOpen(open)} />
      </div>
    </>
  );
}

export default App;
