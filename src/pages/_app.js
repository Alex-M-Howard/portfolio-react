import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../config/createEmotionCache";
import {CacheProvider} from "@emotion/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "@/components/NavBar";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  return (
    <CacheProvider value={emotionCache}>
        <CssBaseline/>
          <NavBar />
          <Component {...pageProps} />
    </CacheProvider>
  );
}
