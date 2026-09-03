import styled from "styled-components";
import { useAtom } from "jotai";
import { designTokens } from "../../styles/designTokens";
import { notificationFilterAtom } from "../../state/notificationAtoms";

const FilterSelect = styled.select`
  border: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[300]};
  border-radius: ${designTokens.radius.md}px;
  background: ${designTokens.color.global.white};
  color: ${designTokens.color.gray[700]};
  padding: ${designTokens.spacing["space-1"]}px
    ${designTokens.spacing["space-2"]}px;
  font-family: ${designTokens.font.family.primary};
  font-size: ${designTokens.font.size.sm}px;
`;

export const NotificationFilter = () => {
  const [filter, setFilter] = useAtom(notificationFilterAtom);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextValue = event.target.value as "all" | "unread";
    console.log("notification filter:", nextValue);
    setFilter(nextValue);
  };

  return (
    <FilterSelect
      value={filter}
      onChange={handleChange}
      aria-label="Notification filter"
    >
      <option value="all">All Notifications</option>
      <option value="unread">Unread Only</option>
    </FilterSelect>
  );
};
