export const mediaQuery = (maxWidth: number) => {
  return `@media screen and (max-width: ${maxWidth}px)`;
};

export const media = {
  xsmall: mediaQuery(576),
  small: mediaQuery(768),
  medium: mediaQuery(1024),
  large: mediaQuery(1200),
  xlarge: mediaQuery(1440),
  xxlarge: mediaQuery(1920),
};
