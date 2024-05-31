import { Outlet } from "react-router-dom";
import '@smastrom/react-rating/style.css';

const MainLayout = () => {
      return (
            <div className="max-w-[1140px] mx-auto p-4 lg:p-0">
                  <Outlet />
            </div>
      );
};

export default MainLayout;