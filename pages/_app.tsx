import "@/css/index.css";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import aos from "aos";
import Head from "next/head";

import { MantineProvider } from "@mantine/styles";
import { useRouter } from "next/router";
import { useEffect } from "react";

import FavIcon from "../favicon.ico";

function App({ Component, pageProps }) {
  const router = useRouter();
  function handleRouteChange(url) {
    window["gtag"]("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // document.documentElement.classList.add("text-[18px]");
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
        <link rel="icon" href={FavIcon.src} />
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        {/* put <meta name="viewport" /> here */}
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default App;
