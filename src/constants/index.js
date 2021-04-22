export const SLOT_POSITIONS = [
  {
    position: "leftFielder",
    title: "Left Fielder",
    wrapperGridArea: "2 / 2 / span 4 / span 4",
    cardGridArea: "4 / 4 / span 5 / span 5",
    rowStart: 3,
    columnStart: 4,
  },
  {
    position: "centerFielder",
    title: "Center Fielder",
    wrapperGridArea: "2 / 5 / span 4 / span 4",
    cardGridArea: "2 / 6 / span 5 / span 5",
    rowStart: 1,
    columnStart: 6,
  },
  {
    position: "rightFielder",
    title: "Right Fielder",
    wrapperGridArea: "2 / 9 / span 4 / span 4",
    cardGridArea: "4 / 4 / span 5 / span 5",
    rowStart: 3,
    columnStart: 4,
  },
  {
    position: "shortStop",
    title: "Short Stop",
    wrapperGridArea: "4 / 4 / span 4 / span 4",
    cardGridArea: "3 / 4 / span 5 / span 5",
    rowStart: 2,
    columnStart: 4,
  },
  {
    position: "secondBaseman",
    title: "2nd Baseman",
    wrapperGridArea: "4 / 6 / span 4 / span 4",
    cardGridArea: "3 / 8 / span 5 / span 5",
    rowStart: 2,
    columnStart: 8,
  },
  {
    position: "thirdBaseman",
    title: "3rd Baseman",
    wrapperGridArea: "6 / 2 / span 4 / span 4",
    cardGridArea: "3 / 4 / span 5 / span 5",
    rowStart: 2,
    columnStart: 4,
  },
  {
    position: "pitcher",
    title: "Pitcher",
    wrapperGridArea: "6 / 5 / span 4 / span 4",
    cardGridArea: "3 / 6 / span 5 / span 5",
    rowStart: 2,
    columnStart: 6,
  },
  {
    position: "firstBaseman",
    title: "1st Baseman",
    wrapperGridArea: "6 / 9 / span 4 / span 4",
    cardGridArea: "3 / 4 / span 5 / span 5",
    rowStart: 2,
    columnStart: 4,
  },
  {
    position: "catcher",
    title: "CATCHER",
    wrapperGridArea: "9 / 5 / span 4 / span 4",
    cardGridArea: "3 / 6 / span 5 / span 5",
    rowStart: 2,
    columnStart: 6,
  },
  {
    position: "designatedHitter",
    title: "DESIGNATED HITTER",
    wrapperGridArea: "9 / 7 / span 4 / span 4",
    cardGridArea: "3 / 6 / span 5 / span 5",
    rowStart: 2,
    columnStart: 6,
  },
];

export const EMPTY_ROASTER = {
  leftFielder: {
    name: null,
  },
  centerFielder: {
    name: null,
  },
  rightFielder: {
    name: null,
  },
  firstBaseman: {
    name: null,
  },
  secondBaseman: {
    name: null,
  },
  thirdBaseman: {
    name: null,
  },
  shortStop: {
    name: null,
  },
  pitcher: {
    name: null,
  },
  catcher: {
    name: null,
  },
  designatedHitter: {
    name: null,
  },
};

export const GAME_START_TIME = {
  weekdays: "17:30:00",
  saturday: "16:00:00",
  sunday: "13:00:00",
};
