export const convertObjectToString: any = (
  obj: { [key: string]: any },
  tabCount: number
) => {
  if (typeof obj !== "object") return "";
  return Object.entries(obj)
    .map(([key, value], index) => {
      if (typeof value === "object") {
        return `${"  ".repeat(tabCount)}${key}: {\n${convertObjectToString(
          value,
          tabCount + 1
        )}\n${"  ".repeat(tabCount)}}${
          index === Object.entries(obj).length - 1 ? "" : ","
        }`;
      }
      if (index === Object.entries(obj).length - 1) {
        return `${"  ".repeat(tabCount)}${key}: ${value},`;
      }
      return `${"  ".repeat(tabCount)}${key}: ${value},\n`;
    })
    .join("");
};
