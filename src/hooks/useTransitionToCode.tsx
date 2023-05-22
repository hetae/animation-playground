import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function useTransitionToCode({
  isCode,
  mainRef,
  codeRef,
}: {
  isCode: boolean;
  mainRef: React.RefObject<HTMLDivElement>;
  codeRef: React.RefObject<HTMLDivElement>;
}) {
  const isMountRef = useRef(false);

  useEffect(() => {
    const blockPart = mainRef.current;
    const codePart = codeRef.current;
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
        duration: 0.5,
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
          duration: 0.5,
        }
      );
    } else {
      gsap.to(codePart, {
        rotateY: "-90deg",
        x: "375px",
        duration: 0.5,
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
          duration: 0.5,
        }
      );
    }
  }, [codeRef, isCode, mainRef]);
}
