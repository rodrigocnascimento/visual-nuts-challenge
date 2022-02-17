function range(sizeList = 100) {
  return [...Array(sizeList).keys()];
}

module.exports = function (sizeList) {
  return range(sizeList);
};
