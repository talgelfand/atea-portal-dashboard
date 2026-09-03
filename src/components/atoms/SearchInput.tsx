import styled from "styled-components";
import { designTokens } from "../../styles/designTokens";
import { SearchIcon } from "../icons/SearchIcon";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchField = styled.div`
  display: flex;
  align-items: center;
  gap: ${designTokens.spacing["space-2"]}px;
  width: 100%;
  border: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[300]};
  border-radius: ${designTokens.radius.md}px;
  background: ${designTokens.color.global.white};
  padding: ${designTokens.spacing["space-2"]}px
    ${designTokens.spacing["space-3"]}px;
  margin: ${designTokens.spacing["space-3"]}px 0;
  box-sizing: border-box;

  &:focus-within {
    border-color: ${designTokens.color.blue[500]};
    border-width: ${designTokens.focusRing.width}px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 16px;
  height: 16px;
  color: ${designTokens.color.gray[500]};
  flex-shrink: 0;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${designTokens.color.gray[700]};
  font-family: ${designTokens.font.family.primary};
  font-size: ${designTokens.font.size.md}px;

  &::placeholder {
    color: ${designTokens.color.gray[400]};
  }
`;

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
}: SearchInputProps) => {
  return (
    <SearchField>
      <StyledSearchIcon />
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </SearchField>
  );
};
