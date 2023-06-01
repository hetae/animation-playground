import styled from "@emotion/styled";

export default function PageContainer({
  mouseEnterEvent,
  mouseLeaveEvent,
  children,
}: {
  mouseEnterEvent: () => void;
  mouseLeaveEvent: () => void;
  children: React.ReactNode;
}) {
  return (
    <Container onMouseEnter={mouseEnterEvent} onMouseLeave={mouseLeaveEvent}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 20rem;
  height: 15rem;
  background-color: #ebebeb;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
`;
