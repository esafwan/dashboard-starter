// import { useState, useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import "./App.css";

function App() {
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
