import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import toast from "react-hot-toast";
import { convertObjectToString } from "@/utils/convertObjectToStringWithTab";
import "@/styles/codeSyntax.css";

export default function Code({ preset }: { preset: any }) {
  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    toast.success("Copied to clipboard!");
  };

  const codeString = `gsap.fromTo(animationRef.current,
    {
  ${convertObjectToString(preset.from, 2)}
    },
    {
  ${convertObjectToString(preset.to, 2)}
  ${convertObjectToString(preset.rest, 2)}
    }
  );`;

  return (
    <Container>
      <SyntaxHighlighter language="typescript" wrapLongLines>
        {codeString}
      </SyntaxHighlighter>
      <CopyIconContainer>
        <ContentCopyIcon onClick={copyCode} />
      </CopyIconContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CopyIconContainer = styled.div`
  position: absolute;
  top: 2rem;
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
