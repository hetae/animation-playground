export type gsapOptionsType =
  | "xFrom"
  | "xTo"
  | "yFrom"
  | "yTo"
  | "opacityFrom"
  | "opacityTo";

export type gsapOptionsTypeObj = {
  type: gsapOptionsType;
  min: number;
  max: number;
  componentType?: "slider" | "input" | "select" | "none";
  step?: number;
  default: number;
};

export type EasingType =
  | "power0"
  | "power1"
  | "power2"
  | "power3"
  | "power4"
  | "back"
  | "elastic"
  | "bounce"
  | "rough"
  | "expo";

export const easingOptions = [
  "power0",
  "power1",
  "power2",
  "power3",
  "power4",
  "back",
  "elastic",
  "bounce",
  "rough",
  "expo",
];

export const gsapOptions: gsapOptionsTypeObj[] = [
  {
    type: "xFrom",
    min: -100,
    max: 100,
    componentType: "slider",
    step: 1,
    default: 0,
  },
  {
    type: "xTo",
    min: -100,
    max: 100,
    componentType: "none",
    default: 0,
  },
  {
    type: "yFrom",
    min: -100,
    max: 100,
    componentType: "slider",
    step: 1,
    default: 100,
  },
  {
    type: "yTo",
    min: -100,
    max: 100,
    componentType: "none",
    default: 0,
  },
  {
    type: "opacityFrom",
    min: 0,
    max: 1,
    componentType: "none",
    step: 0.1,
    default: 0,
  },
  {
    type: "opacityTo",
    min: 0,
    max: 1,
    componentType: "slider",
    step: 0.1,
    default: 1,
  },
];
