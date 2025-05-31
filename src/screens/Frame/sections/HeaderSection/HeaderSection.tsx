import { BellIcon, ChevronDownIcon, MenuIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

interface HeaderSectionProps {
  onMenuClick: () => void;
}

export const HeaderSection = ({ onMenuClick }: HeaderSectionProps): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Dashboard", href: "#" },
    { label: "Employees", href: "#" },
    { label: "Attendance", href: "#" },
    { label: "Payroll", href: "#" },
    { label: "Reports", href: "#" },
    { label: "Settings", href: "#" },
  ];

  return (
    <header className="w-full h-16 bg-white shadow-[0px_1px_2px_#0000000d] flex items-center justify-between px-4">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="mr-4 lg:hidden text-gray-700"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <div className="font-bold text-blue-600 text-xl font-['Inter',Helvetica] leading-7">
          Kaito Solutions
        </div>
      </div>

      {/* Navigation Menu - Hidden on mobile */}
      <NavigationMenu className="hidden lg:flex ml-10">
        <NavigationMenuList className="flex space-x-6">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className="font-['Inter',Helvetica] font-medium text-gray-700 text-base leading-6"
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* User Actions Area */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative">
          <BellIcon className="h-6 w-6 text-gray-700" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
            3
          </Badge>
        </div>

        {/* User Profile - Simplified on mobile */}
        <div className="flex items-center rounded p-2 space-x-2">
          <Avatar className="h-8 w-8 border-2 border-solid border-blue-500">
            <AvatarImage src="/hr-profile.png" alt="Jane HR" />
            <AvatarFallback>JH</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline font-['Inter',Helvetica] font-medium text-gray-800 text-base">
            Jane HR
          </span>
          <ChevronDownIcon className="hidden sm:block h-4 w-4 text-gray-700" />
        </div>
      </div>
    </header>
  );
};