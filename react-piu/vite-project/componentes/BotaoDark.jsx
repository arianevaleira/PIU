import React, { useState, useEffect } from "react";
import "./BotaoDark.css";

export default function BotaoDark() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <button className="botao-dark" onClick={toggleDarkMode}>
      {darkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}
