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
  const blockRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!isHover) return;
    // animation
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
      } else if (type === "block" && blockRef.current) {
        // if block
        gsap.fromTo(
          blockRef.current,
          {
            ...motion.from,
          },
          {
            ...motion.to,
            ...motion.rest,
          }
        );
      } else if (type === "blocks" && blocksRef?.current?.children) {
        // if blocks
        gsap.fromTo(
          blocksRef.current.children,
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

  const CustomBlock = () => {
    if (type === "text") {
      return <Text ref={textRef}>{motion.description}</Text>;
    } else if (type === "block") {
      if (motion.width && motion.height) {
        return (
          <Block
            ref={blockRef}
            style={{
              width: motion.width,
              height: motion.height,
            }}
          />
        );
      }
      return <Block ref={blockRef} />;
    } else if (type === "blocks") {
      if (motion.width && motion.height) {
        return (
          <TinyBlock
            style={{
              width: motion.width,
              height: motion.height,
            }}
          />
        );
      }
      return <TinyBlock />;
    }
    return <></>;
  };

  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      isClicked={isClicked}
    >
      {(type === "text" || type === "block") && <CustomBlock />}
      {type === "blocks" && (
        <Blocks ref={blocksRef}>
          {motion.count !== undefined ? (
            [...Array(motion.count)].map((_, i) => <CustomBlock key={i} />)
          ) : (
            <>
              <CustomBlock />
              <CustomBlock />
              <CustomBlock />
              <CustomBlock />
            </>
          )}
        </Blocks>
      )}
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
  overflow: hidden;

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

const Block = styled.div`
  width: 20rem;
  height: 6rem;
  background-color: gray;
`;

const Blocks = styled.div`
  width: 90%;
`;

const TinyBlock = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  background-color: gray;
`;
