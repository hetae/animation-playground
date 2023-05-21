"use client";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { Button, Divider } from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import { gsapOptions } from "./gsapOptions";
import GsapSelect from "../components/GsapSelect";
import GsapSlider from "../components/GsapSlider";
import IPhoneX from "../components/IPhoneX";
import BlockAndCode from "./BlockAndCode";
import { useDebounce } from "@toss/react";

export default function Block() {
  const [counter, setCounter] = useState(0);
  const [isCode, setIsCode] = useState(false);
  const iPhoneBlockRef = useRef<HTMLDivElement>(null);
  const iPhoneCodeRef = useRef<HTMLDivElement>(null);
  const isMountRef = useRef(false);
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
    const blockPart = iPhoneBlockRef.current;
    const codePart = iPhoneCodeRef.current;
    if (!isMountRef.current) {
      isMountRef.current = true;
      gsap.set(codePart, {
        rotateY: "-90deg",
        x: "375px",
        opacity: 1,
      });
      gsap.set(blockPart, { opacity: 1 });
      return;
    }

    if (isCode) {
      gsap.to(blockPart, {
        rotateY: "90deg",
        x: "-375px",
        duration: 1,
      });
      gsap.fromTo(
        codePart,
        {
          rotateY: "-90deg",
          x: "375px",
          duration: 0,
        },
        {
          rotateY: "0deg",
          x: "0",
          duration: 1,
        }
      );
    } else {
      gsap.to(codePart, {
        rotateY: "-90deg",
        x: "375px",
        duration: 1,
      });
      gsap.fromTo(
        blockPart,
        {
          rotateY: "90deg",
          x: "-375px",
          duration: 0,
        },
        {
          rotateY: "0deg",
          x: "0",
          duration: 1,
        }
      );
    }
  }, [isCode]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (iPhoneBlockRef.current) {
        const timeline = gsap.fromTo(
          iPhoneBlockRef.current,
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
  }, [counter, gsapStates, handleGsapAnimation]);

  return (
    <Container>
      <OptionsContainer>
        <Button onClick={() => setCounter(counter + 1)}>refresh</Button>
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
        <BlockAndCode
          setIsCode={setIsCode}
          gsapStates={gsapStates}
          blockRef={iPhoneBlockRef}
          codeRef={iPhoneCodeRef}
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
