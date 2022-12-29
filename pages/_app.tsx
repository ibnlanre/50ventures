import "@/css/index.css";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import aos from "aos";

import { MantineProvider } from "@mantine/styles";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        colors: {
          accent: [
            "#5C98DE",
            "#EFF5FC",
            "#EEB111",
            "#6A7283",
            "#8487A3",
            "#EDEDED",
            "#002D62",
            "#3B90FB",
            "#17142F",
            "#C81107",
          ],
        },
        primaryColor: "accent",
        colorScheme: "light",
        fontFamily: "Montserrat, sans-serif",
        fontFamilyMonospace: "Monaco, Courier, monospace",
        headings: { fontFamily: "Montserrat, sans-serif" },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default App;
