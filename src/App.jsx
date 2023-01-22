import { useState, useEffect } from "react";
import { onAuthStateChanged, auth } from "./firebase";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Gate from "./pages/Gate";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        console.log("uid", uid);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      {user ? <Dashboard /> : <Gate />}
    </>
  );
}

export default App;
