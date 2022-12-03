//* Styles
import GlobalTheme from "./globals";
import { light, dark } from "./styled-components/theme";

//* Hooks & Methods
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

//* Components
import { Navbar } from "./Components/Navbar/Navbar";
import { MainContent } from "./Components/MainContent/MainContent";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalTheme />
        <Navbar toggleTheme={toggleTheme} />
        <div className="container">
          <MainContent />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
