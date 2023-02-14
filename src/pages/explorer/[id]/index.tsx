import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "../../../components/Explorer/Input";
import Ordinal from "components/Explorer/Ordinal";
interface Data  {
  title: string;
  id: string;
  timestamp: string;
  inscription_number: string;
  address: string;
};
function Id() {
  const router = useRouter();
  const [data, setData] = useState<Data | null>(null);
  const fetchData = useCallback(async () => {
    await axios
      .get("https://ordapi.xyz/inscription/" + router.query.id)
      .then((res) => {
        if(res.data?.id)
        setData(res.data);
      })
      .catch((err) => console.log(err, "ERR"));
  }, [router.query]);

  useEffect(() => {
    if (router.query?.id) fetchData();
  }, [fetchData, router.query]);

 

  if (data?.id)
    return <Ordinal data={data} />;
  else {
    return (
      <div className="custom-container   h-screen">
        <Input />
        <div className="center text-white text-center text-3xl lg:px-24 items-center flex-wrap">
        INVALID ID</div>
      </div>
    );
  }
}

export default Id;
