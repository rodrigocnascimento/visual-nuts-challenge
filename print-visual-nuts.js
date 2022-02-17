function range(sizeList = 100) {
  return [...Array(sizeList).keys()];
}

function isDivisibleBy(num, divisor) {
  return num % divisor === 0;
}

function mapToVisualNutsList(index) {
  const isDivisibleBy3 = isDivisibleBy(index, 3);
  const isDivisibleBy5 = isDivisibleBy(index, 5);

  if (isDivisibleBy3 && isDivisibleBy5) {
    return "Visual Nuts";
  } else if (isDivisibleBy5) {
    return "Nuts";
  } else if (isDivisibleBy3) {
    return "Visual";
  } else {
    return index;
  }
}

function main(sizeList) {
  const visualNutsList = range(sizeList).map((index) =>
    mapToVisualNutsList(index)
  );

  console.log(visualNutsList.join("\n"));

  return visualNutsList;
}

main();

module.exports = main;
