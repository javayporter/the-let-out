import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
