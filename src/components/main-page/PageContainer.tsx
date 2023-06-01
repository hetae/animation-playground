import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

export default function PageContainer({
  mouseEnterEvent,
  mouseLeaveEvent,
  navigateTo,
  children,
}: {
  mouseEnterEvent: () => void;
  mouseLeaveEvent: () => void;
  navigateTo: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Container
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
      onClick={() => router.push(navigateTo)}
    >
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
