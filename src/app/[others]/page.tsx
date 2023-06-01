"use client";
import "@/styles/normalize.css";
import { Linear, gsap } from "gsap";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function Custom404() {
  const animationRef = useRef<HTMLDivElement>(null);
  const constructRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationRef.current || !constructRef.current) return;
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
  }, []);

  return (
    <Container>
      <TextContainer>
        <div ref={constructRef}>🚧</div>
        <div ref={animationRef}>Page Not Found</div>
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
