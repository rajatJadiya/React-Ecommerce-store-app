import React from "react";
import { Grid } from "react-loader-spinner";

const SuspenseFallback = () => {
  return (
    <div className="min-h-[80vh]">
        <div className="grid place-items-center h-[80vh]">
        <Grid
        height="80"
        width="80"
        color="#2563eb"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
        </div>
    </div>
  );
};

export default SuspenseFallback;
