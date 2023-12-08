export const blockPreset = [
  {
    name: "zoom",
    description: "a zoom entry block",
    from: {
      scale: 0.5,
    },
    to: {
      scale: 1,
    },
  },
  {
    name: "slide",
    description: "slide from right with transparent",
    from: {
      x: 100,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
  },
  {
    name: "bounce",
    description: "bounce like button",
    from: {
      scale: 0.8,
    },
    to: {
      scale: 1,
    },
    rest: {
      ease: "bounce",
    },
  },
] as const;
