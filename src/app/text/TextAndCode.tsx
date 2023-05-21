import styled from "@emotion/styled";
import { Button } from "@mui/joy";
import { forwardRef } from "react";

function TextAndCode({
  isCode,
  setIsCode,
  gsapOptions,
  textRef,
  codeRef,
}: {
  isCode: boolean;
  setIsCode: (isCode: boolean) => void;
  gsapOptions: { [key: string]: number };
  textRef: React.RefObject<HTMLDivElement>;
  codeRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <IPhoneTextDiv className="gsap--code" ref={codeRef}>
        {`nlajkds.`}
        <div style={{ height: "1rem" }} />
        {`asdfasdfa`}
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

const IPhoneTextDiv = styled.div`
  position: absolute;
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
