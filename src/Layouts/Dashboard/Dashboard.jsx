import {useEffect, useContext} from "react";
import PersistContext from "./../../Context/PersistContext";
import i18n from "i18next";
import Header from "./../../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./../../components/Content";
import Footer from "./../../components/Footer";

function Dashboard({children}) {
  const {language}=useContext(PersistContext);
  useEffect(()=>{
    localStorage.setItem("language",language);
    i18n.changeLanguage(language);
  },[language])
  document.dir=language==="ar"?"rtl":"ltr";
  return (
    <div className="mx-auto flex flex-col space-y-6" lang={language}>      
      {/* <Header setDirection={setLanguage}/> */}
      <div id="content" className="grid md:grid-cols-[210px_2fr]">
        <Sidebar />        
        {/* {children?
          (<div className="pt-4 mx-12">{children}</div>):<Content/>} */}
          <div className="pt-4 mx-12">
            {children?children:<Content/>}
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;
