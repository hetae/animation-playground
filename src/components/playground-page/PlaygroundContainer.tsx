import styled from "@emotion/styled";
import BackButton from "./BackButton";

export default function PlaygroundContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackButton />
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
`;
