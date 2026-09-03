import styled from "styled-components";
import { useAtom } from "jotai";
import { allNotificationsAtom } from "../../state/notificationAtoms";
import { designTokens } from "../../styles/designTokens";
import { BellIcon } from "../icons/BellIcon";

const NotificationWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

const StyledBellIcon = styled(BellIcon)`
  width: 22px;
  height: 22px;
  color: ${designTokens.color.gray[700]};
`;

const Counter = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  padding: 0 ${designTokens.spacing["space-1"]}px;
  border-radius: ${designTokens.radius.xl}px;
  background: ${designTokens.color.red[500]};
  color: ${designTokens.color.global.white};
  font-family: ${designTokens.font.family.primary};
  font-size: ${designTokens.font.size.xs}px;
  font-weight: ${designTokens.font.weight.bold};
  line-height: 1;
`;

export const NotificationCounter = () => {
  const [allNotifications] = useAtom(allNotificationsAtom);

  const unreadCount = allNotifications.filter(
    (notification) => notification.status === "unread",
  ).length;

  return (
    <NotificationWrapper>
      <StyledBellIcon />
      <Counter>{unreadCount}</Counter>
    </NotificationWrapper>
  );
};
