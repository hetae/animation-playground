"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import IPhoneX from "../components/IPhoneX";
import {
  EasingType,
  TextType,
  easingOptions,
  gsapOptions,
} from "./gsapOptions";
import GsapSlider from "../components/Sliders";
import { useDebounce } from "@toss/react";
import { Button, Select, Option, Typography } from "@mui/joy";
import styled from "@emotion/styled";
import TextAndCode from "./TextAndCode";

export default function Text() {
  const textRef = useRef<HTMLElement[] | null>(null);
  const [counter, setCounter] = useState(0);
  const [isCode, setIsCode] = useState(false);
  const [gsapStates, setGsapStates] = useState(
    gsapOptions.reduce((acc, cur) => {
      acc[cur.type] = cur.default;
      return acc;
      //! FIXME
    }, {} as any)
  );

  const onChangeSlider =
    (type: string) => (_event: Event, newValue: number | number[]) => {
      if (typeof newValue === "number")
        setGsapStates({ ...gsapStates, [type]: newValue });
    };

  const handleGsapAnimation = useDebounce((timeline) => {
    timeline.play();
  }, 300);

  useEffect(() => {
    const text = new SplitType("div.gsap--text");
    const words = text[gsapStates.textType as TextType];
    if (words) textRef.current = words;
  }, [isCode, gsapStates.textType]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const timeline = gsap.fromTo(
          textRef.current,
          {
            x: gsapStates.xFrom,
            y: gsapStates.yFrom,
            opacity: gsapStates.opacityFrom,
          },
          {
            x: gsapStates.xTo,
            y: gsapStates.yTo,
            opacity: gsapStates.opacityTo,
            stagger: gsapStates.stagger,
            duration: gsapStates.duration,
            ease: gsapStates.easingType,
          }
        );
        timeline.pause();
        handleGsapAnimation(timeline);
      }
    });
    return () => {
      ctx.revert();
    };
  }, [counter, gsapStates, handleGsapAnimation, isCode]);

  return (
    <Container>
      <OptionsContainer>
        <Button onClick={() => setCounter(counter + 1)}>refresh</Button>
        {gsapOptions.map((item) => {
          if (item.componentType === "select") {
            return (
              <ButtonWithText key={item.type}>
                <Typography level="body1">{item.type}: </Typography>
                <Select
                  defaultValue={item.default}
                  onChange={(_e, val: any) =>
                    val && setGsapStates({ ...gsapStates, [item.type]: val })
                  }
                >
                  {item.options?.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </ButtonWithText>
            );
          }
        })}
        <div style={{ height: 10 }} />
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
        <TextAndCode
          isCode={isCode}
          setIsCode={setIsCode}
          gsapOptions={gsapStates}
        />
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

const ButtonWithText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
