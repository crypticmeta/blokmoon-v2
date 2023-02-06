import Hero from "components/Hero";
import Services from "components/Services";
import type { NextPage } from "next";

const Home: NextPage = (props) => {
 
  return (
    <>
      <Hero />
      <Services/>
    </>
  );
};

export default Home;
