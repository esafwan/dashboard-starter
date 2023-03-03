import {useEffect, useState} from "react";
import i18n from "i18next";
import Header from "./../../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./../../components/Content";
import Footer from "./../../components/Footer";

function Dashboard({children}) {
  if(!localStorage.getItem("language"))
    localStorage.setItem("language","en");
  const [language,setLanguage]=useState(localStorage.getItem("language"));
  useEffect(()=>{
    localStorage.setItem("language",language);
    i18n.changeLanguage(language);
  },[language])
  document.dir=language==="ar"?"rtl":"ltr";
  return (
    <div className="mx-auto flex flex-col space-y-6" lang={language}>      
      <Header setDirection={setLanguage}/>
      <div id="content" className="grid gap-12 md:grid-cols-[210px_2fr]">                
        <Sidebar />        
        {children?children:<Content/>}
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;
