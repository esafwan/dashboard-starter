import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App() {
  return (
    <div className="mx-auto flex flex-col space-y-6">      
      <Header />      
      <div id="content" className="grid gap-12 md:grid-cols-[210px_2fr]">        
        <Sidebar />        
        <Content />        
      </div>
      
    </div>
  );
}

export default App;
