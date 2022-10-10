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
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
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
