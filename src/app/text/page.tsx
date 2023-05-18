"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import IPhoneX from "../components/IPhoneX";
import { gsapOptions } from "./gsapOptions";
import GsapSlider from "../components/Sliders";
import { useDebounce } from "@toss/react";
import { Button, Select, Option } from "@mui/joy";

type TextStyle = "words" | "chars" | "lines";
type EasingType =
  | "power0"
  | "power1"
  | "power2"
  | "power3"
  | "power4"
  | "back"
  | "elastic"
  | "bounce"
  | "rough"
  | "expo";

export default function Text() {
  const textRef = useRef<HTMLElement[] | null>(null);
  const [counter, setCounter] = useState(0);
  const [textStyle, setTextStyle] = useState<TextStyle>("words");
  const [easing, setEasing] = useState<EasingType>("back" as EasingType);
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
    const text = new SplitType("div.text1");
    const words = text[textStyle];
    if (words) textRef.current = words;
  }, [textStyle]);

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
  }, [counter, gsapStates, handleGsapAnimation, textStyle, easing]);

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
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Select
            defaultValue="words"
            onChange={(_e, val: TextStyle | null) => val && setTextStyle(val)}
          >
            <Option value="chars">chars</Option>
            <Option value="words">words</Option>
            <Option value="lines">lines</Option>
          </Select>
          <Select
            defaultValue="back"
            onChange={(_e, val: EasingType | null) => val && setEasing(val)}
          >
            {[
              "power0",
              "power1",
              "power2",
              "power3",
              "power4",
              "back",
              "elastic",
              "bounce",
              "rough",
              "expo",
            ].map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Button onClick={() => setCounter(counter + 1)}>refresh</Button>
        </div>
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
