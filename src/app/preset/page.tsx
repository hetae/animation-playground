"use client";
import "@/styles/normalize.css";
import styled from "@emotion/styled";
import MotionBlock from "@/components/preset-page/MotionBlock";
import { preset } from "./presets";

export default function Preset() {
  return (
    <Container>
      <Motions>
        {preset.map((motion, index) => (
          <MotionBlock key={index} motion={motion} />
        ))}
      </Motions>
      <Code>code</Code>
    </Container>
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

const Code = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
