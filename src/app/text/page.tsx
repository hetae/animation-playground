"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import IPhoneX from "../components/IPhoneX";
import { EasingType, easingOptions, gsapOptions } from "./gsapOptions";
import GsapSlider from "../components/Sliders";
import { useDebounce } from "@toss/react";
import { Button, Select, Option, Typography } from "@mui/joy";
import styled from "@emotion/styled";

type TextStyle = "words" | "chars" | "lines";

export default function Text() {
  const textRef = useRef<HTMLElement[] | null>(null);
  const [counter, setCounter] = useState(0);
  const [textStyle, setTextStyle] = useState<TextStyle>("words");
  const [easing, setEasing] = useState<EasingType>("back" as EasingType);
  const [isCode, setIsCode] = useState(false);
  const [gsapStates, setGsapStates] = useState(
    gsapOptions.reduce((acc, cur) => {
      acc[cur.type] = cur.default;
      return acc;
    }, {} as { [key: string]: number })
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
    if (isCode) return;
    const text = new SplitType("div.gsap--text");
    const words = text[textStyle];
    if (words) textRef.current = words;
  }, [textStyle, isCode]);

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
            stagger: 0.1,
            duration: 0.5,
            ease: easing,
          }
        );
        timeline.pause();
        handleGsapAnimation(timeline);
      }
    });
    return () => {
      ctx.revert();
    };
  }, [counter, gsapStates, handleGsapAnimation, textStyle, isCode, easing]);

  return (
    <Container>
      <OptionsContainer>
        <Button onClick={() => setCounter(counter + 1)}>refresh</Button>
        <ButtonWithText>
          <Typography level="body1">text style: </Typography>
          <Select
            defaultValue="words"
            onChange={(_e, val: TextStyle | null) => val && setTextStyle(val)}
          >
            <Option value="chars">chars</Option>
            <Option value="words">words</Option>
            <Option value="lines">lines</Option>
          </Select>
        </ButtonWithText>
        <ButtonWithText>
          <Typography level="body1">easing: </Typography>
          <Select
            defaultValue="back"
            onChange={(_e, val: EasingType | null) => val && setEasing(val)}
          >
            {easingOptions.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </ButtonWithText>
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
        {isCode ? (
          <>code</>
        ) : (
          <IPhoneTextDiv className="gsap--text">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`}
            <div style={{ height: "1rem" }} />
            {`Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.`}
          </IPhoneTextDiv>
        )}
        <IphoneButtons>
          <Button onClick={() => setIsCode(false)}>Screen</Button>
          <Button onClick={() => setIsCode(true)}>Code</Button>
        </IphoneButtons>
      </IPhoneX>
    </Container>
  );
}

const IPhoneTextDiv = styled.div`
  font-size: 24px;
  padding: 48px 12px 0 12px;
  line-height: 1.4;
`;

const IphoneButtons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
`;

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
