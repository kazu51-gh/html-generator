"use client"

import { useState } from "react";
import Header from "@/components/layout/header/header";
import Workspace from "@/components/layout/workspace";

const Home = () => {
  const [currentView, setCurrentView] = useState<string>('page-setting');
  
  return(
    <main className="flex flex-col h-screen w-screen">
      <Header setCurrentView={setCurrentView} />
      <Workspace currentView={currentView} />
    </main>
  );
}

export default Home;
