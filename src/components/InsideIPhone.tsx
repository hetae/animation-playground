import { ReactNode, forwardRef } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/joy";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { convertObjectToString } from "@utils/convertObjectToStringWithTab";
import { getGsapData } from "@utils/getGsapData";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import toast, { Toaster } from "react-hot-toast";
import "@/styles/codeSyntax.css";

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

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    toast.success("Copied to clipboard!");
  };

  return (
    <>
      <Toaster position="top-left" />
      <IPhoneTextDiv className="gsap--code" isCode ref={codeRef}>
        <SyntaxHighlighter language="typescript" wrapLongLines>
          {codeString}
        </SyntaxHighlighter>
        <CopyIconContainer>
          <ContentCopyIcon onClick={copyCode} />
        </CopyIconContainer>
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

const ToasterContainer = styled.div`
  position: "relative";
  z-index: 100;
`;

const CopyIconContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10;
  opacity: 0.6;
  background-color: white;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

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
