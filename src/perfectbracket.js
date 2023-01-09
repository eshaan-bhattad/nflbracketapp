export const perfectBracket = {
  name: 'Perfect Bracket',
  afcWildCard1: 'Cincinnati Bengals',
  afcWildCard2: 'Buffalo Bills',
  afcWildCard3: 'Kansas City Chiefs',
  nfcWildCard1: 'Tampa Bay Buccaneers',
  nfcWildCard2: 'San Francisco 49ers',
  nfcWildCard3: 'Los Angeles Rams',
  afcDivisional1: 'Cincinnati Bengals',
  afcDivisional2: 'Kansas City Chiefs',
  nfcDivisional1: 'San Francisco 49ers',
  nfcDivisional2: 'Los Angeles Rams',
  afcChampions: 'Cincinnati Bengals',
  nfcChampions: 'Los Angeles Rams',
  superbowl: 'Los Angeles Rams',
  superbowlTiebreaker: 0,
  points: 43,
  id: 9999,
};

const games = [
  'afcWildCard1',
  'afcWildCard2',
  'afcWildCard3',
  'nfcWildCard1',
  'nfcWildCard2',
  'nfcWildCard3',
  'afcDivisional1',
  'afcDivisional2',
  'nfcDivisional1',
  'nfcDivisional2',
  'afcChampions',
  'nfcChampions',
  'superbowl',
];
const pointSystem = [
  { game: 'WildCard', points: 2 },
  { game: 'Divisional', points: 3 },
  { game: 'Champions', points: 6 },
  { game: 'superbowl', points: 12 },
];
export default function getPoints(bracket) {
  // eslint-disable-next-line no-console
  let points = 0;
  games.forEach((game) => {
    if (perfectBracket[game] === bracket[game]) {
      points += getPointValueForGame(game);
    }
  });
  return points;
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
