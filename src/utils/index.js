import { formatDate } from "./date";
import { GAME_START_TIME, BETTING_START_TIME } from "../constants";

const checkDay = (day) => {
  if (day === 6) {
    return "saturday";
  }

  if (day === 0) {
    return "sunday";
  }

  if (day === 1) {
    return "monday";
  }

  return "weekdays";
};

const checkBettingCondition = (date) => {
  const today = checkDay(date.getDay());
  const now = formatDate(date, "kk:mm:ss");

  if (today === "monday") {
    return "monday";
  }

  if (now > GAME_START_TIME[today]) {
    return "close";
  }

  if (now < GAME_START_TIME[today] && now > BETTING_START_TIME[today]) {
    return "open";
  }

  if (now > "00:30:00" && now < "04:00:00") {
    return "calculating";
  }

  if (now > "04:00:00") {
    return "result";
  }

  return "close";
};

export const refinePlayerRankings = (playerRankings) => (
  playerRankings.map((player) => {
    const { name, team, score } = player;
    const imageUrl = player.playerInfo[0].playerPhotoUrl;
    return {
      name,
      team,
      score,
      imageUrl,
    };
  })
);

export default checkBettingCondition;
