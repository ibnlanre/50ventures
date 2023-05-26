import "@/css/index.css";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { MantineProvider } from "@mantine/styles";
import { useEffect, useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import { NavBar } from "@/layouts";

import Head from "next/head";
import aos from "aos";

function Loader({ playAnimation, setPlayAnimation }) {
  useEffect(() => {
    const onPageLoading = () => setPlayAnimation(true);
    const onPageLoadComplete = () => setPlayAnimation(false);

    if (document.readyState === "interactive") onPageLoadComplete();
    else {
      window.addEventListener("load", onPageLoading);
      return () => window.removeEventListener("load", onPageLoading);
    }
  }, []);

  return (
    <LoadingOverlay
      overlayColor="#002D62"
      overlayOpacity={0.96}
      visible={playAnimation}
      overlayBlur={2}
      loaderProps={{
        color: "white",
      }}
    />
  );
}

function App({ Component, pageProps }) {
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    setPlayAnimation(false);
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
      <Head>
        <meta httpEquiv="Content-Type" charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="theme-color" content="#E1261C" />
      </Head>

      {playAnimation ? (
        <Loader
          playAnimation={playAnimation}
          setPlayAnimation={setPlayAnimation}
        />
      ) : (
        <>
          <NavBar />
          <Component {...pageProps} />
        </>
      )}
    </MantineProvider>
  );
}

export default App;
