import { Slider, Typography } from "@mui/joy";
import { gsapOptionsTypeObj } from "../types/gsapOption";

export default function GsapSlider({
  type,
  set,
  val,
  target,
}: {
  type: string;
  set: (_event: Event, newValue: number | number[]) => void;
  val: any;
  target: gsapOptionsTypeObj;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography level="body1" width={120} textAlign={"center"}>
        {type}
      </Typography>
      <Slider
        min={target.min}
        max={target.max}
        step={target.step}
        valueLabelDisplay="on"
        variant="solid"
        sx={{ width: "200px" }}
        value={val[type]}
        onChange={set}
      />
    </div>
  );
}
