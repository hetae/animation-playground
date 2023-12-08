export interface PresetType {
  name: string;
  description: string;
  textType?: "chars" | "lines" | "words";
  from?: any;
  to?: any;
  rest?: any;
  width?: number;
  height?: number;
  count?: number;
}
