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
  background-color: #f5f5f5;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;
