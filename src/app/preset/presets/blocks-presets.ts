export const blocksPreset = [
  {
    name: "zoom",
    description: "a zoom entry block",
    from: {
      scale: 0.5,
    },
    to: {
      scale: 1,
    },
    rest: {
      stagger: 0.1,
    },
  },
] as const;
