import React from "react";
import Roaster from "../../Roaster";
import { EMPTY_ROASTER } from "../../../constants";

function LoadingRoaster() {
  return (
    <Roaster
      roaster={EMPTY_ROASTER}
      isSkeleton={true}
    />
  );
}

export default LoadingRoaster;
