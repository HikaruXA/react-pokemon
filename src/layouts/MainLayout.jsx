import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const MainLayout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#ffffff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh", // Ensure it covers the entire screen
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
