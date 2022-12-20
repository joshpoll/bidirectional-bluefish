export type CircleProps = {
  x: number;
  y: number;
  radius: number;
  fill: string;
};

export const Circle = ({ x, y, radius, fill }: CircleProps) => (
  <circle cx={x} cy={y} r={radius} fill={fill} />
);
