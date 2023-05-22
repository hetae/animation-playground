import { easingOptions, gsapOptionsTypeObj } from "@/types/gsapOption";

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
    type: "opacityFrom",
    min: 0,
    max: 1,
    componentType: "slider",
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
    type: "stagger",
    min: 0,
    max: 0.3,
    componentType: "slider",
    step: 0.01,
    default: 0.1,
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
    type: "textType",
    componentType: "select",
    options: ["words", "chars", "lines"],
    default: "words",
  },
  {
    type: "ease",
    componentType: "select",
    options: easingOptions,
    default: "back",
  },
];
