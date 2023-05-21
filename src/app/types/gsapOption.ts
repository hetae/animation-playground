export type gsapOptionsTypeObj = {
  type: gsapOptionsType;
  min?: number;
  max?: number;
  componentType?: "slider" | "input" | "select" | "none";
  step?: number;
  default: number | EasingType | TextType;
  options?: string[];
};

export type gsapOptionsType =
  | "xFrom"
  | "xTo"
  | "yFrom"
  | "yTo"
  | "opacityFrom"
  | "opacityTo"
  | "stagger"
  | "rotateFrom"
  | "rotateTo"
  | "rotateXFrom"
  | "rotateXTo"
  | "rotateYFrom"
  | "rotateYTo"
  | "duration"
  | "textType"
  | "easingType";

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

export type TextType = "words" | "chars" | "lines";
