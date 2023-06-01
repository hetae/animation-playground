import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import PageContainer from "./PageContainer";

const gsapOptions = [
  {
    divide: "words",
    from: {
      y: -100,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "back",
    },
  },
  {
    divide: "chars",
    from: {
      x: 100,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.5,
      ease: "power4",
    },
  },
] as const;

export default function TextCard() {
  const [isHover, setIsHover] = useState(false);
  const counterRef = useRef(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const text = new SplitType(textRef.current);
    if (isHover && textRef.current) {
      const animation = gsapOptions[counterRef.current % gsapOptions.length];
      const animationText = text[animation.divide];
      counterRef.current += 1;
      gsap.fromTo(animationText, animation.from, animation.to);
    }
  }, [isHover]);

  return (
    <PageContainer
      mouseEnterEvent={() => setIsHover(true)}
      mouseLeaveEvent={() => setIsHover(false)}
    >
      <Flex>
        <TextContainer ref={textRef}>Text Playground</TextContainer>
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

const TextContainer = styled.div`
  font-weight: 900;
  font-size: 3rem;
`;
