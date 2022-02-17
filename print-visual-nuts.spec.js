const printVisualNuts = require("./print-visual-nuts");

test("should return empty an array if was passed 0 as size list param", () => {
  const printer = printVisualNuts(0);

  expect(printer).toEqual([]);
});

test("should return a range of number based on a size list", () => {
  const printer = printVisualNuts(10);

  expect(printer.length).toBe(10);
});

test("should return the default much index range size", () => {
  const printer = printVisualNuts();
  expect(printer.length).toBe(100);
});

test("should return Visual if the third index is divisible by 3", () => {
  const printer = printVisualNuts(10);

  expect(printer[3]).toBe("Visual");
});

test("should return Nuts if the first index is divisible by 5", () => {
  const printer = printVisualNuts(11);

  expect(printer[5]).toBe("Nuts");
});

test("should return the fifteenth element as Visual Nuts as is divisible by 3 and 5 at same time", () => {
  const printer = printVisualNuts(16);

  expect(printer[15]).toBe("Visual Nuts");
});
