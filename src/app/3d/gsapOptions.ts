import { easingOptions, gsapOptionsTypeObj } from "../../types/gsapOption";

export const gsapOptions: gsapOptionsTypeObj[] = [
  // example url
  // https://codepen.io/GreenSock/pen/AWQprN
  {
    type: "xFrom",
    min: -100,
    max: 100,
    componentType: "slider",
    step: 1,
    default: -100,
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
    default: 0,
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
  {
    type: "duration",
    min: 0,
    max: 2,
    componentType: "slider",
    step: 0.1,
    default: 0.5,
  },
  {
    type: "ease",
    componentType: "select",
    options: easingOptions,
    default: "power2",
  },
  {
    type: "stagger",
    min: 0,
    max: 1,
    componentType: "slider",
    step: 0.1,
    default: 0.1,
  },
];
