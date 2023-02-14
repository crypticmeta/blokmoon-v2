import Hero from "components/Homepage/Hero";
import Services from "components/Homepage/Services";
import Testimonials from "components/Homepage/Testimonials";
import type { NextPage } from "next";

const Home: NextPage = (props) => {
 
  return (
    <div>
      <Hero />
      <Services/>
      <Testimonials/>
    </div>
  );
};

export default Home;
