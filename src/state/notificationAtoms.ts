import { atom } from "jotai";

export type NotificationItem = {
  id: number;
  description: string;
  sentAt: string;
  status: "unread" | "read";
};

export const allNotificationsAtom = atom<NotificationItem[]>([]);
export const notificationFilterAtom = atom<"all" | "unread">("all");
