"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import IPhoneX from "../components/IPhoneX";

export default function Text() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const text = new SplitType("div.text1");
    const words = text.words;

    gsap.fromTo(
      words,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back",
      }
    );
  }, [counter]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 800,
      }}
    >
      <div>
        <button onClick={() => setCounter(counter + 1)}>refresh</button>
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
