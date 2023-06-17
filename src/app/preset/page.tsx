"use client";
import "@/styles/normalize.css";
import { MouseEvent, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { Toaster } from "react-hot-toast";
import MotionBlock from "@/components/preset-page/MotionBlock";
import Code from "@/components/preset-page/Code";
import * as Presets from "./presets";
import { media } from "@/styles/media";
import { Typography } from "@mui/joy";
import TypeButtons from "@/components/preset-page/TypeButtons";

export default function Preset() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [presetType, setPresetType] = useState("text");

  const onClickMotion = useCallback((target: number) => {
    setSelectedIndex(target);
  }, []);

  const onClickPresetType = useCallback(
    (target: MouseEvent<HTMLButtonElement>) => {
      setPresetType(target.currentTarget.value);
      setSelectedIndex(0);
    },
    []
  );

  const preset = Presets[presetType as keyof typeof Presets];

  return (
    <>
      <Toaster />
      <Container>
        <Motions>
          <Typography level="h2">PRESET MOTIONS</Typography>
          <TypeButtons
            onClickPresetType={onClickPresetType}
            presetType={presetType}
          />
          {preset?.map((motion, index) => (
            <MotionBlock
              type={presetType}
              key={index}
              motion={motion}
              onClick={() => onClickMotion(index)}
              isClicked={selectedIndex === index}
            />
          ))}
        </Motions>
        <CodeContainer>
          <Typography level="h2">CODE</Typography>
          <Code preset={preset[selectedIndex]} />
        </CodeContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.small} {
    flex-direction: column;
  }
`;

const Motions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;

  ${media.small} {
    width: 100%;
    height: 50%;
  }
`;

const CodeContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.small} {
    width: 100%;
    height: 50%;
  }
`;
