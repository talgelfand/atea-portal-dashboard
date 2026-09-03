export const formatRelativeTime = (sentAt: string) => {
  const now = Date.now();
  const sentTime = new Date(sentAt).getTime();
  const diffMs = now - sentTime;

  if (Number.isNaN(sentTime)) {
    return "recently";
  }

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  if (diffHours < 24) return `${diffHours} hr ago`;
  return `${diffDays} day ago`;
};
