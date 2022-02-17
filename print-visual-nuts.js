function range(sizeList) {
  return [...Array(sizeList).keys()];
}

module.exports = function (sizeList) {
  return range(sizeList);
};
