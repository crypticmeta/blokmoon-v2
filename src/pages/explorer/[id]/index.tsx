import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from 'next/head'
import Input from "../../../components/Explorer/Input";
import Ordinal from "components/Explorer/Ordinal";
import useDataStore from "stores/useDataStore";
import CircularProgress from "@mui/material/CircularProgress";
interface Data {
  title: string;
  id: string;
  timestamp: string;
  inscription_number: string;
  address: string;
}
function Id() {
  const loading = useDataStore((state) => state.loading);
  const setLoadingtrue = useDataStore((state) => state.setLoadingTrue);
  const setLoadingFalse = useDataStore((state) => state.setLoadingFalse);
  const router = useRouter();
  const [data, setData] = useState<Data | null>(null);
  const fetchData = useCallback(async () => {
    setLoadingtrue();
    await axios
      .get("https://ordapi.xyz/inscription/" + router.query.id)
      .then((res) => {
        if (res.data?.id) setData(res.data);
        setLoadingFalse();
      })
      .catch((err) => {
        setLoadingFalse();
        console.log(err, "ERR");
      });
  }, [router.query]);

  useEffect(() => {
    if (router.query?.id) fetchData();
  }, [fetchData, router.query]);

  if (!data) {
    return (
      <div className="custom-container   h-screen">
        <Head>
          <title>Blokmoon Explorer | {data.title}</title>
          <meta
            name="description"
            content={`Blokmoon BTC NFT explorer aims to help you search details related to your NFTs easily and in a readable format. This NFT is ${data.title} and has the ID ${data.id}`}
          />
          <meta
            property="og:image"
            content={`https://ordinals.com/content/${data.id}`}
          />

          {/* <!-- Twitter cards --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@blokmoon2021" />
          <meta name="twitter:title" content="Blokmoon | Web3 Agency" />
          <meta
            name="twitter:description"
            content={`Blokmoon BTC NFT explorer aims to help you search details related to your NFTs easily and in a readable format. This NFT is ${data.title} and has the ID ${data.id}`}
          />
          <meta
            name="twitter:image"
            content={`https://ordinals.com/content/${data.id}`}
          />
        </Head>
        <Input />
        {loading ? (
          <div className="text-brand_red h-50vh center">
            <CircularProgress size={70} color="inherit" />
          </div>
        ) : (
          <div className="center text-white text-center text-3xl lg:px-24 items-center flex-wrap">
            INVALID ID
          </div>
        )}
      </div>
    );
  }
  if (data?.id)
    return (
      <div className="custom-container   h-screen">
        <Input />
        <Ordinal data={data} />
      </div>
    );
}

export default Id;
