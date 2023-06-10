"use client";
import "@/styles/normalize.css";
import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { Toaster } from "react-hot-toast";
import MotionBlock from "@/components/preset-page/MotionBlock";
import Code from "@/components/preset-page/Code";
import { preset } from "./presets";
import { media } from "@/styles/media";
import { Typography } from "@mui/joy";

export default function Preset() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickMotion = useCallback((target: number) => {
    setSelectedIndex(target);
  }, []);

  return (
    <>
      <Toaster />
      <Container>
        <Motions>
          <Typography level="h2">PRESET MOTIONS</Typography>
          {preset.map((motion, index) => (
            <MotionBlock
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
