import data from '../data';

export default function getBracketFromID(id) {
  return data.filter((item) => item.id.toString() === id)[0];
}
