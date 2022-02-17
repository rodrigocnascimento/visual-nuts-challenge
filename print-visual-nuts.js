function range(sizeList = 100) {
  return [...Array(sizeList).keys()];
}

function isDivisibleBy(index) {
  if (index % 3 === 0 && index % 5 === 0) {
    return "Visual Nuts";
  } else if (index % 5 === 0) {
    return "Nuts";
  } else if (index % 3 === 0) {
    return "Visual";
  }
}

module.exports = function (sizeList) {
  return range(sizeList).map((index) => {
    return isDivisibleBy(index);
  });
};
