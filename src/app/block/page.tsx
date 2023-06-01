"use client";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { Button, Divider } from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@toss/react";
import { gsapOptions } from "./gsapOptions";
import GsapSelect from "@components/GsapSelect";
import GsapSlider from "@components/GsapSlider";
import IPhoneX from "@components/IPhoneX";
import useTransitionToCode from "@hooks/useTransitionToCode";
import InsideIPhone from "@components/InsideIPhone";
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
    const ctx = gsap.context(() => {
      if (animationRef.current) {
        const timeline = gsap.fromTo(
          animationRef.current,
          {
            ...gsapData.from,
          },
          {
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
    <Container>
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
            justifyContent: "center",
            alignItems: "center",
          }}
          isBlock
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#c1f3a9",
              borderRadius: "1rem",
            }}
          />
        </InsideIPhone>
      </IPhoneX>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
