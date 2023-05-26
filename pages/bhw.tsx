import { Footer, BHW } from "@/layouts";
import { Fragment } from "react";

import Head from "next/head";

export default function () {
  return (
    <Fragment>
      <Head>
        <title>50Ventures | BHW</title>
        <meta name="description" content="" />
      </Head>
      <BHW />
      <Footer />
    </Fragment>
  );
}