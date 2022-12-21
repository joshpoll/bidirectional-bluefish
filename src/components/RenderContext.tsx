import React from "react";
import { CircleContext } from "../Context";

export const RenderContext = () => {
  const circleContext = React.useContext(CircleContext);
  return (
    <>
      {Object.entries(circleContext.circleData).map(([id, circle]) => (
        <div key={id}>
          {id}: {JSON.stringify(circle)}
        </div>
      ))}
    </>
  );
};
