import { useState, useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import { onAuthStateChanged, auth } from "./firebase";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [user,setUser]=useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        console.log("uid", uid);
      } else {
        setUser(false);
      }
    });
  }, []);
  if(!user) return <Login/>
  return (
    <Routes>
      <Route path="/" element={
        <Dashboard></Dashboard>
      }/>
      <Route path="/dashboard" element={
        <Dashboard></Dashboard>
      }/>
      <Route path="/imagine" element={
        <Dashboard>Imagine</Dashboard>
      }/>
      <Route path="/elevation" element={
        <Dashboard>Elevation</Dashboard>
      }/>
      <Route path="/interior" element={
        <Dashboard>Interior</Dashboard>
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
