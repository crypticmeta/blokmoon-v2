import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Image from "next/image"
import Link from "next/link"
import Input from "../../components/Input"
import Head from "next/head"
function Explorer() {
    const [data, setData] = useState([]);
    const fetchRecent = useCallback(
      async() => {
            await axios
              .get("https://ordapi.xyz/feed")
              .then((res) => {
                setData(res.data.rss.channel.item);
              })
              .catch((err) => console.log(err, "ERR"));
      },
      [],
    )

    useEffect(() => {
        fetchRecent();
    }, [])
    
    
  return (
    <div className="custom-container  text-white">
      <Head>
        <title>Blokmoon BTC NFT Explorer</title>
        <meta
          name="description"
          content="Blokmoon BTC NFT explorer aims to help you search details related to your NFTs easily and in a readable format."
        />
        <meta property="og:image" content="/assets/images/screen.png" />

        {/* <!-- Twitter cards --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blokmoon2021" />
        <meta name="twitter:title" content="Blokmoon | Web3 Agency" />
        <meta
          name="twitter:description"
          content="Blokmoon BTC NFT explorer aims to help you search details related to your NFTs easily and in a readable format."
        />
        <meta name="twitter:image" content="/assets/images/screen.png" />
      </Head>
      <Input />
      <div className="flex justify-between items-center flex-wrap">
        {data.map((item, idx) => {
          if (idx < 31) return <Card item={item} key={item.guid} />;
        })}
      </div>
    </div>
  );
}
const Card = ({ item }) => {
    const [show, setShow] = useState(true)
    return (
      <div
        className={`w-[300px] h-[400px] p-3 overflow-hidden ${
          !show && "hidden"
        }`}
      >
        <div className=" services-gradient h-full w-full shadow-xl rounded-2xl">
          <div className="h-[280px] overflow-hidden relative">
            <Image
              className="overflow-hidden object-cover"
              fill
              placeholder={"blur"}
              blurDataURL={"favicon.ico"}
              onError={() => setShow(false)}
              alt="ordinal"
              src={`https://ordinals.com/content/${item.guid.split("/")[2]}`}
            />
          </div>
          <div className="p-3 uppercase font-bold text-brand_red">
            <p className="pb-3">{item.title}</p>
            <button className="gradient text-white uppercase font-thin px-4 py-2 text-xs">
              <Link href={`/explorer/${item.guid.split("/")[2]}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    );
}
export default Explorer