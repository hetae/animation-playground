"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import styled from "@emotion/styled";
import { Button, Divider } from "@mui/joy";
import { useDebounce } from "@toss/react";
import IPhoneX from "@components/IPhoneX";
import { gsapOptions } from "./gsapOptions";
import GsapSlider from "@components/GsapSlider";
import GsapSelect from "@components/GsapSelect";
import { TextType } from "@/types/gsapOption";
import useTransitionToCode from "@hooks/useTransitionToCode";
import { getGsapData } from "@utils/getGsapData";
import InsideIPhone from "@components/InsideIPhone";

export default function Text() {
  const textRef = useRef<HTMLElement[] | null>(null);
  const [counter, setCounter] = useState(0);
  const [isCode, setIsCode] = useState(false);
  const iPhoneTextRef = useRef<HTMLDivElement>(null);
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
    mainRef: iPhoneTextRef,
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
    const text = new SplitType("div.gsap--animation");
    const words = text[gsapStates.textType as TextType];
    if (words) textRef.current = words;
  }, [gsapStates.textType]);

  useEffect(() => {
    const gsapData = getGsapData(gsapStates);
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const timeline = gsap.fromTo(
          textRef.current,
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
          animationRef={iPhoneTextRef}
          codeRef={iPhoneCodeRef}
        >
          <>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.`}
            <div style={{ height: "1rem" }} />
            {`Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it
      to make a type specimen book.`}
          </>
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
