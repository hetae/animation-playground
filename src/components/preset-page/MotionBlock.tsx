import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { PresetType } from "@/app/preset/presets";

export default function MotionBlock({ motion }: { motion: PresetType }) {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (motion.type === "text" && textRef.current && motion.textType) {
      const texts = new SplitType(textRef.current)[motion.textType];
      gsap.fromTo(
        texts,
        {
          ...motion.from,
        },
        {
          ...motion.to,
          ...motion.rest,
        }
      );
    }
  }, []);
  return (
    <Container>
      <Text ref={textRef}>Lorem Ipsum is simply dummy text</Text>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f1f3f5;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
