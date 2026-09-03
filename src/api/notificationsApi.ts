import type { NotificationItem } from "../state/notificationAtoms";

export const getNotifications = (): NotificationItem[] => {
  const notifications: NotificationItem[] = [
    {
      id: 1,
      description: "New service ticket assigned to your team",
      sentAt: "2026-09-02T09:15:00Z",
      status: "unread",
    },
    {
      id: 2,
      description: "Order A-10491 has shipped",
      sentAt: "2026-09-02T08:42:00Z",
      status: "unread",
    },
    {
      id: 3,
      description: "Maintenance window scheduled for Friday 2:00 PM",
      sentAt: "2026-09-02T08:00:00Z",
      status: "unread",
    },
    {
      id: 4,
      description: "Customer feedback survey is ready to review",
      sentAt: "2026-09-02T07:10:00Z",
      status: "unread",
    },
    {
      id: 5,
      description: "Inventory alert: 3 SKUs below reorder threshold",
      sentAt: "2026-09-02T06:05:00Z",
      status: "unread",
    },
    {
      id: 6,
      description: "Renewal reminder for the enterprise support plan",
      sentAt: "2026-09-01T14:30:00Z",
      status: "read",
    },
    {
      id: 7,
      description: "Customer onboarding checklist completed",
      sentAt: "2026-09-01T11:00:00Z",
      status: "read",
    },
  ];

  return notifications;
};
