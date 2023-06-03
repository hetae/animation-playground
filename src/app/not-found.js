"use client";
import "@/styles/normalize.css";
import { Linear, gsap } from "gsap";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { Button } from "@mui/joy";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();
  const animationRef = useRef < HTMLDivElement > null;
  const constructRef = useRef < HTMLDivElement > null;
  const goBackRef = useRef < HTMLDivElement > null;

  const onBackToMain = () => {
    router.push("/");
  };

  useEffect(() => {
    if (!animationRef.current || !constructRef.current || !goBackRef.current)
      return;
    const texts = new SplitType(animationRef.current).chars;
    texts?.forEach((text, index) => {
      gsap.fromTo(
        text,
        {
          y: -2,
        },
        {
          delay: index * 0.1,
          y: 2,
          repeat: -1,
          yoyo: true,
          ease: Linear.easeIn,
        }
      );
    });

    gsap.fromTo(
      constructRef.current,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        yoyo: true,
        repeat: -1,
      }
    );

    gsap.fromTo(
      goBackRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        delay: 1,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <Container>
      <TextContainer>
        <div ref={constructRef}>🚧</div>
        <div ref={animationRef}>Page Not Found</div>
        <div ref={goBackRef}>
          <Button size="lg" onClick={onBackToMain}>
            return to main
          </Button>
        </div>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  font-size: 3rem;
  line-height: 1.4;
  font-weight: 800;
  text-align: center;
`;
