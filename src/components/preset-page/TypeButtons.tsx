import styled from "@emotion/styled";

export default function TypeButtons({
  onClickPresetType,
  presetType,
}: {
  onClickPresetType: (target: React.MouseEvent<HTMLButtonElement>) => void;
  presetType: string;
}) {
  return (
    <ButtonsContainer>
      <TypeButton
        onClick={onClickPresetType}
        value="text"
        isEnable={presetType === "text"}
      >
        Text
      </TypeButton>
      <TypeButton
        onClick={onClickPresetType}
        value="block"
        isEnable={presetType === "block"}
      >
        Block
      </TypeButton>
      <TypeButton
        onClick={onClickPresetType}
        value="blocks"
        isEnable={presetType === "blocks"}
      >
        Blocks
      </TypeButton>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TypeButton = styled.button<{ isEnable: boolean }>`
  border: none;
  padding: 1rem;
  cursor: pointer;
  background-color: ${({ isEnable }) => (isEnable ? "#dee2e6" : "#fff")};
  font-size: 1.5rem;
  font-weight: ${({ isEnable }) => (isEnable ? "bold" : "normal")};
  transition: all 0.3s ease;

  &:hover {
    background-color: #dee2e6;
  }
`;
