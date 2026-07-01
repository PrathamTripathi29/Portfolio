import React from 'react';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import { Outlet } from "react-router-dom";
import './App.css'; // Import the layout styles

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      {/* 
        Wrapping Outlet in a main tag gives it structural meaning 
        and allows us to target it with Flexbox to stretch it.
      */}
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}