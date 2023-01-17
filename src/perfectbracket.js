import data from "./data";

export const perfectBracket = {
  name: "Perfect Bracket",
  afcWildCard1: "Jacksonville Jaguars",
  afcWildCard2: "Buffalo Bills",
  afcWildCard3: "Cincinnati Bengals",
  nfcWildCard1: "San Francisco 49ers",
  nfcWildCard2: "New York Giants",
  nfcWildCard3: "Dallas Cowboys",
  afcDivisional1: "TBD",
  afcDivisional2: "TBD",
  nfcDivisional1: "TBD",
  nfcDivisional2: "TBD",
  afcChampions: "TBD",
  nfcChampions: "TBD",
  superbowl: "TBD",
  superbowlTiebreaker: 0,
  points: 0,
  id: 9999,
};

const afcTeamSeeds = {
  "Kansas City Chiefs": 1,
  "Buffalo Bills": 2,
  "Cincinnati Bengals": 3,
  "Jacksonville Jaguars": 4,
  "Los Angeles Chargers": 5,
  "Baltimore Ravens": 6,
  "Miami Dolphins": 7,
};

const nfcTeamSeeds = {
  "Philadelphia Eagles": 1,
  "San Francisco 49ers": 2,
  "Minnesota Vikings": 3,
  "Tampa Bay Buccaneers": 4,
  "Dallas Cowboys": 5,
  "New York Giants": 6,
  "Seattle Seahawks": 7,
};

const games = [
  "afcWildCard1",
  "afcWildCard2",
  "afcWildCard3",
  "nfcWildCard1",
  "nfcWildCard2",
  "nfcWildCard3",
  "afcDivisional1",
  "afcDivisional2",
  "nfcDivisional1",
  "nfcDivisional2",
  "afcChampions",
  "nfcChampions",
  "superbowl",
];

export const getRemainingPossiblePoints = (bracket) => {
  const remaining_games = [
    ...[
      "afcDivisional1",
      "afcDivisional2",
      "nfcDivisional1",
      "nfcDivisional2",
      "afcChampions",
      "nfcChampions",
      "superbowl",
    ],
  ];
  const remaining_teams = [
    "Cincinnati Bengals",
    "Buffalo Bills",
    "Kansas City Chiefs",
    "Jacksonville Jaguars",
    "Philadelphia Eagles",
    "San Francisco 49ers",
    "Dallas Cowboys",
    "New York Giants",
  ];
  let possiblePoints = 0;
  remaining_games.forEach((game) => {
    if (remaining_teams.indexOf(bracket[game]) >= 0) {
      possiblePoints += getPointValueForGame(game);
    }
  });
  return possiblePoints + getPoints(bracket);
};

const pointSystem = [
  { game: "WildCard", points: 2 },
  { game: "Divisional", points: 3 },
  { game: "Champions", points: 6 },
  { game: "superbowl", points: 12 },
];
export const getPoints = (bracket) => {
  // eslint-disable-next-line no-console
  let points = 0;
  games.forEach((game) => {
    if (perfectBracket[game] === bracket[game]) {
      points += getPointValueForGame(game);
    }
  });
  return points;
};

function getTeamBySeed(conference, team) {
  return Object.keys(conference).find((key) => conference[key] === team);
}

function getPointValueForGame(game) {
  let score = 0;
  pointSystem.forEach((round) => {
    if (game.includes(round.game)) {
      score = round.points;
    }
  });
  return score;
}

export const getSeedingForBracket = (bracket, conference) => {
  if (conference === "nfc") {
    const ordered_matches = [
      bracket.nfcWildCard1,
      bracket.nfcWildCard2,
      bracket.nfcWildCard3,
    ];
    const seeding = [];
    ordered_matches.forEach((match) => {
      {
        seeding.push(nfcTeamSeeds[match]);
      }
    });
    seeding.sort();
    seeding.reverse();
    const final_teams = [];
    seeding.forEach((seed) => {
      final_teams.push(getTeamBySeed(nfcTeamSeeds, seed));
    });
    return final_teams;
  } else if (conference === "afc") {
    const ordered_matches = [
      bracket.afcWildCard1,
      bracket.afcWildCard2,
      bracket.afcWildCard3,
    ];
    const seeding = [];
    ordered_matches.forEach((match) => {
      {
        seeding.push(afcTeamSeeds[match]);
      }
    });
    seeding.sort();
    seeding.reverse();
    const final_teams = [];
    seeding.forEach((seed) => {
      final_teams.push(getTeamBySeed(afcTeamSeeds, seed));
    });
    return final_teams;
  }
};

const exportObjectToSortedArray = (object) => {
  const map = new Map(Object.entries(object));
  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  // const keys = Object.keys(object);
  // keys.forEach((key) => {
  //   var key = map();
  //   key.put()
  //   res.push(key:  object[key]){
  //    );
  // });
  // console.log(res);
  return sortedMap;
};

export const getSuperbowlFavorites = () => {
  var res = {};
  data.forEach(function (v) {
    res[v.superbowl] = (res[v.superbowl] || 0) + 1;
  });
  return exportObjectToSortedArray(res);
};

export const getNumberOfPerfectBrackets = () => {
  var count = 0;
  data.forEach((bracket) => {
    if (getRemainingPossiblePoints(bracket) === 48) {
      count += 1;
    }
  });
  return count;
};
