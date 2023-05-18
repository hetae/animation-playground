export type gsapOptionsType =
  | "xFrom"
  // | "xTo"
  | "yFrom"
  // | "yTo"
  | "opacityFrom"
  | "opacityTo";

export type gsapOptionsTypeObj = {
  type: gsapOptionsType;
  min: number;
  max: number;
  step: number;
  default: number;
};

export const gsapOptions: gsapOptionsTypeObj[] = [
  {
    type: "xFrom",
    min: -100,
    max: 100,
    step: 1,
    default: 0,
  },
  // {
  //   type: "xTo",
  //   min: -100,
  //   max: 100,
  //   step: 1,
  //   default: 0,
  // },
  {
    type: "yFrom",
    min: -100,
    max: 100,
    step: 1,
    default: 100,
  },
  // {
  //   type: "yTo",
  //   min: -100,
  //   max: 100,
  //   step: 1,
  //   default: 0,
  // },
  {
    type: "opacityFrom",
    min: 0,
    max: 1,
    step: 0.1,
    default: 0,
  },
  {
    type: "opacityTo",
    min: 0,
    max: 1,
    step: 0.1,
    default: 1,
  },
];
