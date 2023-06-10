export interface PresetType {
  name: string;
  type: string;
  description: string;
  textType?: "chars" | "lines" | "words";
  from: any;
  to: any;
  rest: any;
}

export const preset = [
  {
    name: "text1",
    type: "text",
    description: "Entry text animation by characters",
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
    description: "Entry text animation by lines",
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
  {
    name: "text3",
    type: "text",
    description: "Typing animation by characters",
    textType: "chars",
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    rest: {
      duration: 0.01,
      stagger: 0.06,
    },
  },
  {
    name: "text3",
    type: "text",
    description: "Text animation from zoom by words",
    textType: "words",
    from: {
      scale: 4,
      opacity: 0,
    },
    to: {
      scale: 1,
      opacity: 1,
    },
    rest: {
      stagger: 0.1,
    },
  },
] as const;
