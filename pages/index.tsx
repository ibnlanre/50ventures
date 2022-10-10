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

function Home() {
  return (
    <Fragment>
      <Head>
        <title>50Ventures</title>
        <meta name="description" content="" />
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
