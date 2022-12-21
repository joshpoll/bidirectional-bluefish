import React, { useState } from "react";
import { Circle } from "./components/Circle";
import { CircleWithContext } from "./components/CircleWithContext";
import { RenderContext } from "./components/RenderContext";
import { CircleContext } from "./Context";

function App() {
  const [circleData, setCircleData] = useState({});

  const handleCircleData = (id: string, data: any) => {
    setCircleData((prev) => ({ ...prev, [id]: data }));
  };

  return (
    <CircleContext.Provider
      value={{ circleData, setCircleData: handleCircleData }}
    >
      <svg width="1000" height="300">
        <CircleWithContext
          id="0"
          x={20}
          y={20}
          radius={50}
          fill={"cornflowerblue"}
        />
        <Circle id="1" x={40} y={30} radius={20} fill={"firebrick"} />
      </svg>
      <br />
      <RenderContext />
    </CircleContext.Provider>
  );
}

export default App;
