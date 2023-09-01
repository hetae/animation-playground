import { Select, Typography, Option } from "@mui/joy";
import { gsapOptionsTypeObj } from "@/types/gsapOption";

export default function GsapSelect({
  item,
  gsapStates,
  setGsapStates,
}: {
  item: gsapOptionsTypeObj;
  gsapStates: { [key: string]: number | string };
  setGsapStates: (gsapStates: { [key: string]: number | string }) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography level="body-md" width={120} textAlign={"center"}>
        {item.type}
      </Typography>
      <Select
        style={{ width: "200px" }}
        defaultValue={item.default}
        onChange={(_e, val: any) =>
          val && setGsapStates({ ...gsapStates, [item.type]: val })
        }
      >
        {item.options?.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </div>
  );
}
