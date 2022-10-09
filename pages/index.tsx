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

function Home() {
  return (
    <>
      <NavBar />
      <FrontPage />
      <Organization />
      <Leadership />
      <Projects />
      <Awards />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
