"use client"

import { useState } from "react";
import Header from "@/components/layout/header";
import Workspace from "@/components/layout/workspace";

const Home = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  
  return(
    <div className="flex flex-col h-screen w-screen">
      <header>
        <Header setCurrentView={setCurrentView} />
      </header>
      <main className="h-[90%]">
        <Workspace currentView={currentView} />
      </main>
    </div>
  );
}

export default Home;
