import styled from "styled-components";
import { designTokens } from "../../styles/designTokens";

export const PanelCard = styled.div`
  height: fit-content;
  padding: ${designTokens.spacing["space-5"]}px;
  border: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[200]};
  border-radius: ${designTokens.radius.md}px;
  background: ${designTokens.color.global.white};
  color: ${designTokens.color.gray[900]};
  font-family: ${designTokens.font.family.primary};

  h2 {
    margin: 0 0 ${designTokens.spacing["space-3"]}px;
    font-size: ${designTokens.font.size.xl}px;
    font-weight: ${designTokens.font.weight.bold};
  }

  p {
    margin: 0 0 ${designTokens.spacing["space-3"]}px;
    color: ${designTokens.color.gray[700]};
    font-size: ${designTokens.font.size.md}px;
    line-height: 1.5;
  }
`;
