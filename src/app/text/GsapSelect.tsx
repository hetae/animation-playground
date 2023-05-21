import { Select, Typography, Option } from "@mui/joy";
import { gsapOptionsTypeObj } from "./gsapOptions";
import styled from "@emotion/styled";

export default function GsapSelect({
  item,
  gsapStates,
  setGsapStates,
}: {
  item: gsapOptionsTypeObj;
  gsapStates: { [key: string]: number };
  setGsapStates: (gsapStates: { [key: string]: number }) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography level="body1" width={120} textAlign={"center"}>
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
