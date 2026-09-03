import styled from "styled-components";
import { designTokens } from "../../styles/designTokens";

type DotState = "active" | "inactive";

const StyledDot = styled.div<{ $state: DotState }>`
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $state }) =>
    $state === "active"
      ? designTokens.color.blue[500]
      : designTokens.color.global.white};
  border: ${({ $state }) =>
    $state === "active"
      ? "none"
      : `${designTokens.border.width.regular}px solid ${designTokens.color.gray[400]}`};
`;

export const Dot = ({ state = "active" }: { state?: DotState }) => {
  return <StyledDot $state={state} />;
};
