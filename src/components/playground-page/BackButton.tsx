import styled from "@emotion/styled";
import { Button } from "@mui/joy";
import { NavigateBefore } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  return (
    <ButtonContainer>
      <Button onClick={onBack} startDecorator={<NavigateBefore />}>
        Go Back
      </Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
