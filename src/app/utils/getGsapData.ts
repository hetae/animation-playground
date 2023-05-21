export const getGsapData = (gsapState: { [key: string]: any }) => {
  let from = {} as { [key: string]: any };
  let to = {} as { [key: string]: any };
  let rest = {} as { [key: string]: any };

  Object.keys(gsapState).map((key) => {
    if (key.endsWith("From")) {
      const newKey = key.slice(0, key.length - 4);
      from[newKey] = gsapState[key];
    } else if (key.endsWith("To")) {
      const newKey = key.slice(0, key.length - 2);
      to[newKey] = gsapState[key];
      // TODO fix exception
    } else if (key === "textType") {
      return;
    } else {
      rest[key] = gsapState[key];
    }
  });

  return {
    from,
    to,
    rest,
  };
};
