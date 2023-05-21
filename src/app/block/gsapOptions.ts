import { easingOptions, gsapOptionsTypeObj } from "../types/gsapOption";

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
    type: "rotateFrom",
    min: -360,
    max: 360,
    componentType: "slider",
    step: 1,
    default: 0,
  },
  {
    type: "rotateTo",
    min: -360,
    max: 360,
    componentType: "slider",
    step: 1,
    default: 0,
  },
  {
    type: "rotateXFrom",
    min: -360,
    max: 360,
    componentType: "slider",
    step: 1,
    default: 0,
  },
  {
    type: "rotateXTo",
    min: -360,
    max: 360,
    componentType: "slider",
    step: 1,
    default: 0,
  },
  {
    type: "rotateYFrom",
    min: -360,
    max: 360,
    componentType: "slider",
    step: 1,
    default: 0,
  },
  {
    type: "rotateYTo",
    min: -360,
    max: 360,
    componentType: "slider",
    step: 1,
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
  {
    type: "duration",
    min: 0,
    max: 2,
    componentType: "slider",
    step: 0.1,
    default: 0.5,
  },
  {
    type: "easingType",
    componentType: "select",
    options: easingOptions,
    default: "power0",
  },
];
