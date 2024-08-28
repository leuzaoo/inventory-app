"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        <Icon className="w-6 h-6 text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

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
        <Image
          src="https://leuzaoo-s3-inventorymanagement.s3.sa-east-1.amazonaws.com/logo.png"
          alt="Logo"
          width={27}
          height={27}
          className="rounded w-8"
        />
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
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarBarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventário"
          isCollapsed={isSidebarBarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Produtos"
          isCollapsed={isSidebarBarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Usuários"
          isCollapsed={isSidebarBarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Configuração"
          isCollapsed={isSidebarBarCollapsed}
        />
      </div>
      {/* footer */}
      <div className={`${isSidebarBarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500ray500">
          &copy; 2024 LEOSTOCK
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
