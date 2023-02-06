import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
      <div className="relative">
        <div
          style={{ zIndex: -1 }}
          className="fixed top-0 bottom-0 right-0 left-0"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit:"cover" }}
            src="/assets/images/Services.png"
            alt="bg"
          />
        </div>
        <Head>
          <title>Blokmoon</title>
          <meta
            name="description"
            content="BlokMoon is a website development design team with over 20 years experience in web development. We offer high-quality, inclusive and low-cost website development services and works with all kinds of businesses around the world to help you get your idea online."
          />
        </Head>
        <ContextProvider>
          <div className="relative z-[1]">
            <Notifications />
            <Component {...pageProps} />
          </div>
        </ContextProvider>
      </div>
    );
};

export default App;
