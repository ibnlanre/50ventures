import { Footer, NavBar, Contact } from "@/layouts";
import { Fragment } from "react";
import Head from "next/head";

export default function () {
  return (
    <Fragment>
      <Head>
        <title>50Ventures | Contact Us</title>
        <meta name="description" content="" />
      </Head>
      <NavBar />
      <Contact />
      <Footer />
    </Fragment>
  );
}