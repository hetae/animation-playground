import styled from "@emotion/styled";
import { memo, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { PresetType } from "@/types/presetTypes";
import { media } from "@/styles/media";

function MotionBlock({
  type,
  motion,
  onClick,
  isClicked,
}: {
  type: string;
  motion: PresetType;
  onClick: () => void;
  isClicked: boolean;
}) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!isHover) return;
    const ctx = gsap.context(() => {
      if (type === "text" && textRef.current && motion.textType) {
        // if text
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
      } else if (type === "block") {
        // if block
        gsap.fromTo(
          textRef.current,
          {
            ...motion.from,
          },
          {
            ...motion.to,
            ...motion.rest,
          }
        );
      } else if (type === "blocks") {
        // if blocks
        gsap.fromTo(
          textRef.current,
          {
            ...motion.from,
          },
          {
            ...motion.to,
            ...motion.rest,
          }
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, [isHover, motion, type]);

  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      isClicked={isClicked}
    >
      <Text ref={textRef}>{motion.description}</Text>
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

  ${media.small} {
    min-height: 150px;
  }
`;

const Text = styled.div`
  max-width: 15rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;

  ${media.small} {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
