import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import PageContainer from "./PageContainer";

const gsapOptions = [
  {
    from: {
      rotate: 180,
      x: -100,
      y: -100,
      opacity: 0,
    },
    to: {
      rotate: 0,
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "back",
    },
  },
  {
    from: {
      rotateX: 180,
      y: 200,
      opacity: 0,
    },
    to: {
      rotateX: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4",
    },
  },
] as const;

export default function BlockCard() {
  const [isHover, setIsHover] = useState(false);
  const counterRef = useRef(0);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blockRef.current) return;
    if (isHover && blockRef.current) {
      const animation = gsapOptions[counterRef.current % gsapOptions.length];
      counterRef.current += 1;
      gsap.fromTo(blockRef.current, animation.from, animation.to);
    }
  }, [isHover]);

  return (
    <PageContainer
      mouseEnterEvent={() => setIsHover(true)}
      mouseLeaveEvent={() => setIsHover(false)}
    >
      <Flex>
        <BlockContainer ref={blockRef}>
          Block
          <br /> Playground
        </BlockContainer>
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
  font-size: 2rem;
  padding: 1rem;
  background-color: #ffe4c5;
`;
