import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styled from "@emotion/styled";
import PageContainer from "./PageContainer";

export default function ThreeDimension() {
  const [isHover, setIsHover] = useState(false);
  const isMountRef = useRef(false);
  const cube1Ref = useRef<HTMLDivElement>(null);
  const cube2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      gsap.set(cube2Ref.current, {
        rotateY: "-90deg",
        x: "80px",
        opacity: 1,
      });
      gsap.set(cube1Ref.current, { opacity: 1 });
      return;
    }

    if (isHover) {
      gsap.to(cube1Ref.current, {
        rotateY: "90deg",
        x: "-80px",
        duration: 0.5,
      });
      gsap.fromTo(
        cube2Ref.current,
        {
          rotateY: "-90deg",
          x: "80px",
          duration: 0,
        },
        {
          rotateY: "0deg",
          x: "0",
          duration: 0.5,
        }
      );
    } else {
      gsap.to(cube2Ref.current, {
        rotateY: "-90deg",
        x: "80px",
        duration: 0.5,
      });
      gsap.fromTo(
        cube1Ref.current,
        {
          rotateY: "90deg",
          x: "-80px",
          duration: 0,
        },
        {
          rotateY: "0deg",
          x: "0",
          duration: 0.5,
        }
      );
    }
  }, [isHover]);

  return (
    <PageContainer
      mouseEnterEvent={() => setIsHover(true)}
      mouseLeaveEvent={() => setIsHover(false)}
      navigateTo="3d"
    >
      <Container>
        <Cube1 className="cube-1" ref={cube1Ref}>
          3D
        </Cube1>
        <Cube2 className="cube-2" ref={cube2Ref}>
          Motion
        </Cube2>
      </Container>
    </PageContainer>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cube1 = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  background-color: #fc9bff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Cube2 = styled.div<{ isHover?: boolean }>`
  position: absolute;
  width: 10rem;
  height: 10rem;
  background-color: #96d8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;
