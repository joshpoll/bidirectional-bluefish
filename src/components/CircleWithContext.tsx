import { useGesture } from "@use-gesture/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { CircleContext } from "../Context";

export type CircleProps = {
  x: number;
  y: number;
  radius: number;
  fill: string;
  id: string;
};

export const CircleWithContext = ({
  id,
  x: xInit,
  y: yInit,
  radius,
  fill,
}: CircleProps) => {
  const circleContext = React.useContext(CircleContext);

  useEffect(() => {
    circleContext.setCircleData(id, {
      x: xInit,
      y: yInit,
      translateX: 0,
      translateY: 0,
      radius,
      fill,
    });
  }, [id, xInit, yInit, radius, fill]);

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      circleContext.setCircleData(id, {
        ...circleContext.circleData[id],
        translateX: x,
        translateY: y,
      });
    },
  });

  return (
    <circle
      cx={circleContext.circleData[id]?.x ?? xInit}
      cy={circleContext.circleData[id]?.y ?? yInit}
      r={circleContext.circleData[id]?.radius ?? radius}
      fill={circleContext.circleData[id]?.fill ?? fill}
      transform={`translate(${circleContext.circleData[id]?.translateX ?? 0}, ${
        circleContext.circleData[id]?.translateY ?? 0
      })`}
      {...bind()}
    />
  );
};
