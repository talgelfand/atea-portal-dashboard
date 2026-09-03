import styled from "styled-components";
import { useEffect, useMemo } from "react";
import { useAtom } from "jotai";
import { getNotifications } from "../../api/notificationsApi";
import { formatRelativeTime } from "../../helpers/formatRelativeTime";
import { useQuery } from "../../hooks/useQuery";
import { designTokens } from "../../styles/designTokens";
import { Dot } from "../atoms/Dot";
import { MarkAsReadButton } from "../atoms/MarkAsReadButton";
import { NotificationCounter } from "../atoms/NotificationCounter";
import { NotificationFilter } from "../atoms/NotificationFilter";
import { PanelCard } from "../atoms/PanelCard";
import {
  allNotificationsAtom,
  notificationFilterAtom,
} from "../../state/notificationAtoms";

const NotificationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${designTokens.spacing["space-3"]}px;
  table-layout: fixed;
`;

const TableHead = styled.thead`
  border-bottom: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[200]};
`;

const Th = styled.th`
  text-align: left;
  padding: 0 0 ${designTokens.spacing["space-3"]}px;
  font-size: ${designTokens.font.size.sm}px;
  font-weight: ${designTokens.font.weight.medium};
  color: ${designTokens.color.gray[500]};
  text-transform: uppercase;
`;

const Td = styled.td`
  padding: ${designTokens.spacing["space-3"]}px 0;
  border-top: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[200]};
  font-size: ${designTokens.font.size.md}px;
  color: ${designTokens.color.gray[700]};
  text-align: left;
`;

const NotificationText = styled.div`
  display: flex;
  align-items: center;
  gap: ${designTokens.spacing["space-3"]}px;
  min-height: 24px;
  width: 100%;
`;

const NotificationLabel = styled.span`
  display: inline-block;
  flex: 1;
  line-height: 1.4;
`;

const ActionCell = styled.td`
  padding: ${designTokens.spacing["space-3"]}px 0;
  border-top: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[200]};
  text-align: right;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${designTokens.spacing["space-3"]}px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${designTokens.spacing["space-3"]}px;
  h2 {
    margin: 0;
  }
`;

export const NotificationsPanel = () => {
  const [allNotifications, setAllNotifications] = useAtom(allNotificationsAtom);
  const [filter] = useAtom(notificationFilterAtom);
  const { data: notifications, error, isLoading } = useQuery(getNotifications);

  useEffect(() => {
    if (notifications) {
      setAllNotifications(notifications);
    }
  }, [notifications, setAllNotifications]);

  const displayedNotifications = useMemo(() => {
    if (filter === "unread") {
      return allNotifications.filter(
        (notification) => notification.status === "unread",
      );
    }

    return allNotifications;
  }, [allNotifications, filter]);

  return (
    <PanelCard>
      <HeaderRow>
        <HeaderLeft>
          <h2>Unread Notifications</h2>
          <NotificationCounter />
        </HeaderLeft>
        <NotificationFilter />
      </HeaderRow>
      {isLoading && <p>Loading notifications...</p>}
      {error && <p>Unable to load notifications.</p>}
      <NotificationTable>
        <TableHead>
          <tr>
            <Th>Activity</Th>
            <Th>Sent</Th>
          </tr>
        </TableHead>
        <tbody>
          {!isLoading && !error && displayedNotifications.length === 0 && (
            <p>No notifications to display</p>
          )}
          {!isLoading &&
            !error &&
            displayedNotifications.map((notification) => (
              <tr key={notification.id}>
                <Td>
                  <NotificationText>
                    <Dot
                      state={
                        notification.status === "unread" ? "active" : "inactive"
                      }
                    />
                    <NotificationLabel>
                      {notification.description}
                    </NotificationLabel>
                  </NotificationText>
                </Td>
                <Td>{formatRelativeTime(notification.sentAt)}</Td>
                <ActionCell>
                  {notification.status === "unread" && (
                    <MarkAsReadButton id={notification.id} />
                  )}
                </ActionCell>
              </tr>
            ))}
        </tbody>
      </NotificationTable>
    </PanelCard>
  );
};
