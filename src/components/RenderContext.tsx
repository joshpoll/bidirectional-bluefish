import React from "react";
import { CircleContext } from "../Context";

export const RenderContext = () => {
  const circleContext = React.useContext(CircleContext);

  // create a handleChange function that takes an id and field name and returns a function that
  // takes an event and updates the context
  const handleChange = (id: string, field: string) => (e: any) => {
    circleContext.setCircleData(id, {
      ...circleContext.circleData[id],
      [field]: e.target.value,
    });
  };

  return (
    <>
      {Object.entries(circleContext.circleData).map(([id, circle]) => (
        <>
          <div key={id}>
            {/* {id}: {JSON.stringify(circle)}
          <br /> */}
            x: <input value={circle.x} onChange={handleChange(id, "x")} />
            <br />
            y: <input value={circle.y} onChange={handleChange(id, "y")} />
            <br />
            translateX:{" "}
            <input
              value={circle.translateX}
              onChange={handleChange(id, "translateX")}
            />
            <br />
            translateY:{" "}
            <input
              value={circle.translateY}
              onChange={handleChange(id, "translateY")}
            />
            <br />
            radius:{" "}
            <input
              value={circle.radius}
              onChange={handleChange(id, "radius")}
            />
            <br />
            fill:{" "}
            <input value={circle.fill} onChange={handleChange(id, "fill")} />
          </div>
          <br />
        </>
      ))}
    </>
  );
};
