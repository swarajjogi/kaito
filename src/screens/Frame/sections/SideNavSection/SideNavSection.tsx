import {
  BarChart3Icon,
  BellRingIcon,
  ClockIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

interface SideNavSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideNavSection = ({ isOpen, onClose }: SideNavSectionProps): JSX.Element => {
  const navItems = [
    { icon: <LayoutDashboardIcon className="h-6 w-6" />, label: "Dashboard" },
    { icon: <UsersIcon className="h-6 w-6" />, label: "Employees" },
    { icon: <ClockIcon className="h-6 w-6" />, label: "Attendance" },
    { icon: <CreditCardIcon className="h-6 w-6" />, label: "Payroll" },
    { icon: <BarChart3Icon className="h-6 w-6" />, label: "Reports" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static lg:block z-50 w-64 h-full bg-white shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex justify-end p-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={onClose}
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-12 px-6 font-normal text-gray-800"
                >
                  {item.icon}
                  <span className="ml-6">{item.label}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 mt-auto">
          <div className="flex items-center bg-blue-50 rounded-lg p-3 shadow-[0px_1px_2px_#0000000d]">
            <BellRingIcon className="h-5 w-5 text-blue-700" />
            <div className="ml-3 font-medium text-blue-700 text-sm leading-5">
              2 new HR
              <br />
              announcements
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};