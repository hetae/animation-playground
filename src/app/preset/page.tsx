"use client";
import "@/styles/normalize.css";
import styled from "@emotion/styled";
import MotionBlock from "@/components/preset-page/MotionBlock";
import { preset } from "./presets";
import { useCallback, useState } from "react";
import Code from "@/components/preset-page/Code";
import { Toaster } from "react-hot-toast";

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
`;

const Motions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
`;

const CodeContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
