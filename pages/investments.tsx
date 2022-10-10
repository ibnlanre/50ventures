import { Footer, Investments, NavBar } from "@/layouts";
import { Fragment } from "react";

export default function () {
  return (
    <Fragment>
      <NavBar />
      <Investments />
      <Footer />
    </Fragment>
  )
}