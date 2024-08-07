"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarBarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarBarCollapsed ? "w-0 md:w-16" : "w-72 md:2-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarBarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={`${
            isSidebarBarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          LEOSTOCK
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* links */}
      <div className="flex-grow mt-8">{/* links here */}</div>
      {/* footer */}
      <div>
        <p className="text-center text-xs text-gray-500ray500">
          &copy; 2024 LEOSTOCK
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
