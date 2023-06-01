import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PageContainer from "./PageContainer";

const gsapOptions = [
  {
    from: {
      scale: 0,
      opacity: 0,
    },
    to: {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back",
    },
  },
] as const;

export default function PresetCard() {
  const [isHover, setIsHover] = useState(false);
  const counterRef = useRef(0);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blockRef.current || !isHover) return;
    const animation = gsapOptions[counterRef.current % gsapOptions.length];
    counterRef.current += 1;

    const ctx = gsap.context(() => {
      gsap.fromTo(blockRef.current, animation.from, animation.to);
    });
    return () => {
      ctx.revert();
    };
  }, [isHover]);

  return (
    <PageContainer
      mouseEnterEvent={() => setIsHover(true)}
      mouseLeaveEvent={() => setIsHover(false)}
      navigateTo="preset"
    >
      <Flex>
        <BlockContainer ref={blockRef}>Presets</BlockContainer>
      </Flex>
    </PageContainer>
  );
}

const Flex = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const BlockContainer = styled.div`
  font-weight: 900;
  border-radius: 1rem;
  font-size: 2rem;
  padding: 3rem;
  background-color: #acf0b0;
`;
