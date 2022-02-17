const printVisualNuts = require("./print-visual-nuts");

test("should return a range of number based on a size list", () => {
  const printer = printVisualNuts(10);

  expect(printer.length).toBe(10);
});

test("should return the default much index range size", () => {
  const printer = printVisualNuts();
  expect(printer.length).toBe(100);
});

test("should return Visual if the first index is divisible by 3", () => {
  const printer = printVisualNuts(10);

  expect(printer[0]).toBe("Visual");
});

test("should return Nuts if the first index is divisible by 5", () => {
  const printer = printVisualNuts(11);

  expect(printer[5]).toBe("Nuts");
});
