import React, { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Context Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consume Context in a Component
const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}
    >
      Toggle Theme
    </button>
  );
};

// Main App
const App = () => (
  <ThemeProvider>
    <ThemedButton />
  </ThemeProvider>
);

export default App;

