import {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../config/createEmotionCache";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import {lightTheme, darkTheme} from "@/config/theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "@/components/NavBar";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline/>
          <NavBar onThemeToggle={toggleTheme} isDarkMode={isDarkMode}/>
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
