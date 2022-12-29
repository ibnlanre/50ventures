import Head from "next/head";

const description =
  "50 Ventures, LLC is a strategic advising and investment consultant company based in Alexandria, VA that provides expertise on international affairs affecting Africa and African business investments.";

export function Meta() {
  return (
    <Head>
      <title>50Ventures</title>

      <meta name="description" content={description} />
      <meta httpEquiv="Content-Type" charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="twitter:title" content="50Ventures" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@50ventures" />
      <meta name="twitter:site" content="@50ventures" />

      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.50ventures.com" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:title" content="50Ventures" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="50Ventures" />
      <meta property="og:image:alt" content="50Ventures logo" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="theme-color" content="#E1261C" />
    </Head>
  );
}
