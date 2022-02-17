const printVisualNuts = require("./print-visual-nuts");

test("should return a range of number based on a size list", () => {
  const printer = printVisualNuts(10);

  expect(printer.length).toBe(10);
});
