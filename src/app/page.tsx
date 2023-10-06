"use client"

import { useState } from "react";
import Header from '@/components/header';
import Workspace from "@/components/workspace";

export default function Home() {
  const [currentView, setCurrentView] = useState<string>('page-setting');
  
  return (
    <main className="flex flex-col h-screen w-screen">
      <Header
        setCurrentView={setCurrentView}
      />
      <Workspace />
    </main>
  );
}
