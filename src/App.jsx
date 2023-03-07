import { useContext} from "react";
import PersistContext from "./Context/PersistContext";
import {Routes,Route} from "react-router-dom";
import Gate from "./components/Gate";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Write from "./pages/write/Write";
import Analyze from "./pages/analyze/Analyze";
import Imagine from "./pages/imagine/Imagine";
import Explain from "./pages/explain/Explain";
import "./App.css";

function App() {
  const {user}=useContext(PersistContext);

  if(!user)
    return <Gate/>
  
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={
        <Dashboard></Dashboard>
      }/>
      {/* <Route path="/dashboard" element={
        <Dashboard></Dashboard>
      }/> */}
      <Route path="/write" element={
        <Dashboard><Write/></Dashboard>
      }/>
      <Route path="/analyze" element={
        <Dashboard><Analyze/></Dashboard>
      }/>
      <Route path="/explain" element={
        <Dashboard><Explain/></Dashboard>
      }/>
      <Route path="/imagine" element={
          <Dashboard><Imagine/></Dashboard>
      }/>
      <Route path="/history" element={
        <Dashboard>History</Dashboard>
      }/>
      <Route path="/settings" element={
        <Dashboard>Settings</Dashboard>
      }/>
    </Routes>
  );
}

export default App;
