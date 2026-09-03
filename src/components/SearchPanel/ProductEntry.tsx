import styled from "styled-components";
import { designTokens } from "../../styles/designTokens";
import { Pill } from "../atoms/Pill";
import { ProductIcon } from "../icons/ProductIcon";

type ProductEntryProps = {
  product: {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
  };
};

const ResultRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${designTokens.spacing["space-3"]}px;
  padding: ${designTokens.spacing["space-3"]}px 0;
  border-top: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[200]};
`;

const ResultLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${designTokens.spacing["space-3"]}px;
  min-width: 0;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${designTokens.color.gray[500]};
  flex-shrink: 0;
`;

const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: ${designTokens.font.size.md}px;
  font-weight: ${designTokens.font.weight.medium};
  color: ${designTokens.color.gray[900]};
  line-height: 1.4;
`;

const Subtitle = styled.div`
  font-size: ${designTokens.font.size.sm}px;
  color: ${designTokens.color.gray[500]};
  line-height: 1.4;
`;

export const ProductEntry = ({ product }: ProductEntryProps) => {
  return (
    <ResultRow>
      <ResultLeft>
        <IconWrap>
          <ProductIcon />
        </IconWrap>
        <ResultContent>
          <Title>{product.name}</Title>
          <Subtitle>
            {product.stock} in stock · ${product.price}
          </Subtitle>
        </ResultContent>
      </ResultLeft>
      <Pill text={product.category} color="neutral" />
    </ResultRow>
  );
};
