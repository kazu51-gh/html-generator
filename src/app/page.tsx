"use client"

import { useState } from "react";
import Header from "@/components/layout/header";
import Workspace from "@/components/layout/workspace";

const Home = () => {
  const [currentView, setCurrentView] = useState<string>('page-setting');
  
  return(
    <main className="flex flex-col h-screen w-screen">
      <div className="h-[10%]">
        <Header setCurrentView={setCurrentView} />
      </div>
      <div className="h-[90%]">
        <Workspace currentView={currentView} />
      </div>
    </main>
  );
}

export default Home;
