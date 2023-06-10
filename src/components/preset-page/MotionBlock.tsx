import styled from "@emotion/styled";
import { memo, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { PresetType } from "@/app/preset/presets";

function MotionBlock({
  motion,
  onClick,
  isClicked,
}: {
  motion: PresetType;
  onClick: () => void;
  isClicked: boolean;
}) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!isHover) return;
    const ctx = gsap.context(() => {
      // if text
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
      // if block

      // if blocks
    });

    return () => {
      ctx.revert();
    };
  }, [isHover, motion]);
  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      isClicked={isClicked}
    >
      <Text ref={textRef}>Lorem Ipsum is simply dummy text</Text>
    </Container>
  );
}

export default memo(MotionBlock);

const Container = styled.div<{ isClicked: boolean }>`
  background-color: ${({ isClicked }) => (isClicked ? "#dee2e6" : "#f1f3f5")};
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
