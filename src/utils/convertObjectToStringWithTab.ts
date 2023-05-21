export const convertObjectToString = (
  obj: { [key: string]: any },
  tabCount: number
) => {
  return Object.entries(obj)
    .map(([key, value], index) => {
      if (index === Object.entries(obj).length - 1) {
        return `${"  ".repeat(tabCount)}${key}: ${value}`;
      }
      return `${"  ".repeat(tabCount)}${key}: ${value}\n`;
    })
    .join("");
};
