import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import useScreenSize from "../../hooks/useScreenSize";

const AdminDashboard = () => {
  const size = useScreenSize();

  const [sidebarOpen, setSidebarOpen] = useState(
    size?.width <= 768 ? false : true
  );

  useEffect(() => {
    size?.width > 768 ? setSidebarOpen(true) : setSidebarOpen(false);
  }, [size]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const styles = {
    padding: "0",
    margin: "0",
    width: sidebarOpen ? "83.33%" : "100%",
    backgroundColor: "#e4e5eb",
  };
  return (
    <div className="container-fluid">
      <main className="row">
        <Sidebar collapsed={sidebarOpen} />
        <section style={styles}>
          <Topbar collapse={sidebarOpen} toggle={toggleSidebar} />
          <Outlet />
        </section>
      </main>
    </div>
  );
};
export default AdminDashboard;
