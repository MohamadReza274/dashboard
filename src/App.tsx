import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

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
