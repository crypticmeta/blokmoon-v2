import React from "react";
import { useRive } from "@rive-app/react-canvas";
function Rive() {
  const params = {
    src: "/assets/rive/nft.riv",
    autoplay: true,
  };
  const { RiveComponent, rive } = useRive(params, {
    fitCanvasToArtboardHeight: true,
  });
  return <RiveComponent className="" />;
}

export default Rive;
