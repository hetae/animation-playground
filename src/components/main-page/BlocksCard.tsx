import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PageContainer from "./PageContainer";

const gsapOptions = [
  {
    from: {
      x: 100,
      opacity: 0,
    },
    to: {
      rotate: 0,
      x: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "back",
    },
  },
  {
    from: {
      y: -200,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "power4",
    },
  },
] as const;

export default function BlocksCard() {
  const [isHover, setIsHover] = useState(false);
  const counterRef = useRef(0);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationChildren = blockRef.current?.children;
    if (!isHover || !animationChildren) return;
    const animation = gsapOptions[counterRef.current % gsapOptions.length];
    counterRef.current += 1;

    const ctx = gsap.context(() => {
      gsap.fromTo(animationChildren, animation.from, animation.to);
    });
    return () => {
      ctx.revert();
    };
  }, [isHover]);

  return (
    <PageContainer
      mouseEnterEvent={() => setIsHover(true)}
      mouseLeaveEvent={() => setIsHover(false)}
      navigateTo="blocks"
    >
      <Flex>
        <BlocksContainer ref={blockRef}>
          <SingleBlock>Blocks</SingleBlock>
          <SingleBlock />
          <SingleBlock>Playground</SingleBlock>
        </BlocksContainer>
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

const SingleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: #c9c4f9;
  padding: 0.5rem;
  border-radius: 10px;
`;

const BlocksContainer = styled.div`
  font-weight: 700;
  font-size: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
