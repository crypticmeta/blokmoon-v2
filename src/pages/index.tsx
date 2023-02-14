import Hero from "components/Homepage/Hero";
import Services from "components/Homepage/Services";
import Testimonials from "components/Homepage/Testimonials";
import type { NextPage } from "next";
import Head from "next/head"
const Home: NextPage = (props) => {
 
  return (
    <div>
      <Head>
        <title>Blokmoon</title>
        <meta
          name="description"
          content="BlokMoon is a website development design team with over 10 years experience in web development. We offer high-quality, inclusive and low-cost website development services and works with all kinds of businesses around the world to help you get your idea online."
        />
        <meta property="og:image" content="/assets/images/screenHome.png" />

        {/* <!-- Twitter cards --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blokmoon2021" />
        <meta name="twitter:title" content="Blokmoon | Web3 Agency" />
        <meta
          name="twitter:description"
          content="BlokMoon is a website development design team with over 10 years experience in web development. We offer high-quality, inclusive and low-cost website development services and works with all kinds of businesses around the world to help you get your idea online."
        />
        <meta name="twitter:image" content="/assets/images/screenHome.png" />
      </Head>
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
