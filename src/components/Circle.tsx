import { useGesture } from "@use-gesture/react";
import { useState } from "react";

export type CircleProps = {
  x: number;
  y: number;
  radius: number;
  fill: string;
  id: string;
};

export const Circle = ({
  id,
  x: xInit,
  y: yInit,
  radius,
  fill,
}: CircleProps) => {
  const [{ x, y }, setTranslate] = useState({ x: 0, y: 0 });

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      setTranslate({ x, y });
    },
  });

  return (
    <circle
      cx={xInit}
      cy={yInit}
      r={radius}
      fill={fill}
      transform={`translate(${x}, ${y})`}
      {...bind()}
    />
  );
};
