const printVisualNuts = require("./print-visual-nuts");

test("should return a range of number based on a size list", () => {
  const printer = printVisualNuts(10);

  expect(printer.length).toBe(10);
});

test("should return the default much index range size", () => {
  const printer = printVisualNuts();
  expect(printer.length).toBe(100);
});
