// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import Content from "../components/Content";

import Header from "./../../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./../../components/Content";

function Dashboard({children}) {
  return (
    <div className="mx-auto flex flex-col space-y-6">      
      <Header />      
      <div id="content" className="grid gap-12 md:grid-cols-[210px_2fr]">                
        <Sidebar />        
        {children?children:<Content/>}
      </div>
      
    </div>
  );
}

export default Dashboard;
