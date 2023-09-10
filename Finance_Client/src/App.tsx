import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "../theme"


function App() {  
  const theme = useMemo(()=>createTheme(themeSettings),[])


  return (
    <div className="app">
      <ThemeProvider theme = { theme }>
        <CssBaseline/>  {/** Kickstart an elegant, consistent, and simple baseline to build upon.*/}
          Sajan Raj
      </ThemeProvider>
    </div>
  );
}

export default App
