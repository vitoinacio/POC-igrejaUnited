"use client";

import { useState } from "react";
import { PrivateHeader } from "./components/private-header";
import { PrivateSidebar } from "./components/private-sidebar";
import { cn } from "@/lib/utils";

export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <PrivateHeader onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        <PrivateSidebar />
        <main
          className={cn(
            "flex-1 min-h-[calc(100vh-4rem)] transition-all duration-300 lg:ml-64",
            "ml-0"
          )}
        >
          <div className="page-shell p-6 lg:p-8">{children}</div>
        </main>
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 lg:hidden bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}