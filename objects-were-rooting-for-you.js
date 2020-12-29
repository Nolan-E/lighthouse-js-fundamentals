const judgeVegetable = function (vegetables, metric) {
  let topMetric = 0;
  let topSubmitter = "";
  // if (metric === "redness") {
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i][metric] > topMetric) {
        topMetric = vegetables[i][metric];
        topSubmitter = vegetables[i]["submitter"];
      }
    }
  // }
  // if (metric === "plumpness") {
  //   for (let i = 0; i < vegetables.length; i++) {
  //     if (vegetables[i]["plumpness"] > topMetric) {
  //       topMetric = vegetables[i]["plumpness"];
  //       topSubmitter = vegetables[i]["submitter"];
  //     }
  //   }
  // }
  return topSubmitter;
};


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

// const metric = 'redness'

console.log(judgeVegetable(vegetables, 'redness'));
console.log(judgeVegetable(vegetables, 'plumpness'));

// EXPECTED OUTPUT: "Old Man Franklin"