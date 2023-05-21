import { ReactNode, forwardRef } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/joy";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { convertObjectToString } from "../utils/convertObjectToStringWithTab";
import { getGsapData } from "../utils/getGsapData";

function InsideIPhone({
  setIsCode,
  gsapStates,
  animationRef,
  codeRef,
  children,
}: {
  setIsCode: (isCode: boolean) => void;
  gsapStates: { [key: string]: number };
  animationRef: React.RefObject<HTMLDivElement>;
  codeRef: React.RefObject<HTMLDivElement>;
  children: ReactNode;
}) {
  const codeString = `gsap.fromTo(animationRef.current,
  {
${convertObjectToString(getGsapData(gsapStates).from, 2)}
  },
  {
${convertObjectToString(getGsapData(gsapStates).to, 2)}
${convertObjectToString(getGsapData(gsapStates).rest, 2)}
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
      <IPhoneTextDiv className="gsap--animation" ref={animationRef}>
        {children}
      </IPhoneTextDiv>
      <IphoneButtons>
        <Button onClick={() => setIsCode(false)}>Screen</Button>
        <Button onClick={() => setIsCode(true)}>Code</Button>
      </IphoneButtons>
    </>
  );
}
export default forwardRef(InsideIPhone);

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
