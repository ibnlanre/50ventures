import { Html, Head, Main, NextScript } from "next/document";
import { FavIcon, Fonts } from "@/layouts";

export default function Document() {
  return (
    <Html>
      <Head>
        <Fonts />
        <FavIcon />
      </Head>
      <body className="min-w-[295px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
