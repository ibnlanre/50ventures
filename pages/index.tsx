import {
  Awards,
  Footer,
  FrontPage,
  Gallery,
  Leadership,
  NavBar,
  Organization,
  Projects,
} from "@/layouts";
import Head from "next/head";
import { Fragment } from "react";

const description =
  "50 Ventures, LLC is a strategic advising and investment consultant company based in Alexandria, VA that provides expertise on international affairs affecting Africa and African business investments.";

function Home() {
  return (
    <Fragment>
      <Head>
        <title>50Ventures</title>
        <meta name="description" content={description} />
      </Head>
      <NavBar />
      <FrontPage />
      <Organization />
      <Leadership />
      {/* <Projects /> */}
      <Awards />
      <Gallery />
      <Footer />
    </Fragment>
  );
}

export default Home;
