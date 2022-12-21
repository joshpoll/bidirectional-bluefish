import React from "react";

export type CircleContextValue = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  radius: number;
  fill: string;
};

export const CircleContext = React.createContext<{
  circleData: { [key in string]: CircleContextValue };
  setCircleData: (id: string, data: CircleContextValue) => void;
}>({
  circleData: {},
  setCircleData: () => {},
});
