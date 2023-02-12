import Hero from "components/Hero";
import Services from "components/Services";
import Testimonials from "components/Testimonials";
import type { NextPage } from "next";

const Home: NextPage = (props) => {
 
  return (
    <>
      <Hero />
      <Services/>
      <Testimonials/>
    </>
  );
};

export default Home;
