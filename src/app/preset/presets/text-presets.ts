export const textPreset = [
  {
    name: "entry2",
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
    name: "typing",
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
    name: "random",
    description: "Random text animation by characters",
    textType: "chars",
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      duration: 0.01,
    },
    rest: {
      stagger: {
        amount: 1,
        from: "random",
      },
    },
  },
  {
    name: "zoom",
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
  {
    name: "entry1",
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
] as const;
