import {useEffect, useState} from "react";
import i18n from "i18next";
import Header from "./../../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./../../components/Content";

function Dashboard({children}) {
  const [language,setLanguage]=useState("en");
  useEffect(()=>{
    i18n.changeLanguage(language)
  },[language])
  document.dir=language==="arab"?"rtl":"ltr";
  return (
    <div className="mx-auto flex flex-col space-y-6">      
      <Header setDirection={setLanguage}/>
      <div id="content" className="grid gap-12 md:grid-cols-[210px_2fr]">                
        <Sidebar />        
        {children?children:<Content/>}
      </div>
      
    </div>
  );
}

export default Dashboard;
