import { formatDate } from "./date";
import { GAME_START_TIME } from "../constants";

const checkBettingStart = (date) => {
  const day = date.getDay();
  const now = formatDate(date, "kk:mm:ss");

  if ((day === 5 && now > GAME_START_TIME.saturday)) {
    return "close";
  }

  if (day === 6 && now > GAME_START_TIME.sunday) {
    return "close";
  }

  if (now > GAME_START_TIME.weekdays) {
    return "close";
  }

  if (now > "00:30:00" && now < "04:00:00") {
    return "calculating";
  }

  return "open";
};

export default checkBettingStart;
