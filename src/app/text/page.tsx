"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import IPhoneX from "../components/IPhoneX";
import { gsapOptions, gsapOptionsType } from "./gsapOptions";
import GsapSlider from "../components/Sliders";
import { useDebounce } from "@toss/react";
import { Button } from "@mui/joy";

export default function Text() {
  const [counter, setCounter] = useState(0);
  const textRef = useRef<HTMLElement[] | null>(null);
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

  useEffect(() => {
    const text = new SplitType("div.text1");
    const words = text.words;
    if (words) textRef.current = words;
  }, []);

  const handleGsapAnimation = useDebounce((timeline) => {
    timeline.play();
  }, 300);

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
            x: 0,
            y: 0,
            opacity: gsapStates.opacityTo,
            stagger: 0.1,
            duration: 0.5,
            ease: "back",
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 800,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button onClick={() => setCounter(counter + 1)}>refresh</Button>
        <div style={{ height: 10 }} />
        {gsapOptions.map((item) => {
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
      </div>
      <IPhoneX>
        <div
          className="text1"
          style={{ fontSize: 24, padding: "48px 12px 0 12px", lineHeight: 1.4 }}
        >
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`}
          <div style={{ height: 10 }} />
          {`Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.`}
        </div>
      </IPhoneX>
    </div>
  );
}
