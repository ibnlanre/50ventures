import { Footer, Investments, NavBar } from "@/layouts";
import Head from "next/head";
import { Fragment } from "react";

export default function () {
  return (
    <Fragment>
      <Head>
        <title>50Ventures | Investments</title>
        <meta name="description" content="" />
      </Head>
      <NavBar />
      <Investments />
      <Footer />
    </Fragment>
  )
}