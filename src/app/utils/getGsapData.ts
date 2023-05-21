export const getGsapFrom = (gsapState: { [key: string]: any }) => {
  const gsapFrom: { [key: string]: any } = {};
  Object.keys(gsapState).forEach((key) => {
    if (key.endsWith("From")) {
      const newKey = key.slice(0, key.length - 4);
      gsapFrom[newKey] = gsapState[key];
    }
  });
  return gsapFrom;
};

export const getGsapTo = (gsapState: { [key: string]: any }) => {
  const gsapTo: { [key: string]: any } = {};
  Object.keys(gsapState).forEach((key) => {
    if (key.endsWith("To")) {
      const newKey = key.slice(0, key.length - 2);
      gsapTo[newKey] = gsapState[key];
    }
  });
  return gsapTo;
};
