const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
    return bins;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
    return bins;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }
};

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));


/*EXPECTED OUTPUT
{
  waste: 5,
  recycling: 2,
  compost: 5
}*/