export const blocksPreset = [
  {
    name: "move from x",
    description: "a zoom entry block",
    from: {
      x: 0,
    },
    to: {
      x: 300,
    },
    rest: {
      stagger: 0.1,
    },
  },
] as const;
