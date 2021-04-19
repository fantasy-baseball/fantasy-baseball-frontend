import { format, intervalToDuration } from "date-fns";

const formatDate = (date, setting) => format(date, setting);

const countTime = (now, endTime) => {
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

const dateUtil = {
  formatDate,
  countTime,
};

export default dateUtil;
