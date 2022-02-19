import "@/css/index.css";
import aos from "aos";
import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

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
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        {/* put <meta name="viewport" /> here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;