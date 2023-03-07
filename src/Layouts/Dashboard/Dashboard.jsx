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
    <div className="2xl:container mx-auto flex flex-col" lang={language}>      
      <Header/>
      <div id="content" className="grid md:grid-cols-[230px_2fr]">
        <Sidebar />     
        {/* {children?
          (<div className="pt-4 mx-12">{children}</div>):<Content/>} */}
          <div className="pt-3 mx-6 md:pt-4 md:mx-12">
            {children?children:<Content/>}
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;
