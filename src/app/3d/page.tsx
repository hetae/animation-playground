"use client";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { Button, Divider } from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@toss/react";
import { gsapOptions } from "./gsapOptions";
import {
  GsapSlider,
  GsapSelect,
  PlaygroundContainer,
  IPhoneX,
  InsideIPhone,
} from "@/components/playground-page";
import useTransitionToCode from "@hooks/useTransitionToCode";
import { getGsapData } from "@utils/getGsapData";

export default function Block() {
  const [counter, setCounter] = useState(0);
  const [isCode, setIsCode] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);
  const iPhoneCodeRef = useRef<HTMLDivElement>(null);
  const [gsapStates, setGsapStates] = useState(
    gsapOptions.reduce((acc, cur) => {
      acc[cur.type] = cur.default;
      return acc;
      //! FIXME
    }, {} as any)
  );

  useTransitionToCode({
    isCode,
    mainRef: animationRef,
    codeRef: iPhoneCodeRef,
  });

  const onChangeSlider =
    (type: string) => (_event: Event, newValue: number | number[]) => {
      if (typeof newValue === "number")
        setGsapStates({ ...gsapStates, [type]: newValue });
    };

  const handleGsapAnimation = useDebounce((timeline) => {
    timeline.play();
  }, 300);

  useEffect(() => {
    const gsapData = getGsapData(gsapStates);
    const animationChildren = animationRef.current?.children;
    const ctx = gsap.context(() => {
      if (animationChildren) {
        const timeline = gsap.fromTo(
          animationChildren,
          {
            ...gsapData.from,
          },
          {
            stagger: 0.1,
            ...gsapData.to,
            ...gsapData.rest,
          }
        );
        timeline.pause();
        handleGsapAnimation(timeline);
      }
    });
    return () => {
      ctx.revert();
    };
  }, [counter, gsapStates, handleGsapAnimation]);

  return (
    <PlaygroundContainer>
      <OptionsContainer>
        <Button onClick={() => setCounter(counter + 1)}>replay</Button>
        {gsapOptions.map((item) => {
          if (item.componentType === "select") {
            return (
              <GsapSelect
                key={item.type}
                item={item}
                gsapStates={gsapStates}
                setGsapStates={setGsapStates}
              />
            );
          }
        })}
        <Divider />
        {gsapOptions.map((item) => {
          if (item.componentType === "slider")
            return (
              <GsapSlider
                key={item.type}
                type={item.type}
                set={onChangeSlider(item.type)}
                val={gsapStates}
                target={item}
              />
            );
        })}
      </OptionsContainer>
      <IPhoneX>
        <InsideIPhone
          setIsCode={setIsCode}
          gsapStates={gsapStates}
          animationRef={animationRef}
          codeRef={iPhoneCodeRef}
          styleOverride={{
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          isBlock
        >
          <div
            style={{
              width: "250px",
              height: "70px",
              backgroundColor: "#a9d3f3",
              borderRadius: "1rem",
            }}
          />
          <div
            style={{
              width: "250px",
              height: "70px",
              backgroundColor: "#a9d3f3",
              borderRadius: "1rem",
            }}
          />
          <div
            style={{
              width: "250px",
              height: "70px",
              backgroundColor: "#a9d3f3",
              borderRadius: "1rem",
            }}
          />
          <div
            style={{
              width: "250px",
              height: "70px",
              backgroundColor: "#a9d3f3",
              borderRadius: "1rem",
            }}
          />
          <div
            style={{
              width: "250px",
              height: "70px",
              backgroundColor: "#a9d3f3",
              borderRadius: "1rem",
            }}
          />
        </InsideIPhone>
      </IPhoneX>
    </PlaygroundContainer>
  );
}

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
