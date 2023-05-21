import { forwardRef } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/joy";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

function TextAndCode({
  setIsCode,
  gsapStates,
  textRef,
  codeRef,
}: {
  setIsCode: (isCode: boolean) => void;
  gsapStates: { [key: string]: number };
  textRef: React.RefObject<HTMLDivElement>;
  codeRef: React.RefObject<HTMLDivElement>;
}) {
  const codeString = `gsap.fromTo(textRef.current,
  {
    x: ${gsapStates.xFrom},
    y: ${gsapStates.yFrom},
    opacity: ${gsapStates.opacityFrom},
  },
  {
    x: ${gsapStates.xTo},
    y: ${gsapStates.yTo},
    opacity: ${gsapStates.opacityTo},
    stagger: ${gsapStates.stagger},
    duration: ${gsapStates.duration},
    ease: ${gsapStates.easingType},
  }
);`;

  return (
    <>
      <IPhoneTextDiv className="gsap--code" isCode ref={codeRef}>
        <SyntaxHighlighter
          language="typescript"
          style={{ a11yLight }}
          wrapLongLines
        >
          {codeString}
        </SyntaxHighlighter>
      </IPhoneTextDiv>
      <IPhoneTextDiv className="gsap--text" ref={textRef}>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.`}
        <div style={{ height: "1rem" }} />
        {`Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it
      to make a type specimen book.`}
      </IPhoneTextDiv>

      <IphoneButtons>
        <Button onClick={() => setIsCode(false)}>Screen</Button>
        <Button onClick={() => setIsCode(true)}>Code</Button>
      </IphoneButtons>
    </>
  );
}
export default forwardRef(TextAndCode);

const IPhoneTextDiv = styled.div<{ isCode?: boolean }>`
  position: absolute;
  font-size: ${(props) => (props.isCode ? "16px" : "24px")};
  padding: 48px 12px 0 12px;
  line-height: 1.4;
  opacity: 0;
`;

const IphoneButtons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
`;
