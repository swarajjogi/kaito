import React from "react";
import { DashboardMainSection } from "./sections/DashboardMainSection/DashboardMainSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { SideNavSection } from "./sections/SideNavSection";

export const Frame = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <main className="flex min-h-screen bg-background">
      <div className="flex flex-col w-full">
        <HeaderSection onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex flex-1">
          <SideNavSection isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <DashboardMainSection />
        </div>
      </div>
    </main>
  );
};