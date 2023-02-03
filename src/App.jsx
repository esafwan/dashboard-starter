import { useState, useEffect } from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
