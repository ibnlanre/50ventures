import { FrontPage, Organization, Footer, Meta } from "@/layouts";
import { Fragment } from "react";

import dynamic from "next/dynamic";

const Leadership = dynamic(
  () => import("@/layouts").then((value) => value.Leadership),
  {
    ssr: false,
  }
);
const Awards = dynamic(
  () => import("@/layouts").then((value) => value.Awards),
  {
    ssr: false,
  }
);
const Gallery = dynamic(
  () => import("@/layouts").then((value) => value.Gallery),
  {
    ssr: false,
  }
);

function Home() {
  return (
    <Fragment>
      <Meta />
      <FrontPage />
      <Organization />
      <Leadership />
      <Awards />
      <Gallery />
      <Footer />
    </Fragment>
  );
}

export default Home;
