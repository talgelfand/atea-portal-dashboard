import styled from "styled-components";
import { useSetAtom } from "jotai";
import { designTokens } from "../../styles/designTokens";
import { allNotificationsAtom } from "../../state/notificationAtoms";

const Button = styled.button`
  border: ${designTokens.border.width.regular}px solid
    ${designTokens.color.gray[300]};
  background: transparent;
  color: ${designTokens.color.gray[700]};
  border-radius: ${designTokens.radius.md}px;
  padding: ${designTokens.spacing["space-3"]}px
    ${designTokens.spacing["space-3"]}px;
  font-family: ${designTokens.font.family.primary};
  font-size: ${designTokens.font.size.sm}px;
  font-weight: ${designTokens.font.weight.medium};
  cursor: pointer;

  &:hover {
    border-color: ${designTokens.color.gray[400]};
  }
`;

export const MarkAsReadButton = ({ id }: { id: number }) => {
  const setAllNotifications = useSetAtom(allNotificationsAtom);

  const handleClick = () => {
    setAllNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, status: "read" }
          : notification,
      ),
    );
  };

  return <Button onClick={handleClick}>Mark as read</Button>;
};
