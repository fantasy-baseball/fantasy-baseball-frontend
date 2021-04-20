import { format, intervalToDuration } from "date-fns";

const formatDate = (date, setting) => format(date, setting);

export const countTime = (now, endTime) => {
  const duration = intervalToDuration({
    start: now,
    end: endTime,
  });

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const hours = formatTime(duration.hours);
  const minutes = formatTime(duration.minutes);
  const seconds = formatTime(duration.seconds);

  return {
    hours,
    minutes,
    seconds,
  };
};

export default formatDate;
