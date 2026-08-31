import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ActiveProjectProvider } from "./context/ActiveProjectContext";
import PortfolioShell from "./component/PortfolioShell";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ActiveProjectProvider>
          <PortfolioShell />
        </ActiveProjectProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
