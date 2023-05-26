import { Footer, Investments } from "@/layouts";
import { Fragment } from "react";

import Head from "next/head";

export default function () {
  return (
    <Fragment>
      <Head>
        <title>50Ventures | Investments</title>
        <meta name="description" content="" />
      </Head>
      <Investments />
      <Footer />
    </Fragment>
  )
}