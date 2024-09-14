import React from "react";

const Title = () => {
  console.log("render title");

  return <h1>UseCallBack Hook</h1>;
};

export default React.memo(Title);
