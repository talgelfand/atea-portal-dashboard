import styled from "styled-components";
import { designTokens } from "../../styles/designTokens";

export type PillColor = "success" | "warning" | "danger" | "info" | "neutral";

const colorMap: Record<
  PillColor,
  { bg: string; text: string; border: string }
> = {
  success: {
    bg: designTokens.color.green[100],
    text: designTokens.color.green[700],
    border: designTokens.color.green[200],
  },
  warning: {
    bg: designTokens.color.orange[100],
    text: designTokens.color.orange[700],
    border: designTokens.color.orange[200],
  },
  danger: {
    bg: designTokens.color.red[100],
    text: designTokens.color.red[700],
    border: designTokens.color.red[200],
  },
  info: {
    bg: designTokens.color.blue[100],
    text: designTokens.color.blue[700],
    border: designTokens.color.blue[200],
  },
  neutral: {
    bg: designTokens.color.gray[100],
    text: designTokens.color.gray[700],
    border: designTokens.color.gray[200],
  },
};

const PillContainer = styled.span<{ $color: PillColor }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${designTokens.spacing["space-1"]}px
    ${designTokens.spacing["space-3"]}px;
  border-radius: ${designTokens.radius.pill}px;
  border: ${designTokens.border.width.thin}px solid
    ${({ $color }) => colorMap[$color].border};
  background: ${({ $color }) => colorMap[$color].bg};
  color: ${({ $color }) => colorMap[$color].text};
  font-family: ${designTokens.font.family.primary};
  font-size: ${designTokens.font.size.sm}px;
  font-weight: ${designTokens.font.weight.medium};
  text-transform: capitalize;
`;

export const Pill = ({ text, color }: { text: string; color: PillColor }) => {
  return <PillContainer $color={color}>{text}</PillContainer>;
};
