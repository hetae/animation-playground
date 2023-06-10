export interface PresetType {
  name: string;
  type: string;
  textType?: "chars" | "lines" | "words";
  from: any;
  to: any;
  rest: any;
}

export const preset = [
  {
    name: "text1",
    type: "text",
    textType: "chars",
    from: {
      scale: 0.5,
      opacity: 0,
    },
    to: {
      scale: 1,
      opacity: 1,
    },
    rest: {
      stagger: 0.03,
    },
  },
  {
    name: "text2",
    type: "text",
    textType: "lines",
    from: {
      x: -50,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    rest: {
      stagger: 0.1,
    },
  },
] as const;
