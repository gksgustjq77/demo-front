export const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const currentDate: Date = new Date();
  const timeDiff: number = currentDate.getTime() - date.getTime();
  const seconds: number = Math.floor(timeDiff / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else {
    return `${seconds}초 전`;
  }
};

export const truncateString = (str: string): string => {
  if (str.length > 20) {
    return str.slice(0, 20) + "...";
  } else {
    return str;
  }
};

export const combineStrings = (str: string, arr: string[]) => {
  if (str.length > 20) {
    return str.slice(0, 20) + "...";
  } else if (str.length < 20) {
    return str + arr.join("");
  }
};
