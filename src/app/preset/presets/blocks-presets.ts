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
      ease: "back",
      stagger: 0.1,
    },
  },
  {
    name: "move from x",
    description: "a zoom entry block",
    width: 100,
    height: 30,
    from: {
      x: 0,
      opacity: 0,
    },
    to: {
      x: 300,
      opacity: 1,
    },
    rest: {
      stagger: 0.1,
    },
  },
] as const;
