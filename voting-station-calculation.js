const allStations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Higher Learning', 15, 'school'],
  ['Farro Pizza', 50, 'restaurant'],
  ['Legacy Lake Hall', 150, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if ((stations[i][1] >= 20) && (stations[i][2] === 'community centre' || stations[i][2] === 'school')) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
};

console.log(chooseStations(allStations));